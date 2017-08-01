import IdEntity from "./IdEntity";
import {INVALID_ID} from "../constants";

export default class Recipient extends IdEntity {

    get isEmpty() {
        return this === EmptyRecipient;
    }
}

export const EmptyRecipient = Object.freeze(new Recipient(INVALID_ID));
