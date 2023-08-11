const userSignupData = [];
const adminSignupData = [];

export const addUserSignupData = (userData) => {
  userSignupData.push(userData);
};

export const addAdminSignupData = (adminData) => {
  adminSignupData.push(adminData);
};

export const getUserSignupData = () => {
  return userSignupData;
};

export const getAdminSignupData = () => {
  return adminSignupData;
};
