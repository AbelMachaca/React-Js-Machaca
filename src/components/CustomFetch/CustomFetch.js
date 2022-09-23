export const CustomFetch = (item) => {
    return new Promise ((resolve, reject) => {
        setTimeout(
            () => {
                resolve(item);
            },
            2000);
    });
};

export default CustomFetch;
