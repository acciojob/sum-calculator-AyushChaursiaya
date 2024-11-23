import React, { useEffect, useState } from "react";

const CalculatorSum = () => {
    const [currentCount, setCurrentCount] = useState(''); // Tracks the current input value
    const [count, setCount] = useState(0); // Tracks the total sum
    const [shouldUpdate, setShouldUpdate] = useState(false); // Tracks if count should be updated

    // Update `count` whenever `currentCount` changes and `shouldUpdate` is true
    useEffect(() => {
        if (shouldUpdate) {
            const num = parseInt(currentCount, 10) || 0; // Parse input as a number
            setCount((prevCount) => prevCount + num); // Update the total sum
            setShouldUpdate(false); // Reset the flag after updating
        }
    }, [currentCount, shouldUpdate]);

    // Handles input value change
    const handleChangeCount = (e) => {
        setCurrentCount(e.target.value); // Update the current input value
    };

    // Trigger the update when clicking the input field
    const handleCount = () => {
        setShouldUpdate(true); // Set the flag to trigger the `useEffect`
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Sum Calculator</h1>
            <input
                type="number"
                value={currentCount}
                onChange={handleChangeCount}
                onClick={handleCount}
                style={{ padding: '5px', fontSize: '16px' }}
            />
            <p>Sum: {count}</p>
        </div>
    );
}

export default CalculatorSum;