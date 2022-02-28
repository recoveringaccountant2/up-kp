import React from "react";
import { Card } from "semantic-ui-react";
import AssetCard from "../AssetCard/AssetCard";

export default function AssetList({ assets, numPhotosCol }) {

  if(!assets.length){
	  return <span>There are no assets</span>
  }

  return (
    <Card.Group itemsPerRow={numPhotosCol} stackable>
      {assets.map((asset) => {
        return <AssetCard asset={asset} key={asset._id} />;
      })}
    </Card.Group>
  );
}
