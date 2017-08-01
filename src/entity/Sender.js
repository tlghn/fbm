import IdEntity from "./IdEntity";
import {INVALID_ID} from "../constants";

export default class Sender extends IdEntity {

    get isEmpty() {
        return this === EmptySender;
    }
}

export const EmptySender = Object.freeze(new Sender(INVALID_ID));
