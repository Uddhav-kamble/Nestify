import React, { createContext, useState } from 'react'
export const authDataContext = createContext()
function AuthContext({children}) {
    // const serverUrl = "http://localhost:8000"
    const serverUrl = "https://nestify-backend-1qc4.onrender.com"

    let [loading,setLoading]=useState(false)

    let value={
        serverUrl,
        loading,setLoading
    }
  return (
    <div>
     <authDataContext.Provider value={value}>
        {children}
     </authDataContext.Provider>
    </div>
  )
}

export default AuthContext
