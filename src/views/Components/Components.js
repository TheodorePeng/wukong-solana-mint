import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import * as anchor from "@project-serum/anchor";

// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import HeaderLinksSmall from "components/Header/HeaderLinksSmall.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionRoadmap from "./Sections/SectionRoadmap.js";
import SectionPhotograph from "./Sections/SectionPhotograph.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionDownload from "./Sections/SectionDownload.js";

import InnerBackground from "assets/img/bg-blue.jpg";

import styles from "assets/jss/material-kit-react/views/components.js";
import { Tooltip } from "@material-ui/core";

const useStyles = makeStyles(styles);

var rootStyle = {
  backgroundColor: "#080B1B",
  color: "white",
  height: "100%"
};

var innerBgStyle = {
  backgroundImage: `url(${InnerBackground})`
};

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div style={rootStyle}>
      <Header
        brand="WuKongSol"
        rightLinks={<HeaderLinks />}
        rightLinksSmall={<HeaderLinksSmall />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "blue",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg-wukong.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>WuKong Sol</h1>
                <h3 className={classes.subtitle}>
                  The Next Generation NFT
                </h3>
              </div>
              <br />
              <br />
              <br />
              <div>
                <Tooltip title="Release Time: TBA" enterDelay={500} leaveDelay={200}>
                  <span>
                    <Button
                      color="primary" 
                      size="xxlg"
                      disabled
                    >
                      <b>MINT NOW!</b>
                    </Button>
                  </span>
                </Tooltip>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div style={innerBgStyle} className={classNames(classes.main, classes.mainRaised)}>
        <SectionPhotograph />
        <SectionRoadmap />
      </div>


      <Footer />
    </div>
  );
}
