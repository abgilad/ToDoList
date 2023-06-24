import React, { useEffect, useState } from 'react';

export default function Tasks({ data }) {
    const [compliteColor, setCompliteColor] = useState('green');
    const [urgentColor, setUrgentColor] = useState('green');
    const [urgentText, setUrgentText] = useState('');

    useEffect(() => {
        if (data.isComplited === false) {
            setCompliteColor('green');
        }
        if (data.isComplited === true) {
            setCompliteColor('red');
        }
        if (data.isUrgentTask === 'yes') {
            setUrgentColor('red');
            setUrgentText('URGENT');
        }
        if (data.isUrgentTask === 'no') {
            setUrgentColor('');
            setUrgentText('');
        }
    }, [data.isComplited, data.isUrgentTask]);

    return (
        <div className='taskDiv' style={{ backgroundColor: compliteColor }}>
            <div className='nameAndUrgentDiv'>
                <p>{data.taskCompliteName}</p>
                <div style={{ backgroundColor: urgentColor }} className='isUrgentDiv'>
                    {urgentText}
                </div>
            </div>
            <p>{data.desc}</p>
        </div>
    );
}
