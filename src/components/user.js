import React, { useState } from 'react'

const User=(props)=> {
    const {count}=useState(0);
  return (
    <div>
        count:{count}<br/>
        name:{props.name}<br/>
        lead:{props.role}
    </div>
  )
}

export default User;
