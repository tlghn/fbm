import Model from "./Model";
import {FIELD_PAYLOAD} from "../constants/fields";

export default class QuickReply extends Model {

    /**
     * @return {string}
     */
    get payload() {
        return this.json[FIELD_PAYLOAD];
    }

    /**
     * @param value {string}
     */
    set payload(value) {
        this.json[FIELD_PAYLOAD] = value;
    }
}