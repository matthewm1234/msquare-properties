import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

export const primaryBtnStyle2 = {
  textTransform: "lowercase",
  backgroundColor: "primary.main",
  color: "text.primary",
  border: "1px solid",
  borderColor: "primary.main",
  ":hover": {
    color: "primary.main",
    backgroundColor: "primary.variant",
  },
};

export const MSLinkButtonMain = ({
  label,
  url,
  disabled,
  startIcon,
  endIcon,
  sxProps,
}) => {
  return (
    <Button
      variant="contained"
      sx={{ ...primaryBtnStyle2, ...sxProps }}
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

export const MSClickButtonMain = ({
  label,
  type = "button",
  clickHandler,
  loading,
  disabled,
  startIcon,
  endIcon,
  sxProps,
}) => {
  return (
    <LoadingButton
      variant="contained"
      type={type}
      sx={{ ...primaryBtnStyle2, ...sxProps }}
      onClick={clickHandler}
      loading={loading}
      startIcon={startIcon ? startIcon : <></>}
      endIcon={endIcon ? endIcon : <></>}
      disabled={disabled}
    >
      {label}
    </LoadingButton>
  );
};

export const FSClickButtonNoLoad = ({
  label,
  clickHandler,
  disabled,
  startIcon,
  endIcon,
  sxProps,
  _id
}) => {
  return (

    <Button
      variant="contained"
      sx={{ ...primaryBtnStyle2, ...sxProps }}
      onClick={() => clickHandler(_id)}
      startIcon={startIcon ? startIcon : <></>}
      endIcon={endIcon ? endIcon : <></>}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};
