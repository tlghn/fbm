import NotImplementedError from "./errors/NotImplementedError";

export default class Response {

    /**
     * @return {Promise.<void>}
     */
    async ok() {
        throw new NotImplementedError();
    }
}