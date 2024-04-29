import {styled} from "@stitches/react";
import {violet, whiteA} from "@radix-ui/colors";

export const Button = styled('button', {
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: '0 15px',
    fontSize: 15,
    lineHeight: 1,
    fontWeight: 500,
    height: 35,

    variants: {
        variant: {
            violet: {
                backgroundColor: violet.violet10,
                color: whiteA.whiteA12,
                cursor: 'pointer',
                padding: '4px 0',
                '&:hover': {backgroundColor: violet.violet12},
                '&:focus': {boxShadow: `0 0 0 2px ${violet.violet7}`},
            },
        },
    },
});