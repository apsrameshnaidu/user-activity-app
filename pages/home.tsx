import React, { Component } from 'react';
// import Router from "next/router";
import { connect } from "react-redux";
import { getUsers } from "../components/operations";
import { ListGroup } from "react-bootstrap";
import ActivityModal from "../components/activityModal";

const mapStateToProps = (state: any) => {
    return {
        users: state?.users
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        increment: () => dispatch({ type: 'INCREMENT' }),
    }
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            userdata: {}
        }
    }

    componentDidMount = async () => {
        await getUsers();
    }

    getUsersList = () => {
        let list = [];
        this.props?.users?.map((user: any) => {
            list.push(
                <ListGroup.Item
                    key={user?.id}
                    action variant="light"
                    onClick={() => this.setState({ userdata: user, modalShow: true })}
                >
                    {user?.real_name} of {user?.tz}
                </ListGroup.Item>
            );
        })
        return list;
    }

    render() {
        return <div>
            <ActivityModal show={this.state.modalShow}
                onHide={() => this.setState({ modalShow: false })}
                userdata={this.state.userdata}
            />
            <ListGroup className="p-3">
                {this.getUsersList()}
            </ListGroup>
        </div>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);