import PostRequestHandler from "./PostRequestHandler";
import NotImplementedError from "../errors/NotImplementedError";

export default class AbstractPayloadHandler extends PostRequestHandler {

    /**
     * @param context {Context}
     * @param request {Request}
     */
    async handlePostRequest(context, request) {
        let {payload} = request;
        if (typeof payload === 'object') {
            await this.handlePayload(context, request, payload);
        }
    }

    /**
     * @param context {Context}
     * @param request {Request}
     * @param payload {Object}
     */
    async handlePayload(context, request, payload) {
        throw new NotImplementedError();
    }
}
