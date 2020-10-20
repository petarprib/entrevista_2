const ValidatePassword = (password) => {
    if (password === "" || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$/.test(password)) {
        return true;
    }
}

export default ValidatePassword;