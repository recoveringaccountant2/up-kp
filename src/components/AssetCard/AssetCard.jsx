import React from 'react';
import * as assetApi from "../../utils/assetApi";
import { Card, Icon, Image, Button } from 'semantic-ui-react'
// import ServiceList from "../../components/ServiceList/ServiceList";
import AddService from "../../components/AddService/AddService";

function AssetCard({asset, isDashboard, removeAsset}) { 

  function deleteAsset(e) {
    e.preventDefault()
    try {
      assetApi.deleteAsset(asset._id)
    } catch (err) {
      console.log(err.message, "<- error from delete asset function in asset card");
    }
  }


  return (
    <Card key={asset._id}>
   
      <Card.Content textAlign='left'>
          <Image
              floated='left'
              size='small'
              src={`${asset.photoUrl}`}
          />
          <Card.Header floated="right">
            {asset.nickName}<br></br>

            {`${asset.year} ${asset.make} ${asset.model}`}<br></br><br></br><br></br>

            <a onClick={deleteAsset} >
              <Icon name={'trash'} size='large' color={'grey'} />
              Delete Asset
            </a>

          </Card.Header>

      </Card.Content>
  



      <Card.Content>

      <Card.Header textAlign='center'><Icon name={'wrench'} size='large' color={'grey'} />Service History</Card.Header>

      <Card.Description>

        {/* <ServiceList /> */}

      </Card.Description>
      </Card.Content>


      <Card.Content>

      <Card.Description>

        <AddService />

      </Card.Description>
      </Card.Content>


      <Card.Content extra textAlign={'center'}>
{/* 
        <Icon name={'zoom-in'} size='large' color={'grey'} />

        View Asset Details


        <Icon name={'edit'} size='large' color={'grey'} />

        Edit Asset
 */}

        <a onClick={deleteAsset} >
        <Icon name={'trash'} size='large' color={'grey'} />
        Delete Asset
        </a>

      </Card.Content>



      {/* <Card.Content extra textAlign={'center'}>

        <Icon name={'wrench'} size='large' color={'grey'} />

        Add Service

        <Icon name={'book'} size='large' color={'grey'} />

        Service History

      </Card.Content> */}

{/* 
      <Card.Content extra textAlign={'center'}>

        <Icon name={'book'} size='large' color={'grey'} />
        Add Part

        <Icon name={'cogs'} size='large' color={'grey'} />
        Parts Inventory

      </Card.Content>
 */}



    </Card>
  );
}

export default AssetCard;