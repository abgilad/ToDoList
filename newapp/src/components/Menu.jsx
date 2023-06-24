import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className='btnsMainDiv'>
            <Link to='/'><button className='brnMenu'>all task</button></Link>
            <Link to='/MyTask' ><button className='brnMenu'>my task</button></Link>
            <Link to='/CreateNewTask'><button className='brnMenu'>create new task</button></Link>
            <Link><button className='brnMenu'>delete task</button></Link>
        </div>
    )
}
