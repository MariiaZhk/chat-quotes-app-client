export const selectIsRefresh = (state) => state.authSlice.isRefresh;
export const selectUserFirstName = (state) => state.authSlice.user.firstName;
export const selectIsLogged = (state) => state.authSlice.isLogged;
export const selectUser = (state) => state.authSlice.user;
