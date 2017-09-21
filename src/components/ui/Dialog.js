import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import dialogPolyfill from 'dialog-polyfill';

import './Dialog.css';

class Dialog extends Component {
  static propTypes = {
    open: PropTypes.bool,
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    open: false,
  };

  componentDidMount() {
    dialogPolyfill.registerDialog(this.dialogRef);
    this.handleModal(this.props.open);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.open !== nextProps.open) {
      this.handleModal(nextProps.open);
    }
  }

  handleModal(open) {
    if (open) {
      this.dialogRef.showModal();
    } else {
      this.dialogRef.close();
    }
  }

  render() {
    const { className, children } = this.props;

    return (
      <dialog
        className={cx('Dialog', className)}
        ref={(dialog) => { this.dialogRef = dialog; }}
      >
        {children}
      </dialog>
    );
  }
}

export default Dialog;
