import Model from "./Model";
import {
    FIELD_PAYLOAD, FIELD_REFERRAL, FIELD_TITLE
} from "../constants/fields";
import {isDefined, isInstanceOrNothing, setPropertiesIfExist} from "../util/instanceUtils";
import {SYM_REFERRAL} from "../symbols";
import Referral from "./Referral";

export default class Postback extends Model {

    constructor(json) {
        super(json);

        let referral = this.json[FIELD_REFERRAL];
        if (isDefined(referral)) {
            this[SYM_REFERRAL] = new Referral(referral);
        }
    }

    /**
     * @return {String}
     */
    get title() {
        return this.json[FIELD_TITLE];
    }

    /**
     * @param value {String}
     */
    set title(value) {
        this.json[FIELD_TITLE] = value;
    }

    /**
     * @return {String}
     */
    get payload() {
        return this.json[FIELD_PAYLOAD];
    }

    /**
     * @param value {String}
     */
    set payload(value) {
        this.json[FIELD_PAYLOAD] = value;
    }


    /**
     * @return {Referral}
     */
    get referral() {
        return this.json[SYM_REFERRAL];
    }

    /**
     * @param value {Referral}
     */
    set referral(value) {
        if (!isInstanceOrNothing(value, Referral)) {
            throw new TypeError('value must be Referral');
        }
        this.json[SYM_REFERRAL] = value;
    }


    /**
     * @inheritDoc
     */
    toJson() {
        let {json, referral} = this;
        let result = setPropertiesIfExist(json, {}, FIELD_TITLE, FIELD_PAYLOAD);
        if (referral) {
            result[FIELD_REFERRAL] = referral.json;
        }
        return result;
    }
}
