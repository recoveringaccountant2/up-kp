import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Nav from '../../components/Nav/Nav'
// import Header from '../../components/Header/Header';
import AddAsset from '../../components/AddAsset/AddAsset'
// import AssetList from '../../components/AssetList/AssetList'
import * as assetsAPI from '../../utils/assetApi';
// import {create, getAll} from '../../utils/postApi'
import { Grid } from 'semantic-ui-react'

export default function NewAssetPage({ user, handleLogout }){
  console.log("<- new asset page 1")
  const [assets, setAssets] = useState([])
  const navigate = useNavigate();

	// C create in Crud
  async function handleAddAsset (asset){
    console.log(asset)
    const data = await assetsAPI.create(asset);
    console.log(data.asset, ' <-- new asset from new asset page function', data, ' <-- data var from new asset page function')
    setAssets(assets => [data.asset, ...assets])
    setTimeout(() => {navigate("/")}, 3000);
  }

  // R read in crud
  // async function getAssets(){

  //   try {
  //     const data = await assetsAPI.getAll();
  //     setAssets([...data.assets])
  //   } catch(err){
  //     console.log(err, ' <-- this is the error from dashboard function')
  //   }
  // }

  // useEffect runs once 
  // the component is first rendered (whenever you first view the component)
  // Component Lifecycle in react
  // useEffect(() => {
  //   getAssets()
  // }, [])
  
    return (
      <Grid centered >

        <Grid.Row>
          <Grid.Column>
            {/* <Nav user={user} handleLogout={handleLogout} /> */}
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <AddAsset handleAddAsset={handleAddAsset}/>
          </Grid.Column>
        </Grid.Row>

    </Grid>
    )
}