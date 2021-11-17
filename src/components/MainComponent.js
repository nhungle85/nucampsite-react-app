import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import { CAMPSITES } from "../share/campsites";
import CampsiteInfo from "./CampsiteInfoComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

//rec
export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { campsites: CAMPSITES,
            selectedCampsite: null };
    }

    onCampsiteSelect(campsiteId) {
        this.setState({selectedCampsite: campsiteId});
    }
      render() {
        return (
          <div className="Main">
            <Header />
            <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)}/>
            <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} />
            <Footer />
          </div>
        );
      }
}

export default Main
