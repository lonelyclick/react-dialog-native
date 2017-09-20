import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getTodo } from '@/store/actions/todos';

class Index extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    // addTodo: PropTypes.func.isRequired,
    getTodo: PropTypes.func.isRequired,
  };

  componentDidMount() {
    // this.props.addTodo('dddd');
    this.props.getTodo();
  }

  render() {
    const { todos } = this.props;

    return (
      <div>
        {todos.map((todo, index) => (<div key={`todo-${index}`}>Hello, {todo.name}</div>))}
      </div>
    );
  }
}

export default connect(
  ({ todos }) => ({ todos }),
  {
    // addTodo,
    getTodo,
  },
)(Index);
