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
export const WalletDisconnectButton = (_a) => {
    var { color = 'primary', variant = 'contained', children, disabled, onClick } = _a, props = __rest(_a, ["color", "variant", "children", "disabled", "onClick"]);
    const { wallet, disconnect, disconnecting } = useWallet();
    const handleClick = useCallback((event) => {
        if (onClick)
            onClick(event);
        if (!event.defaultPrevented)
            disconnect().catch(() => {
                // Silently catch because any errors are caught by the context `onError` handler
            });
    }, [onClick, disconnect]);
    const content = useMemo(() => {
        if (children)
            return children;
        if (disconnecting)
            return 'Disconnecting ...';
        if (wallet)
            return 'Disconnect';
        return 'Disconnect Wallet';
    }, [children, disconnecting, wallet]);
    return (React.createElement(Button, Object.assign({ color: color, variant: variant, onClick: handleClick, disabled: disabled || !wallet, startIcon: React.createElement(WalletIcon, { wallet: wallet }) }, props), content));
};
//# sourceMappingURL=WalletDisconnectButton.js.map