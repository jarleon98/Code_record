var isPalindrome = function(s) {
    s = s.replace(/([^a-zA-Z0-9])/g, '').toLocaleLowerCase();

    for (let i = 0, j = s.length - 1; i < j; i++,j--) {
        if (s[i] !== s[j]) {
            return false;
        }
    }
    return true;
};