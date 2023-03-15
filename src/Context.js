
import React, { useState,useEffect,useContext} from 'react';  
import Api from '@evenlogics/whf-api'
const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
       if( currentUser?.id){
           Api.request("get" , `/admins/${currentUser?.id}`)
           .then(res =>{ 
              setLoggedInUser(res.data)
            })
           .catch(err => console.log(err))
       }
    }, [])
    

    const [loggedInUser, setLoggedInUser] = useState(null)
    

  return (
    <AppContext.Provider value={{ loggedInUser, setLoggedInUser}}>
      {children}
    </AppContext.Provider>
  )
}
export const useAppContext = () =>  useContext(AppContext);




