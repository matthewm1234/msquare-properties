import { Typography } from "@mui/material";

export default function FSDefaultBodyTypography({
  label,
  variant = "body1",
  sxProps,
  noWrap = false,
}: {
  label: string;
  variant?: any;
  sxProps?: any;
  noWrap?: boolean;
}) {
  return (
    <Typography
      color={"#14504B"}
      variant={variant}
      sx={
        variant === "subtitle1"
          ? { textTransform: "lowercase", ...sxProps }
          : { ...sxProps }
      }
      noWrap={noWrap}
    >
      {label}
    </Typography>
  );
}
