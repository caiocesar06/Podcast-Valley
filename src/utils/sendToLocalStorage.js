export default (value = undefined) => {
    if (value === undefined) return;
    localStorage.setItem('episode', JSON.stringify(value));
}