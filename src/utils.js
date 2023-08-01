// Reduce or cut long sentences based on particular length
export const truncate = (str, n) => (str.length > n ? str.substr(0, n) + '....' : str);