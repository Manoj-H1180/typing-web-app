const initialState = {
  text: "",
  timer: 0,
  isRunning: false,
  currentKeyIndex: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TEXT":
      return {
        ...state,
        text: state.text + action.payload,
      };
    case "INCREMENT_TIMER":
      return {
        ...state,
        timer: state.timer + 1,
      };
    case "START_TYPING":
      return {
        ...state,
        isRunning: true,
      };
    case "INCREMENT_CURRENT_KEY_INDEX":
      return {
        ...state,
        currentKeyIndex: state.currentKeyIndex + 1,
      };
    case "STOP_TYPING":
      return {
        ...state,
        isRunning: false,
      };
    case "RESET_TYPING":
      return initialState;
    default:
      return state;
  }
};

export default reducer;
