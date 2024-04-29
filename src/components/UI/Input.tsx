import {styled} from "@stitches/react";
import {iris} from "@radix-ui/colors";

export const Input = styled('input', {
    all: 'unset',
    flex: '1 0 auto',
    borderRadius: 10,
    padding: '0 10px',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 1,
    color: iris.iris9,
    letterSpacing: 1.1,
    boxShadow: `0 0 0 1px ${iris.iris10}`,
    height: 35,
    width: 'calc(100% - 20px)',
    '&:focus': {boxShadow: `0 0 0 2px ${iris.iris10}`},
});