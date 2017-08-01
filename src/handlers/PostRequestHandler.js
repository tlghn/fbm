import EndpointHandler from "./EndpointHandler";
import NotImplementedError from "../errors/NotImplementedError";

export default class PostRequestHandler extends EndpointHandler {

    /**
     * @param context {Context}
     * @param request {Request}
     */
    async handle(context, request) {
        if (request.isPost) {
            await this.handlePostRequest(context, request);
        }
        return request.isPost;
    }

    /**
     * @param context {Context}
     * @param request {Request}
     */
    async handlePostRequest(context, request) {
        throw new NotImplementedError();
    }
}
