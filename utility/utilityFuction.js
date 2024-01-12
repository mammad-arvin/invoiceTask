const minDescrip = (desc) => {
    if (desc) {
        const newDesc = desc.slice(0, 13) + "..";
        return newDesc;
    }
    return "";
};

export { minDescrip };
