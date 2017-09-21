import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions as userActions } from '@/store/modules/user';
import Dialog from '@/components/ui/Dialog';

import './Index.css';

class Index extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    getUsers: PropTypes.func.isRequired,
    // addUser: PropTypes.func.isRequired,
  };

  state = {
    dialogOpen: true,
  };

  componentDidMount() {
    this.props.getUsers();
  }

  handleCloseDialog = () => {
    this.setState({
      dialogOpen: false,
    });
  }

  render() {
    const { user } = this.props;
    const { dialogOpen } = this.state;

    return (
      <div>
        <Dialog open={dialogOpen} className="Index-dialog">
          <button onClick={this.handleCloseDialog} id="close">Close</button>
        </Dialog>
        {user.ids.map((id, index) => (<div key={`todo-${index}`}>Hello, {user.entities[id].name}</div>))}
      </div>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  { ...userActions },
)(Index);
