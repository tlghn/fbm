import Model from "./Model";
import {
    FIELD_ACTION,
    FIELD_REASON,
} from "../constants/fields";
import {setPropertiesIfExist} from "../util/instanceUtils";
import {POLICY_ENFORCEMENT_ACTION_BLOCK} from "../constants/policy_enforcement_actions";

export default class PolicyEnforcement extends Model {

    /**
     * @return {String}
     */
    get action() {
        return this.json[FIELD_ACTION];
    }

    /**
     * @param value {String}
     */
    set action(value) {
        this.json[FIELD_ACTION] = value;
    }

    /**
     * @return {String}
     */
    get reason() {
        return this.json[FIELD_REASON];
    }

    /**
     * @param value {String}
     */
    set reason(value) {
        this.json[FIELD_REASON] = value;
    }

    get isBlock() {
        return this.action === POLICY_ENFORCEMENT_ACTION_BLOCK;
    }

    /**
     * @inheritDoc
     */
    toJson() {
        return setPropertiesIfExist(this.json, {}, FIELD_ACTION, FIELD_REASON);
    }
}
