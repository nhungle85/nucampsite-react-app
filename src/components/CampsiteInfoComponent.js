import React from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";

//rce for create react class component
function RenderComments({comments}) {
  if (comments) {
    return (
      <div className="col-md-5 m-1">
        <h4>Comments</h4>
        {comments.map((comment) => (
          <div className="mb-2">
            <div>{comment.text}</div>
            <div>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
          </div>
        ))}
      </div>
    );
  }
}

function RenderCampsite({campsite}) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={campsite.image} alt={campsite.name} />
        <CardBody>
          <CardTitle>{campsite.name}</CardTitle>
          <CardText>{campsite.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function CampsiteInfo({campsite}) {
    if (campsite) {
      return (
        <div className="container">
          <div className="row">
            <RenderCampsite campsite={campsite}/>
            <RenderComments comments={campsite.comments}/>
          </div>
        </div>
      );
    }
    return <div></div>;
  
}

export default CampsiteInfo;
