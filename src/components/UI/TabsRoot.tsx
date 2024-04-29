import {styled} from "@stitches/react";
import * as Tabs from "@radix-ui/react-tabs";
import {violet} from "@radix-ui/colors";

export const TabsRoot = styled(Tabs.Root, {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    border: `2px solid ${violet.violet10}`,
    borderRadius: 10,
    overflow: 'hidden'
});