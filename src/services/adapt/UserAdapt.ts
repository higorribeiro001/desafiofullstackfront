import { UserAdaptInterface } from "@/data/types";

class UserAdapt {
    externalUserAdapt: UserAdaptInterface | undefined;

    constructor(externalUserAdapt: UserAdaptInterface) {
        this.externalUserAdapt = externalUserAdapt;
    }

    adapt() {
        return this.externalUserAdapt;
    }
}

export default UserAdapt;