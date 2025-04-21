import { Typography } from "@mui/material";

const MainHeaderTypography = ({
  label,
  sxProps,
  colorTwo,
  variant = "h4",
  noWrap = false,
}: {
  label: string;
  sxProps?: any;
  colorTwo?: boolean;
  variant?: any;
  noWrap?: boolean;
}) => {
  return (
    <Typography
      color={colorTwo ? "primary.main" : "text.primary"}
      variant={variant}
      className="text-shadow"
      sx={{ textTransform: "lowercase", ...sxProps }}
      noWrap={noWrap}
    >
      {label}
    </Typography>
  );
};

export default MainHeaderTypography;
