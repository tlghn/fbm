import Payload from "./Payload";
import {FIELD_URL} from "../constants/fields";

export default class MultimediaPayload extends Payload {

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
}
