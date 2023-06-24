import React, { useState } from 'react';

const RadioInputsComponent = () => {
    const [selectedRadio, setSelectedRadio] = useState('option1');

    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.value);
    };

    return (
        <div>
            <label>
                <input
                    type="radio"
                    value="option1"
                    checked={selectedRadio === 'option1'}
                    onChange={handleRadioChange}
                />
                Option 1
            </label>

            <label>
                <input
                    type="radio"
                    value="option2"
                    checked={selectedRadio === 'option2'}
                    onChange={handleRadioChange}
                />
                Option 2
            </label>

            <p>
                Selected option: {selectedRadio === 'option1' ? 'Option 1' : 'Option 2'}
            </p>
        </div>
    );
};

export default RadioInputsComponent;
