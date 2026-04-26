

export const operations = [
    { value: "+", label: "Sčítání" },
    { value: "-", label: "Odčítání" },
    { value: "*", label: "Násobení" },
    { value: "/", label: "Dělení" }
];


export function calculate(a, b, operation) {
    switch (operation) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return (b != 0) ? a / b : null; // throw new Exception("Nulou nelze");
        default:
            return null;
    }
}
