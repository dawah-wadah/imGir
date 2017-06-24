export const DISPLAY_MODAL = "DISPLAY_MODAL";
export const CLEAR_MODALS = "CLEAR_MODALS";

export const displayModal = (Component) => ({
  type: DISPLAY_MODAL,
  component: Component,
});

export const clearModals = () => ({
  type: CLEAR_MODALS
});
