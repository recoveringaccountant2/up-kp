import React from 'react';

import { Header, Segment } from 'semantic-ui-react';


export default function PageHeader(){
    return (
        <Segment>
            <Header as='h2' >
                UpKeep - World's <span>CRUD</span>diest Asset <span>MERN</span>tenance Tool
            </Header>
        </Segment>
    )
}