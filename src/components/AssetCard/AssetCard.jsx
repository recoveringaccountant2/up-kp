import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


function AssetCard({asset, isDashboard}) { 
 
  return (
    <Card key={asset._id}>
   
      <Card.Content textAlign='left'>
          <Image
              floated='left'
              size='large'
              avatar
              src={ asset?.user?.photoUrl ? asset.user.photoUrl : 'https://react.semantic-ui.com/images/wireframe/square-image.png'}
          />
          <Card.Header floated="right">{asset?.user?.username}</Card.Header>
      </Card.Content>
  
  
      <Image src={`${asset.photoUrl}`} wrapped ui={false} />
      <Card.Content>
      <Card.Description>
        {asset.make}
        {asset.model}
      </Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={'right'}>
        {/* <Icon name={'heart'} size='large' color={'grey'} />
        {post.likes.length} Likes */}
          
      </Card.Content>
    </Card>
  );
}

export default AssetCard;