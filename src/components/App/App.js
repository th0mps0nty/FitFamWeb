import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import Landing from '../Landing/Landing';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import PasswordForget from '../PasswordForget/PasswordForget';
import Home from '../Home/Home';
import Account from '../Account/Account';
import Admin from '../Admin/Admin';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session/Session';
import StripeCheckout from 'react-stripe-checkout';

const App = () => (
  <div>
    <Router>
      <div>
        <Navigation />

        <hr />

        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
        <Route path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.ACCOUNT} component={Account} />
        <Route path={ROUTES.ADMIN} component={Admin} />
      </div>
    </Router>
    <p classname="App-intro">
      <StripeCheckout
        name={'FitFamWeb Test'}
        description={'Testing'}
        amount={1}
      />
    </p>
  </div>
);

export default withAuthentication(App);
