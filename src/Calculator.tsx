import React, { useState } from 'react';
import { add } from './stringCalculator';

const Calculator: React.FC = () => {
    const [input, setInput] = useState<string>("");
    const [result, setResult] = useState<number | string>("");

    const handleCalculation = () => {
        console.log("Input:", input);
        try {
            const sum = add(input);
            setResult(sum);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setResult(error.message);
            } else {
                setResult("An unexpected error occurred.");
            }
        }
    };

    return (
        <div>
            <h1>String Calculator</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter Value"
            />
            <button onClick={handleCalculation}>Check</button>
            <p>Result: {result}</p>
        </div>
    );
};

export default Calculator;
