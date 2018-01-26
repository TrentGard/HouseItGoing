import React, {Component} from "react";
import "./Nav.css";
import LoginModal from "../../components/LoginModal";
import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';



const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container className='fixed-menu-items'>
      <Menu.Item as='a' active>Home</Menu.Item>
      <Menu.Item as='a'>Work</Menu.Item>
      <Menu.Item as='a'>Company</Menu.Item>
      <Menu.Item as='a'>Careers</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item className='item'>
          <LoginModal />
        </Menu.Item>
        <Menu.Item>
          <Button as='a' primary>Logout</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)


class Nav extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  render() {
    const { visible } = this.state

    return (
      <div>
        { visible ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >

          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 100, padding: '1em 0em' }}
            vertical
          >

            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item as='a' active>Home</Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <LoginModal/>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Logout</Button>
                </Menu.Item>
              </Menu>
            </Container>

          </Segment>
        </Visibility>      
      </div>
    )
  }      
}

export default Nav;
