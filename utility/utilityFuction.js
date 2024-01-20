const minDescrip = (desc) => {
    if (desc) {
        const newDesc = desc.slice(0, 10) + "..";
        return newDesc;
    }
    return "";
};

// data
const currentDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentDate = month + "-" + date + "-" + year;
    return currentDate;
};

export { minDescrip, currentDate };
