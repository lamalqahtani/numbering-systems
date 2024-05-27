export const decToBin = (num: number) => {
    let binary = "";
    let decimalNumber = num;
    for (; decimalNumber > 0; decimalNumber >>= 1) {
        binary = (decimalNumber & 1) + binary;
    }
    return binary || "0";
}
