const ValidateUsername = (newExistingUsers, username) => {
    if (!newExistingUsers.length) {
        return false;
    } else {
        let match = false;
        for (let user of newExistingUsers) {
            if (user.username === username) {
                match = true;
                return true;
            }
        }

        if (!match) {
            return false;
        }
    }
}

export default ValidateUsername;