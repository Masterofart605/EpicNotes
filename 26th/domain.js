var currentUser = "";

export const SetCurrentUser = (newUsername) => {
  if (currentUser !== "" && newUsername !== ""){
    console.log("Cannot switch users, please sign out")
    return false;
  }
    currentUser = newUsername;
    return true;
};

export const GetCurrentUser = () => {
  return currentUser;
};
