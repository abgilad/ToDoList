import React, { useEffect, useState } from 'react'

export default function Validation({ allData }) {




    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='myTasksMainDiv'>
            <h1>Enter Username and Password</h1>
            <input onChange={(e) => { setUsername(e.target.value) }} className='inputMyTasks' type='text' placeholder='username' />
            <input onChange={(e) => { setPassword(e.target.value) }} className='inputMyTasks' type='text' placeholder='password' />
            <button onClick={() => { allData.checkUser(username, password) }}>enter</button>
        </div>
    )
}
