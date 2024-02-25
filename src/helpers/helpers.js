export const countPercentage = (total, value) => {
    return (value / total) * 100;
}

export const formatToNormalCase = (string) => {
    return string[0].toUpperCase() + string.slice(1).split('').map((letter) => {
        const uppercaseRegex = /[A-Z]/;
        if (uppercaseRegex.test(letter)) {
            return ` ${letter.toLowerCase()}`;
        }
        return letter.toLowerCase();
    }).join('');
}
