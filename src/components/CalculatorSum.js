import react, { useEffect, useState } from "react";

const CalculatorSum = () => {
    const [inputfild, setInputfild] = useState('');
    const [sum, setSum] = useState(0);
    const [numbers, setNumbers] = useState([]);


    useEffect(() => {
        const sumCalculator = () => {
            const total = numbers.reduce((acc, prev) => acc + prev, 0);
            setSum(total);
        }
        sumCalculator();
    }, [numbers]); 

    const handleInput = (e) => {
        setInputfild(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const parsedNumber = parseInt(inputfild, 10);
        if(!isNaN(parsedNumber)) {
            setNumbers([numbers, parsedNumber]);
            setInputfild('');
        }
    }
 

    return (<>
    <form onSubmit={handleSubmit}>
        <input type="number" value={inputfild} onChange={handleInput} />
        <div>Sum: {sum}</div>
    </form>
    </>)
}

export default CalculatorSum;