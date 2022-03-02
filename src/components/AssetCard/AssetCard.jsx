import React from 'react';
import * as assetApi from "../../utils/assetApi";
import { Card, Icon, Image, Button } from 'semantic-ui-react'


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
              // avatar
              // src={ asset?.user?.photoUrl ? asset.user.photoUrl : 'https://react.semantic-ui.com/images/wireframe/square-image.png'}
              src={`${asset.photoUrl}`}
          />
          {/* <Card.Header floated="right">{asset?.user?.username}</Card.Header> */}
          <Card.Header floated="right">{asset?.user?.username}</Card.Header>



          <Card.Header floated="right" text={ asset }>

          {/* {`${asset.user}`}
          {`${asset.nickName}`}
          {`${asset.year}`}
          {`${asset.make}`}
          {`${asset.model}`} */}

          {`${asset.nickName}`}
          {`${asset._id}`}
          {`${asset.photoUrl}`}

          </Card.Header> 


      </Card.Content>
  




      {/* <Image src={`${asset.photoUrl}`} wrapped ui={false} /> */}

      <Card.Content>
      <Card.Description>
        {asset.model}
        put asset details here with accordian
      </Card.Description>
      </Card.Content>





      <Card.Content extra textAlign={'center'}>

        <Icon name={'zoom-in'} size='large' color={'grey'} />
        {/* {asset.services.length}  */}
        View Asset Details

        <Icon name={'edit'} size='large' color={'grey'} />
        {/* {asset.services.length}  */}
        Edit Asset

        {/* <Icon name={'trash'} size='large' color={'grey'} onClick={removeAsset(asset._id)} /> */}
        <Icon name={'trash'} size='large' color={'grey'} />
        {/* {asset.services.length}  */}
        Delete Asset

        <Button icon='trash alternate' onClick={deleteAsset} />


      </Card.Content>



      <Card.Content extra textAlign={'center'}>

        <Icon name={'wrench'} size='large' color={'grey'} />
        {/* {asset.services.length}  */}
        Add Service

        <Icon name={'book'} size='large' color={'grey'} />
        {/* {asset.services.length}  */}
        Service History

      </Card.Content>


      <Card.Content extra textAlign={'center'}>

        <Icon name={'book'} size='large' color={'grey'} />
        {/* {asset.services.length}  */}
        Add Part

        <Icon name={'cogs'} size='large' color={'grey'} />
        {/* {asset.services.length}  */}
        Parts Inventory

      </Card.Content>




    </Card>
  );
}

export default AssetCard;