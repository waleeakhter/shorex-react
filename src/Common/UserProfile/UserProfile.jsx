import React, { createContext } from 'react'
import Header from './Header'
import Style from "./Profile.module.scss"
import Buttons from './Buttons'
import InfoList from './InfoList'

export const UserContext = createContext();
const UserProfile = ({ profile, msgBtn }) => {
    const [user, setUser] = React.useState(null);
    const [role, setRole] = React.useState(null);

    React.useEffect(() => {
        setUser(profile)
        setRole(profile?.roles?.at(0))
    }, [profile])
    return (
        <UserContext.Provider value={user}>
            <div className={`${Style.User} `}>
                <Header user={user} Style={Style} msgBtn={msgBtn} />
                {user?.earned_pts && <Buttons Style={Style} user={user} />}
                <InfoList Style={Style} userData={user} role={role} />
            </div>
        </UserContext.Provider>
    )
}

export default UserProfile
