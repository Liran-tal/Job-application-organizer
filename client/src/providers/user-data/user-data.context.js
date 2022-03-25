import { createContext, useContext, useState } from 'react';

const GetUserContext = createContext(null);
const SetUserContext = createContext(null);

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
