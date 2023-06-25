import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu({ allData }) {
    return (
        <div className='btnsMainDiv'>
            <Link to='/'><button onClick={() => { allData.setFlag(true) }} className='brnMenu'>all task</button></Link>
            <Link to='/MyTask' ><button className='brnMenu'>my task</button></Link>
            <Link to='/CreateNewTask'><button onClick={() => { allData.setFlag(true) }} className='brnMenu'>create new task</button></Link>
            <Link><button onClick={() => { allData.setFlag(true) }} className='brnMenu'>delete task</button></Link>
        </div>
    )
}
