import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const secondaryBtnStyle = {
  textTransform: "lowercase",
  backgroundColor: "secondary.main",
  color: "text.primary",
  border: "1px solid",
  borderColor: "primary.main",
  ":hover": {
    color: "primary.main",
    backgroundColor: "secondary.variant",
  },
};

export const FSLinkButtonSecondary = ({
  label,
  url,
  startIcon,
  endIcon,
  disabled,
  sxProps,
  otherProps,
}) => {
  return (
    <Button
      variant="contained"
      sx={{ ...secondaryBtnStyle, ...sxProps }}
      component={Link}
      to={url}
      startIcon={startIcon ? startIcon : <></>}
      endIcon={endIcon ? endIcon : <></>}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

export const FSClickButtonSecondary = ({
  label,
  clickHandler,
  loading,
  startIcon,
  endIcon,
  disabled,
  sxProps,
}) => {
  return (
    <LoadingButton
      loading={loading}
      variant="contained"
      sx={{ ...secondaryBtnStyle, ...sxProps }}
      onClick={clickHandler}
      startIcon={startIcon ? startIcon : <></>}
      endIcon={endIcon ? endIcon : <></>}
      disabled={disabled}
    >
      {label}
    </LoadingButton>
  );
};
