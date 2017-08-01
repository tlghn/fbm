import NotImplementedError from "../errors/NotImplementedError";

export default class EndpointHandler {

    /**
     * @param context {Context}
     * @param request {Request}
     */
    async handle(context, request) {
        throw new NotImplementedError();
    }
}
