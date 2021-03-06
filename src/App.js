import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import StoriesList from "./components/stories-list.component";
import BugsList from "./components/bugs-list.component";
import DeveloperList from "./components/developer-list.component";
import PlanList from "./components/plan-list.component";



class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <a href="/stories" className="navbar-brand">
                        Pinguin
                    </a>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/stories"} className="nav-link">
                                Stories
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/bugs"} className="nav-link">
                                Bugs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/developers"} className="nav-link">
                                Developers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/plans"} className="nav-link">
                                Plan
                            </Link>
                        </li>
                    </div>
                </nav>

                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/stories"]} component={ StoriesList } />
                        <Route exact path="/bugs" component={BugsList} />
                        <Route exact path="/developers" component={DeveloperList} />
                        <Route exact path="/plans" component={PlanList} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
