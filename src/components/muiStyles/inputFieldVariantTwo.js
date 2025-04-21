export const inputFieldsVariantTwo = {
  "&:hover label": {
    color: "text.primary",
  },
  "& label": {
    color: "text.primary",
  },
  "& label.Mui-focused": {
    color: "primary.variant",
  },
  "& .MuiOutlinedInput-root": {
    color: "text.primary",
    "& .MuiDateField-root": {
      borderColor: "primary.variant",
    },
    "& fieldset": {
      borderColor: "primary.variant",
      borderWidth: "2px",
    },
    "&:hover fieldset": {
      borderColor: "primary.main",
    },
    "&.Mui-focused fieldset": {
      borderColor: "primary.variant",
    },
  },
};

export default inputFieldsVariantTwo;
