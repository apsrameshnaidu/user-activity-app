import React, { Component } from 'react';
import Router from "next/router";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  return {
    appName: state?.appName
  }
}

class App extends Component {

  componentDidMount() {
    Router.push('/users', '/users');
  }

  render() {
    return <div />;
  }
}

export default connect(mapStateToProps)(App);