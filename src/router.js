import React from "react";
import UsersList from './UsersList'
import User from './User'
const routes = {
  "/": () => <UsersList />,
  '/user/:id': ({id}) => <User userId={id} />
};

export default routes;