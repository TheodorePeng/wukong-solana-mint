/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

// core components
import Button from "components/CustomButtons/Button.js";
// import Wallet from "components/SolanaWallet/Wallet";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import Wallet from "components/SolanaWallet/Wallet";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItemButton}>
        {/* <Button
          // href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
          color="primary"
          className={classes.navLinkButton}
        >
          <AccountBalanceWalletIcon className={classes.icons} /> Connect Wallet
        </Button>           */}
        <Wallet />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="twitter"
          title="Follow us on Twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/WukongSol"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="discord"
          title="Follow us on Discord"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://discord.gg/tZK3MnGW"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-discord"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on Medium"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://medium.com/@wukongsol"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-medium"} />
          </Button>
          {/* <Wallet /> */}
        </Tooltip>
      </ListItem>
    </List>
  );
}
