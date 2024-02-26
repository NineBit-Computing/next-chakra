// utils/session.js
let sessionStatus = false;

export const getSessionStatus = () => {
  return sessionStatus;
};

export const setSessionStatus = (status:boolean) => {
  sessionStatus = status;
};



