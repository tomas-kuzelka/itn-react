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

    return (
        <div>
            <h1>{title}</h1>
            <form>
                <NumberInput name={"a"} value={parseInt(a)} label={"První číslo: "} onChange={(e) => setA(e.target.value)} />
                <NumberInput name={"b"} value={parseInt(b)} label={"Druhé číslo: "} onChange={(e) => setB(e.target.value)} />
                <Select options={operations} onChange={setOperation} value={operation} />
                <input type="submit" value={"Vypočítej"} />
            </form>
            <Result value={result} />
        </div>
    )
}
