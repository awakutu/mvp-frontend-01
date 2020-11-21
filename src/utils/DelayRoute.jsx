import React from "react";
import { Route, useHistory } from "react-router-dom";

function DelayRoute({ component: Component }) {
  const history = useHistory();

  return (
    <Route
    render={(props) => setTimeout(() => history.push("/Login"), 5000) ? <Component {...props} /> : null}
    />
  );
}

export default DelayRoute