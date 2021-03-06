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
import React, { useCallback } from 'react';
import { useWalletDialog } from './useWalletDialog';
import { MyIcon } from './MyIcon';
export const WalletDialogButton = (_a) => {
    var { children = 'Connect Wallet', color = 'primary', variant = 'contained', onClick } = _a, props = __rest(_a, ["children", "color", "variant", "onClick"]);
    const { setOpen } = useWalletDialog();
    const handleClick = useCallback((event) => {
        if (onClick)
            onClick(event);
        if (!event.defaultPrevented)
            setOpen(true);
    }, [onClick, setOpen]);
    return React.createElement(Button, {startIcon: React.createElement(MyIcon), onClick: handleClick, color: color, variant: variant }, children);
    // return (React.createElement(Button, Object.assign({ color: color, variant: variant, onClick: handleClick}, props), children));
};
//# sourceMappingURL=WalletDialogButton.js.map