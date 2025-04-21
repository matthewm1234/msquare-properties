export const inputFieldsVariantOne = {
  "&:hover label": {
    color: "#696969",
  },
  "& label": {
    color: "#636161",
  },
  "& label.Mui-focused": {
    color: "secondary.main",
  },
  "& .MuiOutlinedInput-root": {
    color: "secondary.main",
    "& fieldset": {
      borderColor: "secondary.main",
      borderWidth: "2px",
    },
    "&:hover fieldset": {
      borderColor: "primary.main",
    },
    "&.Mui-focused fieldset": {
      borderColor: "secondary.main",
    },
  },
};

export default inputFieldsVariantOne;
