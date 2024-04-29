import {styled} from "@stitches/react";
import * as Switch from "@radix-ui/react-switch"
import {violet} from "@radix-ui/colors";

export const SwitchRoot = styled(Switch.Root, {
    all: 'unset',
    cursor: 'pointer',
    width: 42,
    height: 20,
    backgroundColor: violet.violet6,
    borderRadius: '9999px',
    position: 'relative',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    '&[data-state="checked"]': { backgroundColor: violet.violet10 },
});