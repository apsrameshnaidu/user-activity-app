import { Modal, Container, Row, Col, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

const ActivityModal = (props) => {

    const [filterDate, setFilterDate] = useState(new Date());
    const [allActivities, setAllActivities] = useState(true);

    const handleChange = (date: Date) => {
        setFilterDate(date);
    };

    const datesAreEqual = (date1: Date, date2: Date) => {
        let d1 = new Date(date1);
        let d2 = new Date(date2);
        let match = false;
        if (d1.getFullYear() === d2.getFullYear()) {
            if (d1.getMonth() === d2.getMonth()) {
                if (d1.getDate() === d2.getDate()) {
                    return !match;
                } else return match;
            } else return match;
        } else return match;
    };

    const activityTime = (period: any) => {
        return (
            <React.Fragment key={Math.random()}>
                <p className="border-top pt-2 text-success">
                    {period?.start_time} - {period?.end_time}
                </p>
            </React.Fragment>
        )
    }

    const activity_periods = (actPeriods: any) => {
        let periods = [];
        actPeriods?.map((period: any) => {
            if (allActivities) {
                periods.push(activityTime(period));
            } else {
                let activityAvailable = datesAreEqual(filterDate, period?.start_time);
                if (activityAvailable) {
                    periods.push(activityTime(period));
                }
            }
        })
        if (!periods?.length) {
            return (
                <p className="border-top pt-2 text-warning">
                    No activity present on this date.
                </p>
            )
        }
        return periods;
    }

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Activity Periods of {props?.userdata?.real_name}
                </Modal.Title>
            </Modal.Header>
            <div className="row ml-3 mt-2 pl-3">
                <Form.Group controlId="formBasicCheckbox" className="col-4 pl-0">
                    <Form.Check type="checkbox" label="All Activities" onChange={() => setAllActivities(!allActivities)} checked={allActivities} />
                </Form.Group>
                {<DatePicker className="col-8"
                    selected={filterDate}
                    onChange={handleChange}
                    dateFormat='dd/MM/yyyy'
                    disabled={allActivities}
                />}
            </div>
            <Modal.Body className="show-grid">
                <Container>
                    <Row className="border">
                        <Col xs={12} md={12}>
                            {activity_periods(props?.userdata?.activity_periods)}
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(e) => {
                    props.onHide(e)
                    
                }}>Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ActivityModal;