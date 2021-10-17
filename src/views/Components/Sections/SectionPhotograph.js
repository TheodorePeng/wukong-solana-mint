import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Small from "components/Typography/Small.js";
import Danger from "components/Typography/Danger.js";
import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";
import Quote from "components/Typography/Quote.js";

import image1 from "assets/img/wukong/wukong1.png";
import image2 from "assets/img/wukong/wukong2.png";
import image3 from "assets/img/wukong/wukong3.png";
import image4 from "assets/img/wukong/wukong4.png";
import image5 from "assets/img/wukong/wukong5.png";
import image6 from "assets/img/wukong/wukong6.png";
import image7 from "assets/img/wukong/wukong7.png";
import image8 from "assets/img/wukong/wukong8.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/photographStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPhotograph() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={5} sm={5} md={3} lg={3}>
            <img
              src={image1}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
          </GridItem>            
          <GridItem xs={5} sm={5} md={3} lg={3}>
            <img
              src={image2}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
          </GridItem>
          <GridItem xs={5} sm={5} md={3} lg={3}>
            <img
              src={image3}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
          </GridItem>
          <GridItem xs={5} sm={5} md={3} lg={3}>
            <img
              src={image4}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
          </GridItem>            
        </GridContainer>
      </div>
      <p />
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={5} sm={5} md={3} lg={3}>
            <img
              src={image5}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
          </GridItem>            
          <GridItem xs={5} sm={5} md={3} lg={3}>
            <img
              src={image6}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
          </GridItem>
          <GridItem xs={5} sm={5} md={3} lg={3}>
            <img
              src={image7}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
          </GridItem>
          <GridItem xs={5} sm={5} md={3} lg={3}>
            <img
              src={image8}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
          </GridItem>            
        </GridContainer>
      </div>
    </div>
  );
}
