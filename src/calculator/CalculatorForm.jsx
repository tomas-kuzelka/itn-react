import { NumberInput } from "./NumberInput";
import { Result } from "./Result";
import Select from "react-select";
import { useState } from "react";
import { calculate, operations } from "../utils/calculate";


export function CalculatorForm({ title }) {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [operation, setOperation] = useState(operations[0]);
    const [result, setResult] = useState(0);

    function handleSubmit(event) {
        event.preventDefault(); // zakázání odeslání formuláře
        const numA = parseFloat(a);
        const numB = parseFloat(b);
        const computedResult = calculate(numA, numB, operation.value);
        setResult(computedResult);
    }

    return (
        <div>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                <NumberInput name={"a"} label={"První číslo: "} onChange={(e) => setA(e.target.value)} />
                <NumberInput name={"b"} label={"Druhé číslo: "} onChange={(e) => setB(e.target.value)} />
                <Select options={operations} onChange={setOperation} value={operation} />
                <input type="submit" value={"Vypočítej"} />
            </form>
            <Result value={result} />
        </div>
    )
}
