import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Redirect, Route, Switch } from "react-router";
import Contact from "./ContactComponent";
import { COMMENTS } from '../share/comments';
import { PARTNERS } from '../share/partners';
import { PROMOTIONS } from '../share/promotions';
import { CAMPSITES } from "../share/campsites";

//rec
export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          campsites: CAMPSITES,
          comments: COMMENTS,
          partners: PARTNERS,
          promotions: PROMOTIONS
        };
    }

    render() {
      const HomePage = () => {
        return(
          <Home campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                partner={this.state.partners.filter(partner => partner.featured)[0]}/>
        );
      };
      return (
        <div className="Main">
          <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/directory" render={() => <Directory campsites={this.state.campsites} />} />
            <Route exact path="/contactus" component={Contact} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
        </div>
      );
    }
}

export default Main
