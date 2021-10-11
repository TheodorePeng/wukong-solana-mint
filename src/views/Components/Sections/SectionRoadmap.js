import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import CustomTTabs from "components/CustomTabs/CustomTTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/roadmapStyle.js";

const useStyles = makeStyles(styles);

export default function SectionRoadmap() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-roadmap">
          <GridContainer className={classes.title} justify="center">
            <GridItem xs={12} sm={12} md={10} lg={10}>
              <CustomTTabs
                title="About WuKong Sol"
                headerColor="gray"
                ftr={[
                  {
                    ftrContent: (
                      <span>
                      <br />
                      <p>
                        WuKongSol is a collection of NFT’s that inhabit the Solana network
                         that is based on the Chinese ancient mythic, Journey to the West that dates back to almost 500 years ago! 
                      </p>
                      <br />
                      <p>
                        Our NFT gaming project aims to simulate an online, browser based 
                        strategy game where the main protagonist, WuKong must fight through 
                        heaven and earth through each stage, to finally reach his ultimate objective - 
                        the Buddhist Sutras. 
                      </p>
                      </span>
                    )
                  }
                ]}
              />    
            </GridItem>
          </GridContainer>
          <GridContainer className={classes.title} justify="center">
            {/* <GridItem xs={12} sm={12} md={10} lg={10}>
              <div>
                <h2><b>Roadmap</b></h2>
                <br />
              </div>
            </GridItem> */}
            <GridItem xs={12} sm={12} md={10} lg={10}>
              <CustomTabs
                title="Roadmap"
                headerColor="gray"
                tabs={[
                  {
                    tabName: "2021 Q4",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <h3>
                          <b>Pre-Alpha Sale</b>
                        </h3>
                        <br />
                        <p>
                          Initial release of the main protagonist of our game - WuKong. 
                        </p>
                        <br />
                        <p>
                          10,000 combinations of Wukongs for the community to mint. 
                          All WuKong holders will randomly receive free NFT drops 
                          that will make up other characters of our game.
                        </p>
                      </span>
                    ),
                  },
                  {
                    tabName: "2022 Q1-1",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <h3>
                          <b>Alpha Sale</b>
                        </h3>
                        <br />
                        <p>
                          This phase will release the other protagonists of our game: 
                          Tang Monk, Monk Pig and Monk Sha. 
                        </p>
                        <br />
                        <p>  
                           More details regarding the total number, different combinations 
                           and rarity will be announced closer to the release.
                        </p>
                      </span>
                    ),
                  },
                  {
                    tabName: "2022 Q1-2",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <h3>
                          <b>Alpha Version of the Game</b>
                        </h3>
                        <br />
                        <p>
                          During this phase, the alpha version of the game will be released,
                           and only holders of WuKongs, Tang Monks, Monk Pigs and Monk Shas 
                           will be able to participate. 
                        </p>
                        <br />
                        <p>This phase will be exclusively PVE, where players will receive NFTs
                           for completing various stages of the game.
                        </p>
                      </span>
                    ),
                  },
                  {
                    tabName: "2022 Q2",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <h3>
                          <b>Beta Version of the Game</b>
                        </h3>
                        <br />
                        <p>
                          This phase will allow all NFT holders, including monster holders to 
                          participate in the game. During this phase, PVP will also be released.
                        </p>
                      </span>
                    ),
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
          <GridContainer className={classes.title} justify="center">
            <GridItem xs={12} sm={12} md={10} lg={10}>
              <CustomTTabs
                title="What we do with your funding? "
                headerColor="gray"
                ftr={[
                  {
                    ftrContent: (
                      <span>
                      <br />
                      <p>
                        85% will go to game developing
                      </p>
                      <p>
                        5% will go to daily operations
                      </p>
                      <p>
                        10% The Floor Price System
                      </p>
                      <p>
                        The Floor Price System: a revolutionary price protection system developed by WuKongSol 
                        that will provide all our NFT holders with peace of mind.  
                        This system was pioneered with the sole purpose to act as insurance to protect our investors. 
                        Under this system, any listing below mint prices on public marketplaces will be automatically 
                        purchased from the system and randomly dropped to current “WuKong” holders.
                      </p>
                      </span>
                    )
                  }
                ]}
              />    
            </GridItem>
          </GridContainer>
          <GridContainer className={classes.title} justify="center">
            <GridItem xs={12} sm={12} md={10} lg={10}>
              <CustomTTabs
                title="Who are we? "
                headerColor="gray"
                ftr={[
                  {
                    ftrContent: (
                      <span>
                      <br />
                      <p>
                        Our  dev team behind WuKongSol consists of Australian programmers
                         that have formerly worked within Google, Amazon, Apple and Facebook. 
                      </p>
                      <p>
                          In addition, the team is also proud to have a financial mastermind
                          behind it that has worked at Venture Capital firms including Belay Capital and AP venture. 
                          The artist that is working the magic behind WuKongSol has developed projects for Disney, Netflix and WarnerBros. 
                      </p>
                      </span>
                    )
                  }
                ]}
              />    
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
