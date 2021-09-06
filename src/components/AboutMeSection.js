import React from "react";
import Image from "./Image";
import { Segment, Grid } from "semantic-ui-react";

const AboutMeSection = () => {
  return (
    <Segment raised>
      <Grid>
        <Grid.Row>
          <Grid.Column width={6} style={{border:"black 2px solid"}}>
            <h1>This is the image</h1>
          </Grid.Column>
          <Grid.Column width={5} style={{border:"black 2px solid"}}>
            <h1>This is some text</h1>
          </Grid.Column>
          <Grid.Column width={5} style={{border:"black 2px solid"}}>
            <h1>This is even more text</h1>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default AboutMeSection;
