import { Typography } from "@mui/material";

export const FSWhiteBodyTypography = ({
  label,
  variant = "body1",
  sxProps,
  noWrap = false,
  noShadow,
}: {
  label: string;
  variant?: any;
  sxProps?: any;
  noWrap?: boolean;
  noShadow?: boolean;
}) => {
  return (
    <Typography
      color={"text.primary"}
      className={noShadow ? "" : "text-shadow"}
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
};
