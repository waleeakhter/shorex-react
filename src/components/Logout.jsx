import React from 'react'

const Logout = (props) => {
    React.useEffect(() => {
     localStorage.clear("currentUser");
     window.location.reload();
    },[])
  return (
    <div></div>
  )
}

export default Logout