import {EmptySender} from "../Sender";
import Sender from "../Sender";
import {FIELD_ID} from "../../constants/fields";

export default class SenderFactory {

    /**
     * @param payload {Object}
     * @return {Sender}
     */
    static create(payload) {
        if (typeof payload !== 'object' || !payload[FIELD_ID]) {
            return EmptySender;
        }

        return new Sender(payload[FIELD_ID]);
    }
}
