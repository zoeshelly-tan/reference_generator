import React from 'react'
import { Grid, Placeholder, Segment } from 'semantic-ui-react'

const PlaceholderExampleGrid = (props) => (
  <Grid columns={12} stackable>
    <Grid.Column>
      <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
          {props.authors},{props.year},{props.title},{props.title},{props.city}
            <Placeholder.Line length='medium' />
            <Placeholder.Line length='short' />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Grid.Column>
  </Grid>
)

export default PlaceholderExampleGrid