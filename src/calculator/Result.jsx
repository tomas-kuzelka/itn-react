


export function Result({ value }) {

    // pokud není value null, vrací Výsledek:
    if (value != null)
        return (<div>Výsledek: {value}</div>)
    return null;

}
