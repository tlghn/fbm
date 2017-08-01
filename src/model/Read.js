import Model from "./Model";
import {
    FIELD_SEQUENCE,
    FIELD_WATERMARK
} from "../constants/fields";
import {setPropertiesIfExist} from "../util/instanceUtils";

export default class Read extends Model {

    /**
     * @return {Number}
     */
    get watermark() {
        return this.json[FIELD_WATERMARK];
    }

    /**
     * @param value {Number}
     */
    set watermark(value) {
        this.json[FIELD_WATERMARK] = value;
    }

    /**
     * @return {Number}
     */
    get sequence() {
        return this.json[FIELD_SEQUENCE];
    }

    /**
     * @param value {Number}
     */
    set sequence(value) {
        this.json[FIELD_SEQUENCE] = value;
    }

    /**
     * @inheritDoc
     */
    toJson() {
        let {json} = this;
        return setPropertiesIfExist(json, {}, FIELD_WATERMARK, FIELD_SEQUENCE);
    }
}
