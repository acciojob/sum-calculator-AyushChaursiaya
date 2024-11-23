import React, { useEffect, useState } from "react";

const CalculatorSum = () => {
    const [currentCount, setCurrentCount] = useState('');
    const [count, setCount] = useState(0);

    const handleChangeCount = (e) => {
        setCurrentCount(e.target.value);
    }

    const handleCount = () => {
        const num = parseInt(currentCount, 10) || 0;
        setCount(count + num);
    }

    return (
        <div>
            <input type='number' onChange={handleChangeCount} onClick={handleCount} />
            <p>Sum: {count}</p>
        </div>
    )
}

export default CalculatorSum;