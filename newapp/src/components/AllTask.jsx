import React from 'react'
import Tasks from './Tasks'

export default function AllTask({ allData }) {



    const viewTasks = () => {
        return allData.data.map((val, i) => {
            return <Tasks key={i} data={val} index={i} />
        })
    }

    return (
        <div className='allTaskDiv'>
            {viewTasks()}
        </div>
    )
}
