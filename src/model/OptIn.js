import Model from "./Model";
import {
    FIELD_REF
} from "../constants/fields";
import {setPropertiesIfExist} from "../util/instanceUtils";

export default class OptIn extends Model {

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
     * @inheritDoc
     */
    toJson() {
        return setPropertiesIfExist(this.json, {}, FIELD_REF);
    }
}
