import React from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import AssetCard from "../AssetCard/AssetCard";

export default function AssetList({ assets, user, numPhotosCol }) {

  if(!assets.length){
	  return <h2>Please add a <Link to="/newasset">new asset</Link>.</h2>
  }

  return (
    <Card.Group itemsPerRow={numPhotosCol} stackable>
      {assets.map((asset) => {
        return <AssetCard asset={asset} key={asset._id} user={user} />;
      })}
    </Card.Group>
  );
}
