import react, { useEffect, useState } from "react";

const CalculatorSum = () => {
    const [inputfild, setInputfild] = useState('');
    const [sum, setSum] = useState(0);
    const [numbers, setNumbers] = useState([]);


    useEffect(() => {
        const sumCalculator = async () => {
            await new Promise((resolve) => setTimeout(resolve, 100));
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
            setNumbers([...numbers, parsedNumber]);
            setInputfild('');
        }
    }
 

    return (<>
    <form onSubmit={handleSubmit}>
        <h1>Sum Calculator</h1>
        <input type="number" value={inputfild} onChange={handleInput} />
        <p>Sum: {sum}</p>
    </form>
    </>)
}

export default CalculatorSum;