export const values = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_VALUES":
      return { ...state, ...action.values };
    case "RESET_VALUES":
      return (state = {});
    default:
      return state;
  }
};
