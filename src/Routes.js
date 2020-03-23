import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import People from "./components/pages/People";
import HeroDetails from "./components/pages/HeroDetails/HeroDetails";
const Favorites = lazy(() => import ("./components/pages/Favorites"));

function Routes() {
    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route exact path="/">
                    <People />
                </Route>

                <Route path="/favorites">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Favorites />
                    </Suspense>
                </Route>

                <Route path="/info/:name">
                    <HeroDetails />
                </Route>
            </Switch>
        </React.Fragment>
    )
}

export default Routes;
