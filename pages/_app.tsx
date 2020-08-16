import React from 'react';
import App from 'next/app';
import { wrapper } from '../components/redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
        <Component {...pageProps} />
    )
  }
}

export default wrapper.withRedux(MyApp);