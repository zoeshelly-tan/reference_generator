import { PropTypes } from 'mobx-react'
import React from 'react';
import { Item, Icon } from 'semantic-ui-react';




const SavedList = (props) => (
  <Item.Group>

    <Item.Content>
      <Item.Header as='a'>title</Item.Header>
      <div>
        <Icon link name='close' type="button"/>
      </div>
      <Item.Description>
        <p>
     {props.title}
          </p>
      </Item.Description>
    </Item.Content>

  
  </Item.Group>
)

export default SavedList