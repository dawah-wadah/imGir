export const DISPLAY_DROPDOWN = "DISPLAY_DROPDOWN";
export const CLEAR_DROPDOWNS = "CLEAR_DROPDOWNS";

export const displayDropdown = (menu) => ({
  type: DISPLAY_DROPDOWN,
  menu
});

export const clearDropdowns = () => {
  return ({
    type: CLEAR_DROPDOWNS
  });
};
