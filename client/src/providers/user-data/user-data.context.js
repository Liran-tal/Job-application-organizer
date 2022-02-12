import React, { useContext, useState } from 'react';

const GetUserContext = React.createContext(null);
const SetUserContext = React.createContext(null);

export const useUserContext = () => {
  return useContext(GetUserContext);
};

export const useSetUserContext = () => {
  return useContext(SetUserContext);
};

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  return (
    <GetUserContext.Provider value={userData}>
      <SetUserContext.Provider value={setUserData}>
        {children}
      </SetUserContext.Provider>
    </GetUserContext.Provider>
  );
};