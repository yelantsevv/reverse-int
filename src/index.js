module.exports = function reverse(n) {
    return parseInt([...String(n)].reverse().join(""));
};
