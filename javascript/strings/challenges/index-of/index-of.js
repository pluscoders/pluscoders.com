/**
 * Returns the index within the text of the first occurrence of the specified pattern. Returns -1 if the pattern is not found.
 * 
 * @param {*} text The text to search within
 * @param {*} pattern The pattern to search
 * 
 * @returns {number} The index where the pattern is found in the text (-1 otherwise)
 */
function indexOf(text, pattern) {
    var matching = false
    var index = -1

    for (var i = 0; i < text.length; i++) {
        var char = text[i]

        if (!matching) {
            if (char === pattern[0]) {
                matching = true
                index = i
            }
        } else {
            var j = i - index

            if (j < pattern.length) {
                if (char !== pattern[j]) {
                    matching = false

                    index = -1
                }
            } else return index
        }
    }

    return index
}