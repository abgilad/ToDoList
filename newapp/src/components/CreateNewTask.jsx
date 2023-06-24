import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function CreateNewTask({ allData }) {

    const nav = useNavigate()

    const [name, setName] = useState('')
    const [desc, setDesk] = useState('')
    const [selectedRadio, setSelectedRadio] = useState('yes');

    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.value);
    };

    return (
        <div className='createNewTaskDiv'>
            <h1>Create New Task</h1>

            <select value={name} onChange={(e) => { setName(e.target.value) }}>
                <option value='' disabled hidden>Choose Worker Name</option>
                <option value='Gilad'>Gilad</option>
                <option value='Alex'>Alex</option>
                <option value='Dani'>Dani</option>
            </select><br />
            <p>Task is Urgent?</p><br />
            <div>
                <label>
                    <input
                        type="radio"
                        value='yes'
                        checked={selectedRadio === 'yes'}
                        onChange={handleRadioChange}
                    />
                    YES
                </label>

                <label>
                    <input
                        type="radio"
                        value='no'
                        checked={selectedRadio === 'no'}
                        onChange={handleRadioChange}
                    />
                    NO
                </label>
            </div>
            <input onChange={(e) => { setDesk(e.target.value) }} className='inputCreateDesc' type='text' placeholder='enter text' />
            <button onClick={() => { allData.addNewTask(name, desc, selectedRadio); nav('/') }}>add</button>
        </div>
    )
}
