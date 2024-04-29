import {styled} from "@stitches/react";
import * as Form from "@radix-ui/react-form"
import {redA} from "@radix-ui/colors";

export const FormMessage = styled(Form.Message, {
    fontSize: 12,
    color: redA.redA9,
    fontWeight: '600',
    margin: '5px 0 5px 0',
    display: 'flex',
    flexDirection: 'row',
    flexJustifyContent: 'center'
});