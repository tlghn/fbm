import Model from "./Model";
import {
    FIELD_APP_ID, FIELD_ATTACHMENTS, FIELD_IS_ECHO, FIELD_MESSAGE_ID, FIELD_QUICK_REPLY,
    FIELD_TEXT
} from "../constants/fields";
import SafeSet from "../SafeSet";
import Attachment from "./Attachment";
import {SYM_ATTACHMENTS, SYM_QUICK_REPLY} from "../symbols";
import {mapIterable} from "../util/iterableUtils";
import QuickReply from "./QuickReply";
import {isInstanceOrNothing, setPropertiesIfExist} from "../util/instanceUtils";

export default class Message extends Model {

    constructor(json) {
        super(json);

        this[SYM_ATTACHMENTS] = new SafeSet(Attachment, mapIterable(obj => new Attachment(obj)));
        let quickReply = this.json[FIELD_QUICK_REPLY];
        if (typeof quickReply === 'object') {
            this[SYM_QUICK_REPLY] = new QuickReply(quickReply);
        }
    }

    /**
     * @return {String}
     */
    get id() {
        return this.json[FIELD_MESSAGE_ID];
    }

    /**
     * @param value {String}
     */
    set id(value) {
        this.json[FIELD_MESSAGE_ID] = value;
    }

    /**
     * @return {String}
     */
    get text() {
        return this.json[FIELD_TEXT];
    }

    /**
     * @param value {String}
     */
    set text(value) {
        this.json[FIELD_TEXT] = value;
    }

    /**
     * @return {SafeSet.<Attachment>}
     */
    get attachments() {
        return this[SYM_ATTACHMENTS];
    }

    /**
     * @return {QuickReply}
     */
    get quickReply() {
        return this[SYM_QUICK_REPLY];
    }

    /**
     * @param value {QuickReply}
     */
    set quickReply(value) {
        if (!isInstanceOrNothing(value, QuickReply)) {
            throw new TypeError('value must be QuickReply');
        }
        this[SYM_QUICK_REPLY] = value;
    }

    /**
     *
     * @return {boolean}
     */
    get isEcho() {
        return !!this.json[FIELD_IS_ECHO];
    }

    /**
     * @param value {boolean}
     */
    set isEcho(value) {
        this.json[FIELD_IS_ECHO] = value;
    }

    get appId() {
        return this.json[FIELD_APP_ID];
    }

    set appId(value) {
        this.json[FIELD_APP_ID] = value;
    }

    /**
     * @inheritDoc
     */
    toJson() {
        let result = {};
        let {attachments, quickReply, json} = this;

        setPropertiesIfExist(json, result, FIELD_MESSAGE_ID, FIELD_TEXT, FIELD_IS_ECHO, FIELD_APP_ID);

        if (attachments.size) {
            result[FIELD_ATTACHMENTS] = [...mapIterable(attachments, attachment => attachment.toJson())];
        }

        if (quickReply) {
            result[FIELD_QUICK_REPLY] = quickReply.toJson();
        }

        return result;
    }
}
