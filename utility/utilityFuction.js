const minDescrip = (desc) => {
    if (desc) {
        const newDesc = desc.slice(0, 10) + "..";
        return newDesc;
    }
    return "";
};

export { minDescrip };
