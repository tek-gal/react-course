import React from 'react';
import './Modal.css';

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  }

  toggleModal() {
    this.setState({
      ...this.state,
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const toggleModal = this.toggleModal.bind(this);

    return (
      <React.Fragment>
        <button onClick={toggleModal}>Open modal</button>

        {this.state.isOpen && <div className="modal">
          <div className="modal-body">
            <h1>Modal title</h1>
            <p>I am an awesome modal!</p>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>}
      </React.Fragment>
    );
  }
}
