const extendHex = (shortHex) => {
    // Remove the # symbol if present
    shortHex = shortHex.replace("#", "");

    // Split the short hex code into three color components
    const r = shortHex.substring(0, 1);
    const g = shortHex.substring(1, 2);
    const b = shortHex.substring(2, 3);

    // Extend each color component to two characters
    const fullHex = `#${r}${r}${g}${g}${b}${b}`;

    return fullHex.toUpperCase(); // Convert to uppercase as hex codes are case-insensitive
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex (e.g., abc):");
alert(extendHex(shortHex));
