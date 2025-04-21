import { Typography } from "@mui/material";

export const WhiteBodyTypography = ({
  label,
  variant = "body1",
  sxProps,
  noWrap = false,
  noShadow,
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

export const DefualtBodyTypography = ({
  label,
  variant = "body1",
  sxProps,
  noWrap = false,
}) => {
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
};
