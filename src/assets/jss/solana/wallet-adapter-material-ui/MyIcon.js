// @material-ui/icons
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
const useStyles = makeStyles(styles);

export const MyIcon = () => {

    const classes = useStyles();
    return <AccountBalanceWalletIcon className={classes.icons} />;
}