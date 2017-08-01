import Model from "./Model";
import {
    FIELD_AUTHORIZATION_CODE,
    FIELD_STATUS
} from "../constants/fields";
import {setPropertiesIfExist} from "../util/instanceUtils";
import {ACCOUNT_LINKING_LINKED} from "../constants/account_linking_statuses";

export default class AccountLinking extends Model {

    /**
     * @return {String}
     */
    get status() {
        return this.json[FIELD_STATUS];
    }

    /**
     * @param value {String}
     */
    set status(value) {
        this.json[FIELD_STATUS] = value;
    }

    /**
     * @return {String}
     */
    get authorizationCode() {
        return this.json[FIELD_AUTHORIZATION_CODE];
    }

    /**
     * @param value {String}
     */
    set authorizationCode(value) {
        this.json[FIELD_AUTHORIZATION_CODE] = value;
    }

    get isLinked() {
        return this.status === ACCOUNT_LINKING_LINKED;
    }

    /**
     * @inheritDoc
     */
    toJson() {
        return setPropertiesIfExist(this.json, {}, FIELD_STATUS, FIELD_AUTHORIZATION_CODE);
    }
}
