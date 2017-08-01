import {SYM_EXCLUDES, SYM_INCLUDES} from "./symbols";

export default class Filter {

    _setValue(symbol, value) {
        if (value === null || value === void 0) {
            delete this[symbol];
            return;
        }

        if (value instanceof Set) {
            this[symbol] = value;
            return;
        }

        let set = /**@type {Set.<*>}*/this[symbol];
        if (!set) {
            this[symbol] = new Set([value]);
            return;
        }

        set.add(value);
    }

    /**
     * @return {Set.<*>}
     */
    get includes() {
        return this[SYM_INCLUDES];
    }

    /**
     * @param value {*}
     */
    set includes(value) {
        this._setValue(SYM_INCLUDES, value);
    }

    /**
     * @return {Set.<*>}
     */
    get excludes() {
        return this[SYM_EXCLUDES];
    }

    /**
     * @param value {*}
     */
    set excludes(value) {
        this._setValue(SYM_EXCLUDES, value);
    }

    /**
     * @param value {*}
     * @return {boolean}
     */
    matches(value) {

        // noinspection JSMismatchedCollectionQueryUpdate
        let {
            /**@type {Set.<*>}*/includes,
            /**@type {Set.<*>}*/excludes
        } = this;

        if (includes && !includes.has(value)) {
            return false;
        }

        return (!excludes || !excludes.has(value));
    }

    static valueMatches(value/*, ...filters*/) {
        return Array.prototype.every.call(
            arguments,
            (filter, index) =>
                (index < 1)
                || (
                    !(filter instanceof Filter)
                    || filter.matches(value)
                )
        );
    }
}
