import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Icon } from "semantic-ui-react";

function Nav({ user, handleLogout }) {
  return (
    <Segment clearing>
      <Header as='h2'>
        UpKeep - World's <span>CRUD</span>diest Asset <span>MERN</span>tenance Tool
      </Header>
      <hr></hr>
      <Header as="h2" floated="left">
        <Link to="/">
          [<Icon name="list"></Icon>Dashboard] &nbsp; &nbsp;
        </Link>
        <Link to="/newasset">
          [<Icon name="plus square outline"></Icon>New Asset]
        </Link>
      </Header>
      <Header as="h2" floated="right">
        <Link to="/" >
          [<Icon name="smile outline"></Icon>Hiya {user.firstName}!] &nbsp; &nbsp;
        </Link>
        <Link to="/" onClick={handleLogout}>
        [<Icon name="hand peace outline"></Icon>Logout]
        </Link>
      </Header>
    </Segment>
  )
}

export default Nav;