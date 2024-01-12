const minDescrip = (desc) => {
    if (desc) {
        const newDesc = desc.slice(0, 14) + "..";
        return newDesc;
    }
    return "";
};

export { minDescrip };
