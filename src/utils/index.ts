export function isEven(x: number) {
    return x % 2 === 0;
}

export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const letterValue: {
    [key: string]: () => number;
} = {
    a: () => 1,
    b: () => 2,
    c: () => 3,
    d: () => 4,
    e: () => 5,
    f: () => 6,
    g: () => 7,
    h: () => 8,
};

export enum Colors {
    white = "white",
    black = "black",
}