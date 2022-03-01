import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Icon, Image } from "semantic-ui-react";

function Nav({ user, handleLogout }) {
  return (
    <Segment clearing>

      <Header as="h2" floated="left">

        {/* <Link to="/">
          <Icon name="list"></Icon>
        </Link> */}

        <Link to="/newasset">
          New Asset
        </Link>



      </Header>


      <Header as="h2" floated="right">

        {/* <Link to={`/${user.username}`}>
          <Image
            src={
              user?.photoUrl
                ? user?.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            }
            avatar
          ></Image>
        </Link> */}

        <Link to="/logout" onClick={handleLogout}>
          Logout
        </Link>

      </Header>

    </Segment>
  )
}

export default Nav;