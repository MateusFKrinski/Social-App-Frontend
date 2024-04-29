import {styled} from "@stitches/react";
import * as Tabs from "@radix-ui/react-tabs";

export const TabsContent = styled(Tabs.Content, {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'white',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    outline: 'none',
});