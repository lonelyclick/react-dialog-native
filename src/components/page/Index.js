import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions as userActions } from '@/store/modules/user';

class Index extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    getUsers: PropTypes.func.isRequired,
    // addUser: PropTypes.func.isRequired,
  };

  componentDidMount() {
    // this.props.addUser({
    //   id: 1,
    //   name: 'hhaa',
    // });
    this.props.getUsers();
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
)(Index);
