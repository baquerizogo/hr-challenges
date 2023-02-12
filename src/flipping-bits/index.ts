// You will be given a list of 32 bit unsigned integers. 
// Flip all the bits ( 1 -> 0 and  0 -> 1) and return the result as an
// unsigned integer. 

export function flippingBits(n: number): number {
    if(n < 0) throw new Error("n can't be negative");
    if(n > Math.pow(2, 32)) throw new Error("n is bigger than 32bits");

    const binary: string = convertTo32Bits(n);
    const flippedBinary: string = flipBinary(binary);
    const converted: number = parseInt(flippedBinary, 2);
    return converted;
}

export function convertTo32Bits(n: number): string {
    const binary: string = (n).toString(2);
    
    let pads: string = '';
    while(pads.length < 32) pads = pads + "0";

    const paddedBinary: string = pads.substring(0, pads.length - binary.length) + binary;
    return paddedBinary;
}

export function flipBinary(binary: string): string {
    let flippedBinary: string = "";

    for(let i = 0; i < binary.length; i++) {
        if(binary[i] == "0") flippedBinary += "1";
        if(binary[i] == "1") flippedBinary += "0";
    }

    return flippedBinary;
}