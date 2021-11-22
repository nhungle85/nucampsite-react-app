import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from 'react-router-dom';

function RenderDirectoryItem({campsite}) {
  return (
    <Card>
      <Link to={`/directory/${campsite.id}`}>
        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
        <CardImgOverlay>
          <CardTitle>{campsite.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card> 
  )
}

function Directory ({campsites, onClick}) {
    const directory = campsites.map((camp) => {
      return (
        <div key={camp.id} className="col-md-5 m-1">
          <RenderDirectoryItem campsite={camp} />
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{directory}</div>    
      </div>
    );
}


export default Directory;
