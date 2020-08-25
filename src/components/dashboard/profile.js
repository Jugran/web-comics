
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import TopNavbar from '../feed/TopNavbar'

const Profile = () => {

    const is_authenticated = useSelector(state => state.auth.is_authenticated)

    console.log(is_authenticated)

    if ( !is_authenticated ){
        return <Redirect to='/login' />
    }

    return (
        <div>
            <TopNavbar />
            <h1 className="jumbotron text-center">
                Hello !
            </h1>
        </div>
    )
}

export default Profile
