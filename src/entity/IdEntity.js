import {SYM_ID} from "../symbols";

export default class IdEntity {

    constructor(id) {
        this[SYM_ID] = id;
    }

    get id() {
        return this[SYM_ID];
    }
}
