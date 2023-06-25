import React, { useEffect, useState } from 'react'
import Validation from './Validation'
import Tasks from './Tasks'

export default function MyTasks({ allData }) {




    const viewUserTasks = () => {
        if (allData.flag == true) {
            return <Validation allData={allData} />
        }
        else return allData.currentUserTasks.map((val, i) => {
            return <Tasks key={i} data={val} index={i} />
        })
    }


    return (
        <div >
            {viewUserTasks()}
        </div>
    )
}
