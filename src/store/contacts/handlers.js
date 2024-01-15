export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  console.log(payload);
  state.error = payload;
};

export const handleFulfilled = state => {
  state.isLoading = false;
};
