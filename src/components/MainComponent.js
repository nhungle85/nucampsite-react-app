import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import { CAMPSITES } from "../share/campsites";
import CampsiteInfo from "./CampsiteInfoComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Redirect, Route, Switch } from "react-router";

//rec
export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { campsites: CAMPSITES,
             };
    }

    render() {
      const HomePage = () => {
        return(
          <Home />
        );
      };
      return (
        <div className="Main">
          <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/directory" render={() => <Directory campsites={this.state.campsites} />} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
        </div>
      );
    }
}

export default Main
