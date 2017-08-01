import Payload from "./Payload";
import {FIELD_TITLE, FIELD_URL} from "../constants/fields";

export default class FallbackPayload extends Payload {

    /**
     * @return {string}
     */
    get url() {
        return this.json[FIELD_URL];
    }

    /**
     * @param value {string}
     */
    set url(value) {
        this.json[FIELD_URL] = value;
    }

    /**
     * @return {string}
     */
    get title() {
        return this.json[FIELD_TITLE];
    }

    /**
     * @param value {string}
     */
    set title(value) {
        this.json[FIELD_TITLE] = value;
    }
}
