// import external modules
import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Spinner from "../components/spinner/spinner";
import FullPageLayout from "../layouts/routes/fullpageRoutes";
import ErrorLayoutRoute from "../layouts/routes/errorRoutes";
import DefaultLayout from "./defaultLayout";
import AuthenticatedRoute from "./authenticatedRoute";

const LazyLogin = lazy(() => import("../Angle/Auth/login"));
const LazyErrorPage = lazy(() => import("../Angle/Auth/error"));

class Router extends Component {
   render() {
      return (
         // Set the directory path if you are deplying in sub-folder
         <BrowserRouter basename="">
            <Switch>

               <FullPageLayout
                  exact
                  path="/login"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyLogin {...matchprops} />
                     </Suspense>
                  )}
               />

               <ErrorLayoutRoute
                  exact
                  path="/error"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyErrorPage {...matchprops} />
                     </Suspense>
                  )}
               />

                <AuthenticatedRoute path="/" name="Home" component={DefaultLayout} />

                <ErrorLayoutRoute
                    render={matchprops => (
                        <Suspense fallback={<Spinner />}>
                            <LazyErrorPage {...matchprops} />
                        </Suspense>
                    )}
                />

            </Switch>
         </BrowserRouter>
      );
   }
}

export default Router;
