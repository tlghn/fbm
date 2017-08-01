import {SYM_PAGE_ID_FILTER} from "./symbols";
import Filter from "./Filter";

export default class Context {

    /**
     * @return {Filter}
     */
    get pageIdFilter() {
        return this[SYM_PAGE_ID_FILTER];
    }

    /**
     * @param value {Filter}
     */
    set pageIdFilter(value) {
        if (value === null || value === void 0) {
            delete this[SYM_PAGE_ID_FILTER];
            return;
        }
        if (!(value instanceof Filter)) {
            throw new TypeError('instance must be Filter');
        }
        this[SYM_PAGE_ID_FILTER] = value;
    }
}