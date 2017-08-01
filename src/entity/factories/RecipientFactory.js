import {EmptyRecipient} from "../Recipient";
import Recipient from "../Recipient";
import {FIELD_ID} from "../../constants/fields";

export default class RecipientFactory {

    /**
     * @param payload {Object}
     * @return {Recipient}
     */
    static create(payload) {
        if (typeof payload !== 'object' || !payload[FIELD_ID]) {
            return EmptyRecipient;
        }

        return new Recipient(payload[FIELD_ID]);
    }
}
