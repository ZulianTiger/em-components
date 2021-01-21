module.exports = function unspace(string) {
    if (typeof string !== "string") throw new TypeError("Add a string please.");
    return string.replace(/\s/g, "");
};