import React, { useEffect } from "react";
import { Switch, Link, useRouteMatch, Route } from "react-router-dom";
import Edit from "./Edit";
import { Table } from "react-bootstrap";
import Request from "./commons/request";
import ApiRoutes from "./commons/api-routes";

const getListPosts = () => {
  return Request.get(
    ApiRoutes.posts,
    {},
    { "Content-Type": "application/json" }
  )
    .then((res) => res.data)
    .catch(console.error);
};

const ComponentA = () => {
  const { url } = useRouteMatch();

  return (
    <div>
      <h1>Posts</h1>
      <Table striped bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
      </Table>
      <Switch>
        <Route path={`${url}/edit/:id`}>
          <Edit />
        </Route>
        <Route path={`${url}/delete/:id`}>
          <Edit />
        </Route>
      </Switch>
    </div>
  );
};

export default ComponentA;
