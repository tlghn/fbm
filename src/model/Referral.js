import Model from "./Model";
import {
    FIELD_AD_ID,
    FIELD_REF,
    FIELD_SOURCE,
    FIELD_TYPE
} from "../constants/fields";
import {setPropertiesIfExist} from "../util/instanceUtils";

export default class Referral extends Model {

    /**
     * @return {String}
     */
    get ref() {
        return this.json[FIELD_REF];
    }

    /**
     * @param value {String}
     */
    set ref(value) {
        this.json[FIELD_REF] = value;
    }

    /**
     * @return {String}
     */
    get source() {
        return this.json[FIELD_SOURCE];
    }

    /**
     * @param value {String}
     */
    set source(value) {
        this.json[FIELD_SOURCE] = value;
    }

    /**
     * @return {String}
     */
    get type() {
        return this.json[FIELD_TYPE];
    }

    /**
     * @param value {String}
     */
    set type(value) {
        this.json[FIELD_TYPE] = value;
    }

    /**
     * @inheritDoc
     */
    toJson() {
        let {json} = this;
        return setPropertiesIfExist(json, {}, FIELD_REF, FIELD_SOURCE, FIELD_TYPE, FIELD_AD_ID);
    }
}
