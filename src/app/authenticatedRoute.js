import React from "react";
import { Route, Redirect } from "react-router-dom";

class AuthenticatedRoute extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillUnmount() {
        // if(this.props.auth.userAuth != 1) {
        //     this.props.actions.logout();
        //     this.props.actions.setRedirectedFrom(this.props.location.pathname + this.props.location.search);
        // }
    }

    render() {

        const C = this.props.component;
        const x = 21;

        return (
            <Route
                render={props =>
                    x !== 1
                        ? <C {...props} match={this.props.computedMatch} />
                        : <Redirect to='/login' />}
            />
        )
    }

}

export default AuthenticatedRoute;
