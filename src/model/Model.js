import {SYM_DATA} from "../symbols";

export default class Model {
    constructor(json = {}) {
        this[SYM_DATA] = typeof json === 'object' ? json : {};
    }

    /**
     * @return {Object}
     */
    get json() {
        return this[SYM_DATA];
    }

    /**
     * @return {Object}
     */
    toJson() {
        return this.json;
    }
}
