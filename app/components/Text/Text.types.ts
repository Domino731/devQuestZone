import {ReactNode} from "react";
import {Variant} from "@mui/material/styles/createTypography";

export type TextProps = {
    variant: Variant;
    children: ReactNode;
}