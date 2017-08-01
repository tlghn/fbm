import AbstractPayloadHandler from "./AbstractPayloadHandler";
import {FIELD_OBJECT, FIELD_ENTRY, FIELD_ID} from "../constants/fields";
import {OBJECT_PAGE} from "../constants/objects";
import NotImplementedError from "../errors/NotImplementedError";
import PageEntry from "../entity/PageEntry";

export default class PageHandler extends AbstractPayloadHandler {


    /**
     * @param context {Context}
     * @param request {Request}
     * @param payload {Object}
     */
    async handlePayload(context, request, payload) {
        if (payload[FIELD_OBJECT] !== OBJECT_PAGE) {
            return;
        }

        let entries = /**@type {Array.<*>}*/payload[FIELD_ENTRY];
        if (!Array.isArray(entries) || !entries.length) {
            return;
        }

        await Promise.all(entries.map(entry => this.handleEntry(context, request, new PageEntry(entry))));
    }

    /**
     * @param context {Context}
     * @param request {Request}
     * @param pageEntry {PageEntry}
     */
    async handleEntry(context, request, pageEntry) {
        throw new NotImplementedError();
    }
}
