import {styled} from "@stitches/react";
import * as Switch from "@radix-ui/react-switch";
import {blackA} from "@radix-ui/colors";

export const SwitchThumb = styled(Switch.Thumb, {
    display: 'block',
    width: 15,
    height: 15,
    backgroundColor: 'white',
    borderRadius: '9999px',
    transition: 'transform 100ms',
    transform: 'translateX(3px)',
    willChange: 'transform',
    '&[data-state="checked"]': {transform: 'translateX(23px)'},
});