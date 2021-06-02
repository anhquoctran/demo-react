import React from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  return <div>Topic: {id}</div>;
};

export default Edit;
