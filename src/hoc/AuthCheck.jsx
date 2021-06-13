import React from 'react'
import {Redirect} from "react-router-dom"

const AuthCheck = ({user, children}) => (
    user ? children : <Redirect to='/login'/>
)

export default AuthCheck