import { NumberInput } from "./NumberInput";
import { Result } from "./Result";
import Select from "react-select";


export function CalculatorForm({ title }) {

    return (
        <div>
            <h1>{title}</h1>
            <form>
                <NumberInput name={"a"} label={"První číslo: "} />
                <NumberInput name={"b"} label={"Druhé číslo: "} />
                <Select options={[]} />
                <input type="submit" value={"Vypočítej"} />
            </form>
            <Result value={null} />
        </div>
    )
}
