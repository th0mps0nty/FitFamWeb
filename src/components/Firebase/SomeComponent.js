import React from 'react';

import { FirebaseContext } from '../Firebase/Firebase-index';

const SomeComponent = () => (
  <FirebaseContext.Consumer>
    {firebase => {
      return <div>I've access to Firebase and render something.</div>;
    }}
  </FirebaseContext.Consumer>
);

export default SomeComponent;

//This is an example to show how access to Firebase is provided in this app
