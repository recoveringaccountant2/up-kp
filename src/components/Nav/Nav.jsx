import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Icon, Image } from "semantic-ui-react";


function Nav({ user, handleLogout }) {
  return (
    <Segment clearing>

      <Header as='h2'>
        UpKeep - World's <span>CRUD</span>diest Asset <span>MERN</span>tenance Tool
      </Header>

      <hr></hr>

      <Header as="h2" floated="left">

        <Link to="/">
          {/* <Icon name="list"></Icon> */}
          [Dashboard] &nbsp; &nbsp;
        </Link>

        <Link to="/newasset">
          {/* <Icon name="plus"></Icon> */}
          [New Asset]
        </Link>

      </Header>

      <Header as="h2" floated="right">

        <Link to="/" >
          [Hiya {user.firstName}!] &nbsp; &nbsp;
        </Link>

        <Link to="/" onClick={handleLogout}>
          [Logout]
        </Link>

      </Header>

    </Segment>
          
  )
}

export default Nav;