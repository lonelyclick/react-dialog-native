# React Dialog Native

A React Dialog based on HTML5 `<dialog>`

# Introduction

## Motivation

Some of the latest browsers already support the [dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) tag, and [dialog-polyfill](https://github.com/GoogleChrome/dialog-polyfill) already exists, and native dialog lacks some features.

- `open` attribute cannot open backdrop at the same time
- cannot add a click event for backdrop
- react support


# Tutorial

## Installation

For NPM users:

- `npm install --save react react-dom prop-types dialog-polyfill` // see package.json:peerDependencies

- `npm install --save react-dialog-native`

For UMD user:

- `ReactDialogNative`
- `React`
- `ReactDOM`
- `PropTypes`
- `dialogPolyfill`

## API Reference

```
static propTypes = {
  open: PropTypes.bool,
  className: PropTypes.string,
  closeBackdropOnClick: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};
```

## Example

```
import React from 'react';
import Dialog from 'react-dialog-native';

import 'dialog-polyfill/dialog-polyfill.css';
import 'react-dialog-native/dist/react-dialog-native.css'

export default class Example extends Component {
  render() {
    return (
      <Dialog open={dialogOpen1} onClose={this.handleClose}>
        This is a Dialog
        <button type="button" onClick={this.handleClose}>close</button>
      </Dialog>
    );
  }
}
```

# License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017-present
