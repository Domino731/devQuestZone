import {Typography} from "@mui/material";
import {TextProps} from "~/components/Text/Text.types";

export const Text = ({variant, children}: TextProps) => {
    return <Typography variant={variant}>{children}</Typography>
}