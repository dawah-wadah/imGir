export const DISPLAY_DROPDOWN = "DISPLAY_DROPDOWN";
export const CLEAR_DROPDOWNS = "CLEAR_DROPDOWNS";

export const displayDropdown = (menu) => ({
  type: DISPLAY_DROPDOWN,
  menu
});

export const clearDropdowns = () => {
  debugger
  return({
  type: CLEAR_DROPDOWNS
});}
