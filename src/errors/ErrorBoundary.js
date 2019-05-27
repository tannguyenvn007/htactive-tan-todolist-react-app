import React, { Component } from 'react'
import Modal from 'react-responsive-modal';

export default class ErrorBoundary extends Component{
  state = {
    error: null,
    errorInfo: null,
    open: true,
  }
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }
  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>

          <Modal styles={styles} open={this.state.open} onClose={this.onCloseModal} center >
          <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </Modal>

        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  color: 'red',
};
