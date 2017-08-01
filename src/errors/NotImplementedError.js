export default class NotImplementedError extends TypeError {
    constructor(msg = "Not Implemented") {
        super(msg);
    }
}
