export function isDefined(obj) {
    return obj !== null && obj !== void 0;
}

export function isInstanceOrNothing(obj, func) {
    return !isDefined(obj) || (obj instanceof func);
}

export function setPropertyIfExists(property, src, dst) {
    if (src.hasOwnProperty(property)) {
        dst[property] = src[property];
    }
    return dst;
}

export function setPropertiesIfExist(src, dst) {
    Array.prototype.forEach.call(arguments, (prop, index) => {
        if (index < 2) {
            return;
        }
        setPropertyIfExists(prop, src, dst);
    });
    return dst;
}