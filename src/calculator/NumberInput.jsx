



export function NumberInput({ name, label, value, onChange }) {


    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} value={value} type="number" onChange={onChange} required />
        </div>
    )
}
