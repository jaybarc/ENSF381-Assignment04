let isLoggedIn = false;

export const login = () => {
  isLoggedIn = true;
};

export const logout = () => {
  isLoggedIn = false;
};

export const isAuthenticated = () => {
  return isLoggedIn;
};
