var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Button } from '@material-ui/core';
import { useWallet } from '@solana/wallet-adapter-react';
import React, { useCallback, useMemo } from 'react';
import { WalletIcon } from './WalletIcon';
export const WalletConnectButton = (_a) => {
    var { color = 'primary', variant = 'contained', children, disabled, onClick } = _a, props = __rest(_a, ["color", "variant", "children", "disabled", "onClick"]);
    const { wallet, connect, connecting, connected } = useWallet();
    const handleClick = useCallback((event) => {
        if (onClick)
            onClick(event);
        if (!event.defaultPrevented)
            connect().catch(() => {
                // Silently catch because any errors are caught by the context `onError` handler
            });
    }, [onClick, connect]);
    const content = useMemo(() => {
        if (children)
            return children;
        if (connecting)
            return 'Connecting ...';
        if (connected)
            return 'Connected';
        if (wallet)
            return 'Connect';
        return 'Connect Wallet';
    }, [children, connecting, connected, wallet]);
    return (React.createElement(Button, Object.assign({ color: color, variant: variant, onClick: handleClick, disabled: disabled || !wallet || connecting || connected, startIcon: React.createElement(WalletIcon, { wallet: wallet }) }, props), content));
};
//# sourceMappingURL=WalletConnectButton.js.map