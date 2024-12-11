import { UsersAdaptInterface } from "@/data/types";

class UsersAdapt {
    externalUsersAdapt: UsersAdaptInterface | undefined;

    constructor(externalUsersAdapt: UsersAdaptInterface) {
        this.externalUsersAdapt = externalUsersAdapt;
    }

    adapt() {
        return this.externalUsersAdapt;
    }
}

export default UsersAdapt;