import React, { Component } from 'react';
import { withFirebase } from '../Firebase/Firebase-index';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key
      }));

      this.setState({
        users: usersList,
        loading: false
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div className="container">
        <h1>Admin</h1>
        {loading && <div>Loading ...</div>}
        <UserList users={users} />
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <ol>
    {users.map(user => (
      <li key={user.uid} style={{ marginBottom: '.25rem' }}>
        <div className="container">
          <div className="card text-white bg-dark mb-3">
            <div className="card-header">
              <strong>ID:</strong> {user.uid}
            </div>
            <div className="card-body">
              <div>
                <strong>Email:</strong> {user.email}
              </div>
              <div>
                <strong>Username:</strong> {user.username}
              </div>
              <button className="btn btn-outline-danger" type="button">
                Delete
              </button>
            </div>
          </div>
        </div>
      </li>
    ))}
  </ol>
);

export default withFirebase(Admin);
