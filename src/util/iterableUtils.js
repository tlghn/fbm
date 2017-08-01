function always() {
    return true;
}

function same(v) {
    return v;
}

export function isIterable(obj) {
    return obj && typeof obj[Symbol.iterator] === 'function';
}

export function *filterIterable(iterable, cb) {
    if (!isIterable(iterable)) {
        return;
    }

    if (typeof cb !== 'function') {
        cb = always;
    }

    for (let value of iterable) {
        if (cb(value)) {
            yield value;
        }
    }
}

export function *mapIterable(iterable, cb) {
    if (!isIterable(iterable)) {
        return;
    }

    if (typeof cb !== 'function') {
        cb = same;
    }

    for (let value of iterable) {
        yield cb(value);
    }
}