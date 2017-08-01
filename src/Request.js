import NotImplementedError from "./errors/NotImplementedError";
import {HTTP_METHOD_GET, HTTP_METHOD_POST} from "./constants/http_methods";

export default class Request {

    /**
     * @return {Object}
     */
    get payload() {
        throw new NotImplementedError();
    }

    /**
     * @return {HTTP_METHOD_GET|HTTP_METHOD_POST}
     */
    get method() {
        throw new NotImplementedError();
    }

    get isPost() {
        return this.method === HTTP_METHOD_POST;
    }

    get isGet() {
        return this.method === HTTP_METHOD_GET;
    }
}
