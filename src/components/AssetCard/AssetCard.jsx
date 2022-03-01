import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


function AssetCard({asset, isDashboard, removeAsset}) { 
 
  return (
    <Card key={asset._id}>
   
      <Card.Content textAlign='left'>
          <Image
              floated='left'
              size='large'
              avatar
              // src={ asset?.user?.photoUrl ? asset.user.photoUrl : 'https://react.semantic-ui.com/images/wireframe/square-image.png'}
              src={`${asset.photoUrl}`}
          />
          {/* <Card.Header floated="right">{asset?.user?.username}</Card.Header> */}
          <Card.Header floated="right">
            {asset.description}
          
          </Card.Header>
      </Card.Content>
  
  
      <Image src={`${asset.photoUrl}`} wrapped ui={false} />

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