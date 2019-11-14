import * as React from "react";
import Link from "next/link";
import Head from "next/head";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

import {
  Input,
  Menu,
  Responsive,
  // Icon,
  // Button,
  Sidebar,
  // Dropdown,
  Container
} from "semantic-ui-react";

type Props = {
  title?: string;
  isAuthenticated?: boolean;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title"
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
      />
    </Head>
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        // onHide={() => {
        //   this.setState({ visible: false });
        //   // dispatch({ name: 'onHide', type: 'updateLog' })
        // }}
        vertical
        // visible={this.state.visible}
        width="thin"
      >
        <Menu.Item as="a">Home</Menu.Item>
        <Menu.Item as="a">Games</Menu.Item>
        <Menu.Item as="a">Channels</Menu.Item>
      </Sidebar>
      <Container>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Menu secondary>
            <Menu.Item name="Online Sohopathi">
              {/* <img src={logo} style={{ width: 64, height: 45 }} alt="logo" /> */}
              <h3 style={{ marginTop: 0 }}>Online Sohopathi</h3>
            </Menu.Item>
            <Link href="/">
              <Menu.Item
                name="home"
                // as={Link}
                // to="/"
                // active={activeItem === "home"}
                // onClick={this.handleItemClick}
              />
            </Link>
            <Link href="/about">
              <Menu.Item
                name="about"
                // as={Link}
                // to="/about"
                // active={activeItem === "ask"}
                // onClick={this.handleItemClick}
              />
            </Link>
            <Link href="/users">
              <Menu.Item
                name="users"
                // as={Link}
                // to="/users"
                // active={activeItem === "blog"}
                // onClick={this.handleItemClick}
              />
            </Link>
            <Menu.Menu position="right">
              <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>
              {/* <Menu.Item
                  name='logout'
                  active={activeItem === "logout"}
                  onClick={this.handleItemClick}
                /> */}
              {
                // this.props.isAuthenticated ?
                //   <Menu.Item
                //     name='profile'
                //     as={ Link }
                //     to="/profile"
                //   >
                //     <Dropdown trigger={<span>
                //       <Icon name='user' /> {"Hello, "+this.props.user.username}
                //     </span>} options={options} />
                //   </Menu.Item>
                //   :
                //   <Menu.Item
                //     name='sign-in'
                //     as={ Link }
                //     to="/sign-in"
                //   >
                //     <Button primary>Sign in</Button>
                //   </Menu.Item>
              }
            </Menu.Menu>
          </Menu>
        </Responsive>
      </Container>
      <Container>{children}</Container>
    </Sidebar.Pushable>
  </div>
);

export default Layout;
