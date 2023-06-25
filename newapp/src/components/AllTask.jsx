import React from 'react'
import Tasks from './Tasks'
import Sorts from './Sorts'

export default function AllTask({ allData }) {



    const viewTasks = () => {
        return allData.data.map((val, i) => {
            return <Tasks key={i} data={val} index={i} />
        })
    }

    return (
        <div className='allTaskDiv'>
            <div className='sortDiv'>
                <Sorts />
            </div>
            {viewTasks()}
        </div>
    )
}
