import React from 'react'
import { Button, Item } from 'semantic-ui-react'
import "./style.css";
import { Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const BookCard = (props) => {
  console.log(props)
  // const [readMore,setReadMore] = useState(false);
  return (
    <div>
      <Item.Group>
        <Item>
          <Item.Content>
            <Item.Header as='a'>{props.title}</Item.Header>
            <Item.Meta><strong>Authors: </strong>{props.authors}</Item.Meta>
            <Item.Description>
              Description: {props.description}
            </Item.Description>
            <Item.Extra>
              <Button basic color='green' href={props.previewLink} target='_blank'>
                Link to the Book
              </Button>
              <Button basic color='red'>
                Cite
             </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      <Divider />
    </div>
  )
}

export default BookCard;