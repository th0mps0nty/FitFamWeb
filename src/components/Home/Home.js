import React from 'react';

import { withAuthorization } from '../Session/Session';

const HomePage = () => (
  <div className="container">
    <h1>Home Page</h1>
    <div className="container">
      <p>The Home Page is accessible by every signed in user.</p>
    </div>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
