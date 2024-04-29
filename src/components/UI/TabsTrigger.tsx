import {styled} from "@stitches/react";
import * as Tabs from "@radix-ui/react-tabs";
import {violet} from "@radix-ui/colors";

export const TabsTrigger = styled(Tabs.Trigger, {
    all: 'unset',
    fontFamily: 'inherit',
    backgroundColor: 'white',
    padding: '0 20px',
    height: 45,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    lineHeight: 1,
    color: violet.violet8,
    userSelect: 'none',
    '&:hover': {color: violet.violet10},
    '&[data-state="active"]': {
        color: violet.violet10,
        boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
        fontWeight: '700'
    },
    transition: '0.4s',
    cursor: 'pointer',
});