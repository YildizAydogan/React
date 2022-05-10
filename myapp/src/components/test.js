import React from "react";
import { ProgressBar } from "react-bootstrap";

const Test = () => {
  const now = 60;

  const progressInstance = <ProgressBar now={now} label={`${now}%`} />;

  render(progressInstance);

  return <div>test</div>;
};

export default Test;