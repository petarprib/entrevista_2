const ValidateRepeatedPassword = (repeatedPassword, password) => {
    if (repeatedPassword !== password) {
        return true;
    }
}

export default ValidateRepeatedPassword;