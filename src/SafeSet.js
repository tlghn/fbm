import {SYM_TYPE} from "./symbols";
import {filterIterable} from "./util/iterableUtils";

/**
 * @template T
 */
export default class SafeSet extends Set {
    /**
     * @param type {function.<T>}
     * @param items {Iterable.<T>}
     */
    constructor(type, items = null) {
        if (typeof type !== 'function') {
            throw new TypeError('type must be function');
        }
        super(filterIterable(items, item => item instanceof type));
        this[SYM_TYPE] = type;
    }

    /**
     * @return {function.<T>}
     */
    get type() {
        return this[SYM_TYPE];
    }

    /**
     * @param {T} value
     * @return {SafeSet.<T>}
     */
    add(value) {
        let {type} = this;
        if (!(value instanceof type)) {
            throw new TypeError('value must be ' + type.name);
        }
        return super.add(value);
    }
}