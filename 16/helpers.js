const padBinary = binary => {
    while (binary.length < 4) {
        binary = '0' + binary;
    }
    return binary;
}

const hexaToBinary = hexa => {
    return padBinary(Number(parseInt(hexa, 16)).toString(2));
}

const binaryToNumber = binary => {
    return parseInt(binary, 2)
}

module.exports = {
    padBinary,
    hexaToBinary,
    binaryToNumber
}