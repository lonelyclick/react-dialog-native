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
    closeBackdropOnClick: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
  };

  static defaultProps = {
    open: false,
    closeBackdropOnClick: true,
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

  handleClickDialog = (event) => {
    const { closeBackdropOnClick, onClose } = this.props;
    if (!closeBackdropOnClick) return;
    const rect = event.target.getBoundingClientRect();
    const inDialog = rect.top <= event.clientY
      && event.clientY <= rect.top + rect.height
      && rect.left <= event.clientX
      && event.clientX <= rect.left + rect.width;

    if (!inDialog) {
      onClose();
    }
  }

  render() {
    const { className, children } = this.props;

    return (
      <dialog
        className={cx('Dialog', className)}
        ref={(dialog) => { this.dialogRef = dialog; }}
        onClick={this.handleClickDialog}
      >
        {children}
      </dialog>
    );
  }
}

export default Dialog;
