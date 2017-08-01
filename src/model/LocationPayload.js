import Payload from "./Payload";
import {FIELD_LAT, FIELD_LONG, FIELD_URL} from "../constants/fields";

export default class LocationPayload extends Payload {

    /**
     * @return {number}
     */
    get lat() {
        return this.json[FIELD_LAT];
    }

    /**
     * @param value {number}
     */
    set lat(value) {
        this.json[FIELD_LAT] = value;
    }


    /**
     * @return {number}
     */
    get long() {
        return this.json[FIELD_LONG];
    }

    /**
     * @param value {number}
     */
    set long(value) {
        this.json[FIELD_LONG] = value;
    }
}
