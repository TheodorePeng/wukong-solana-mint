import { createTheme, ThemeProvider } from '@material-ui/core';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base/lib/adapter.js';
import { WalletDialogProvider } from 'assets/jss/solana/wallet-adapter-material-ui/WalletDialogProvider.js';
import { ConnectionProvider } from '@solana/wallet-adapter-react/lib/ConnectionProvider.js';
import { WalletProvider } from '@solana/wallet-adapter-react/lib/WalletProvider.js';
import { useWallet } from '@solana/wallet-adapter-react/lib/useWallet.js';

import { getLedgerWallet } from '@solana/wallet-adapter-wallets/lib/ledger.js';
import { getPhantomWallet } from '@solana/wallet-adapter-wallets/lib/phantom.js';
import { getSlopeWallet } from '@solana/wallet-adapter-wallets/lib/slope.js';
import { getSolflareWallet } from '@solana/wallet-adapter-wallets/lib/solflare.js';
import { getSolletWallet } from '@solana/wallet-adapter-wallets/lib/sollet.js';
import { getSolletExtensionWallet } from '@solana/wallet-adapter-wallets/lib/solletExtension.js';
import { getTorusWallet } from '@solana/wallet-adapter-wallets/lib/torus.js';

import { WalletMultiButton } from 'assets/jss/solana/wallet-adapter-material-ui/WalletMultiButton.js';

import { clusterApiUrl } from '@solana/web3.js';
import React, { useMemo } from 'react';

const TREASURY_ADDRESS = process.env.REACT_APP_TREASURY_ADDRESS;
const CANDY_MACHINE_CONFIG = process.env.REACT_APP_CANDY_MACHINE_CONFIG;
const CANDY_MACHINE_ID = process.env.REACT_APP_CANDY_MACHINE_ID;
const SOLANA_NETWORK = process.env.REACT_APP_SOLANA_NETWORK;
const SOLANA_RPC_HOST = process.env.REACT_APP_SOLANA_RPC_HOST;
const CANDY_START_DATE = process.env.REACT_APP_CANDY_START_DATE;


const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: "#9c27b0",
        },
    },
    overrides: {
        MuiButtonBase: {
            root: {
                justifyContent: 'flex-start',
            },
        },
        MuiButton: {
            root: {
                textTransform: undefined,
                padding: '12px 16px',
            },
            startIcon: {
                marginRight: 8,
            },
            endIcon: {
                marginLeft: 8,
            },
        },
    },
});

export default function Wallet() {
// const Wallet: FC = () => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    // @solana/wallet-adapter-wallets imports all the adapters but supports tree shaking --
    // Only the wallets you want to support will be compiled into your application
    const wallets = useMemo(
        () => [
            getPhantomWallet(),
            getSlopeWallet(),
            getSolflareWallet(),
            getTorusWallet({
                options: { clientId: 'Get a client ID @ https://developer.tor.us' },
            }),
            getLedgerWallet(),
            getSolletWallet({ network }),
            getSolletExtensionWallet({ network }),
        ],
        [network]
    );

    const { wallet } = useWallet();

    return (
        <ThemeProvider theme={theme}>
            <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                    <WalletDialogProvider>
                        <WalletMultiButton /> 
                        {/* {wallet && <WalletDisconnectButton startIcon={<DisconnectIcon />} style={{ marginLeft: 8 }} />}
                        <Navigation /> */}
                    </WalletDialogProvider>
                </WalletProvider>
            </ConnectionProvider>
        </ThemeProvider>
    );
};


// export default Wallet;