// import external modules
import React, { Component } from 'react';
import "react-perfect-scrollbar/dist/css/styles.css";
// import internal(own) modules
import { withNamespaces } from 'react-i18next';
import Router from "./router";

class App extends Component {
    render() {
        return (
            <Router />
        );
    }
}

export default withNamespaces('translation')(App);
