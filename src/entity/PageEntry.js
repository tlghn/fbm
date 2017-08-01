import {SYM_PAYLOAD} from "../symbols";
import {FIELD_ID, FIELD_MESSAGING, FIELD_TIME} from "../constants/fields";

export default class PageEntry {
    constructor(payload) {
        this[SYM_PAYLOAD] = payload;
    }

    /**
     * @return {Object}
     */
    get payload() {
        return this[SYM_PAYLOAD];
    }

    /**
     * @return {String}
     */
    get pageId() {
        return this.payload[FIELD_ID];
    }

    /**
     * @return {Number}
     */
    get time() {
        return this.payload[FIELD_TIME];
    }

    /**
     * @return {Array.<Object>}
     */
    get messaging() {
        return this.payload[FIELD_MESSAGING];
    }
}
