import React from "react";
import { connect } from "react-redux";

import { withAuthorization } from "../Session/Session";

const HomePage = () => (
  <div className="container">
    <h1>Home Page</h1>
    <div className="container">
      <p>The Home Page is accessible by every signed in user.</p>
    </div>
  </div>
);

const condition = authUser => !!authUser;

const mapStateToProps = state => {
  return {
    projects: state.project.projects,
  };
};

export default connect(mapStateToProps)(HomePage);
// export default withAuthorization(condition)(HomePage);
