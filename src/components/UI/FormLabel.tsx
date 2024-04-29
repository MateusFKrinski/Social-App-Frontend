import {styled} from "@stitches/react";
import * as Form from "@radix-ui/react-form"
import {violet} from "@radix-ui/colors";

export const FormLabel = styled(Form.Label, {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: '35px',
    color: violet.violet10,
});