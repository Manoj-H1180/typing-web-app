export const updateText = (keyPressed) => {
  return {
    type: "UPDATE_TEXT",
    payload: keyPressed,
  };
};

export const resetTyping = () => {
  return {
    type: "RESET_TYPING",
  };
};
