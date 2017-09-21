import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions as userActions } from '@/store/modules/user';

class User extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    getUsers: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getUsers();
    // console.log(this.props.params);
    const { params: { id } } = this.props;
    console.log('current id is ', id);
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        {user.ids.map((id, index) => (<div key={`todo-${index}`}>Hello, {user.entities[id].name}</div>))}
      </div>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  { ...userActions },
)(User);
