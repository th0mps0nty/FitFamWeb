import React from 'react';
import { withFirebase } from '../Firebase/Firebase-index';
import { Button } from 'reactstrap';

const SignOutButton = ({ firebase }) => (
  <Button size="sm" color="danger" outline onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);
