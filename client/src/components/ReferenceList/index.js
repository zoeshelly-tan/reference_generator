import { PropTypes } from 'mobx-react'
import React from 'react';
import { Item, Icon } from 'semantic-ui-react';




const ReferenceList = (props) => (
  <Item.Group>

    <Item.Content>
      <Item.Header as='a'>title</Item.Header>
      <div>
        <Icon link name='close' type="button"/>
      </div>
      <Item.Description>
        <p>
      {props.firstName} {props.lastName}. {props.year},{props.title}, {props.edition}, {props.cityPublished}, {props.publisher}, {props.page}
          </p>
      </Item.Description>
    </Item.Content>

  
  </Item.Group>
)

export default ReferenceList