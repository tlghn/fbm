import {SYM_CONTEXT, SYM_PAGE_ENTRY, SYM_PAYLOAD, SYM_RECIPIENT, SYM_REQUEST, SYM_SENDER} from "../symbols";
import {FIELD_RECIPIENT, FIELD_SENDER, FIELD_TIMESTAMP} from "../constants/fields";
import SenderFactory from "./factories/SenderFactory";
import RecipientFactory from "./factories/RecipientFactory";

export default class MessagingObject {

    /**
     * @param context {Context}
     * @param request {Request}
     * @param pageEntry {PageEntry}
     * @param payload {Object}
     */
    constructor(context, request, pageEntry, payload) {
        this[SYM_CONTEXT] = context;
        this[SYM_REQUEST] = request;
        this[SYM_PAGE_ENTRY] = pageEntry;
        this[SYM_PAYLOAD] = payload;
    }

    /**
     * @return {Context}
     */
    get context() {
        return this[SYM_CONTEXT];
    }

    /**
     * @return {Request}
     */
    get request() {
        return this[SYM_REQUEST];
    }

    /**
     * @return {PageEntry}
     */
    get pageEntry() {
        return this[SYM_PAGE_ENTRY];
    }

    /**
     * @return {Object}
     */
    get payload() {
        return this[SYM_PAYLOAD];
    }

    /**
     * @return {Number}
     */
    get timestamp() {
        return this.payload[FIELD_TIMESTAMP];
    }

    /**
     * @return {Sender}
     */
    get sender() {
        if(!this.hasOwnProperty(SYM_SENDER)) {
            this[SYM_SENDER] = this.payload[FIELD_SENDER] ?
                SenderFactory.create(this.payload[FIELD_SENDER]) :
                null;
        }
        return this[SYM_SENDER];
    }

    /**
     * @return {Recipient}
     */
    get recipient() {
        if(!this.hasOwnProperty(SYM_RECIPIENT)) {
            this[SYM_SENDER] = this.payload[FIELD_RECIPIENT] ?
                RecipientFactory.create(this.payload[FIELD_RECIPIENT]) :
                null;
        }
        return this[SYM_RECIPIENT];
    }
}
