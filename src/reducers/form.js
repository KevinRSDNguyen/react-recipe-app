export default (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_FORM':
      return {
        shouldShowForm: true
      };
    case 'HIDE_FORM':
      return {
        shouldShowForm: false
      };
    default:
      return state;
  }
};
