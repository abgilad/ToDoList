import React, { useState } from 'react'

export default function Sorts() {

    const [sortState, setSortState] = useState('')


    return (
        <div>
            <select value={sortState} onChange={(e) => { setSortState(e.target.value) }}>
                <option value='' disabled hidden>sort by</option>
                <option value='name'>name</option>
                <option value='urgent'>urgent</option>
            </select>
        </div>
    )
}
