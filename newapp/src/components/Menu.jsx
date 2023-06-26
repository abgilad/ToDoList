import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

export default function Menu({ allData }) {





    return (
        <div className='btnsMainDiv'>
            <Link to='/'><Button variant="outlined" onClick={() => { allData.setFlag(true) }} >all task</Button></Link>
            <Link to='/MyTask' ><Button variant="outlined">my task</Button></Link>
            <Link to='/CreateNewTask'><Button onClick={() => { allData.setFlag(true) }} variant="outlined">create new task</Button></Link>
            <Link><Button onClick={() => { allData.setFlag(true) }} variant="outlined">delete task</Button></Link>
        </div>
    )
}
