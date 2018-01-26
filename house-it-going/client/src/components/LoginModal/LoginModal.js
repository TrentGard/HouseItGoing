import React, { Component } from 'react';
import ZipForm from '../../components/ZipForm';

import { 
  Button, 
  Modal 
} from 'semantic-ui-react';

class LoginModal extends Component {
  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div>
        <Button onClick={this.show('tiny')}>Login</Button>

        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>
            Login
          </Modal.Header>
          <Modal.Content>
            <p>Please login to your account to view your saved listings</p>
          </Modal.Content>
          <Modal.Actions>
            <ZipForm />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default LoginModal;
