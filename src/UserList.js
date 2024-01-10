import React from 'react'
import {Link}from 'react-router-dom'

export default function UserList({listOfUser}) {
  return (

    <div>
        <h1>UserList</h1>
        {listOfUser.map(user=>(<Link to={`/${user.id}/posts`}><li key={user.id}>{user.name}</li></Link>))}

    </div>

  )
}
