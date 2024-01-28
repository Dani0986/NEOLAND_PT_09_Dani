
const enumOk = (gender) => {
    const enumGender = ["hombre", "mujer", "otro"];
    if (enumGender.includes(gender)) {
        return { chacek: true, gender}; 
    } else {
        return { check: false };
    }
};

module.exports = enumOk;

