import PageHandler from "./PageHandler";
import {SYM_PAGE_ID_FILTER} from "../symbols";
import Filter from "../Filter";
import PageEntry from "../entity/PageEntry";
import {
    FIELD_EVENT_ACCOUNT_LINKING,
    FIELD_EVENT_DELIVERY, FIELD_EVENT_MESSAGE, FIELD_EVENT_OPT_IN, FIELD_EVENT_POLICY_ENFORCEMENT, FIELD_EVENT_POSTBACK,
    FIELD_EVENT_READ,
    FIELD_EVENT_REFERRAL
} from "../constants/fields";
import MessagingObject from "../entity/MessagingObject";
import Message from "../model/Message";
import _debug from 'debug';
import Delivery from "../model/Delivery";
import Read from "../model/Read";
import Referral from "../model/Referral";
import Postback from "../model/Postback";
import OptIn from "../model/OptIn";
import AccountLinking from "../model/AccountLinking";
import PolicyEnforcement from "../model/PolicyEnforcement";

const debug = _debug('fbm:PageEntryHandler');

const EVENT_HANDLERS = {
    [FIELD_EVENT_MESSAGE] : (/**@type {PageEntryHandler}*/inst, msgObj, payload) =>
        inst.handleMessagingEvent(PageEntryHandler.prototype.handleMessageOrEcho, msgObj, new Message(payload[FIELD_EVENT_MESSAGE])),

    [FIELD_EVENT_DELIVERY] : (/**@type {PageEntryHandler}*/inst, msgObj, payload) =>
        inst.handleMessagingEvent(PageEntryHandler.prototype.handleDelivery, msgObj, new Delivery(payload[FIELD_EVENT_DELIVERY])),

    [FIELD_EVENT_READ] : (/**@type {PageEntryHandler}*/inst, msgObj, payload) =>
        inst.handleMessagingEvent(PageEntryHandler.prototype.handleRead, msgObj, new Read(payload[FIELD_EVENT_READ])),

    [FIELD_EVENT_REFERRAL] : (/**@type {PageEntryHandler}*/inst, msgObj, payload) =>
        inst.handleMessagingEvent(PageEntryHandler.prototype.handleReferral, msgObj, new Referral(payload[FIELD_EVENT_REFERRAL])),

    [FIELD_EVENT_POSTBACK] : (/**@type {PageEntryHandler}*/inst, msgObj, payload) =>
        inst.handleMessagingEvent(PageEntryHandler.prototype.handlePostback, msgObj, new Postback(payload[FIELD_EVENT_POSTBACK])),

    [FIELD_EVENT_OPT_IN] : (/**@type {PageEntryHandler}*/inst, msgObj, payload) =>
        inst.handleMessagingEvent(PageEntryHandler.prototype.handleOptIn, msgObj, new OptIn(payload[FIELD_EVENT_OPT_IN])),

    [FIELD_EVENT_ACCOUNT_LINKING] : (/**@type {PageEntryHandler}*/inst, msgObj, payload) =>
        inst.handleMessagingEvent(PageEntryHandler.prototype.handleAccountLinking, msgObj, new AccountLinking(payload[FIELD_EVENT_ACCOUNT_LINKING])),

    [FIELD_EVENT_POLICY_ENFORCEMENT] : (/**@type {PageEntryHandler}*/inst, msgObj, payload) =>
        inst.handleMessagingEvent(PageEntryHandler.prototype.handlePolicyEnforcement, msgObj, new PolicyEnforcement(payload[FIELD_EVENT_POLICY_ENFORCEMENT])),
};

export default class PageEntryHandler extends PageHandler {

    /**
     * @return {Filter}
     */
    get pageIdFilter() {
        return this[SYM_PAGE_ID_FILTER];
    }

    /**
     * @param value {Filter}
     */
    set pageIdFilter(value) {
        if (value === null || value === void 0) {
            delete this[SYM_PAGE_ID_FILTER];
            return;
        }
        if (!(value instanceof Filter)) {
            throw new TypeError('instance must be Filter');
        }
        this[SYM_PAGE_ID_FILTER] = value;
    }

    /**
     * @param context {Context}
     * @param request {Request}
     * @param pageEntry {PageEntry}
     */
    async handleEntry(context, request, pageEntry) {
        if (!Filter.valueMatches(pageEntry.pageId, this.pageIdFilter, context.pageIdFilter)) {
            return;
        }

        let messaging = pageEntry.messaging;

        await Promise.all(messaging.map(payload => this.handleMessaging(context, request, pageEntry, payload)))
    }


    /**
     * @param context {Context}
     * @param request {Request}
     * @param pageEntry {PageEntry}
     * @param payload {Object}
     */
    async handleMessaging(context, request, pageEntry, payload) {
        let messagingObject = new MessagingObject(context, request, pageEntry, payload);

        let handlers = Object.keys(payload)
            .filter(key => EVENT_HANDLERS.hasOwnProperty(key))
            .map(key => EVENT_HANDLERS[key](this, messagingObject, payload));

        await Promise.all(handlers);
    }

    /**
     * @param callback {function}
     * @param messagingObject {MessagingObject}
     * @param model {Model}
     * @return {Promise.<void>}
     */
    async handleMessagingEvent(callback, messagingObject, model) {
        await callback.call(this, messagingObject, model);
    }

    /**
     * @param messagingObject {MessagingObject}
     * @param model {Message}
     * @return {Promise.<void>}
     */
    async handleMessageOrEcho(messagingObject, model) {
        if (model.isEcho) {
            return await this.handleEcho(messagingObject, model);
        }
        return await this.handleMessage(messagingObject, model);
    }

    /**
     * @param messagingObject {MessagingObject}
     * @param model {Message}
     * @return {Promise.<void>}
     */
    async handleMessage(messagingObject, model) {
        debug("handleMessage => %s", model.json);
    }

    /**
     * @param messagingObject {MessagingObject}
     * @param model {Message}
     * @return {Promise.<void>}
     */
    async handleEcho(messagingObject, model) {
        debug("handleMessage => %s", model.json);
    }

    /**
     * @param messagingObject {MessagingObject}
     * @param model {Delivery}
     * @return {Promise.<void>}
     */
    async handleDelivery(messagingObject, model) {
        debug("handleDelivery => %s", model.json);
    }

    /**
     * @param messagingObject {MessagingObject}
     * @param model {Read}
     * @return {Promise.<void>}
     */
    async handleRead(messagingObject, model) {
        debug("handleRead => %s", model.json);
    }

    /**
     * @param messagingObject {MessagingObject}
     * @param model {Referral}
     * @return {Promise.<void>}
     */
    async handleReferral(messagingObject, model) {
        debug("handleReferral => %s", model.json);
    }

    /**
     * @param messagingObject {MessagingObject}
     * @param model {Postback}
     * @return {Promise.<void>}
     */
    async handlePostback(messagingObject, model) {
        debug("handlePostback => %s", model.json);
    }

    /**
     * @param messagingObject {MessagingObject}
     * @param model {OptIn}
     * @return {Promise.<void>}
     */
    async handleOptIn(messagingObject, model) {
        debug("handleOptIn => %s", model.json);
    }

    /**
     * @param messagingObject {MessagingObject}
     * @param model {AccountLinking}
     * @return {Promise.<void>}
     */
    async handleAccountLinking(messagingObject, model) {
        debug("handleAccountLinking => %s", model.json);
    }

    /**
     * @param messagingObject {MessagingObject}
     * @param model {PolicyEnforcement}
     * @return {Promise.<void>}
     */
    async handlePolicyEnforcement(messagingObject, model) {
        debug("handlePolicyEnforcement => %s", model.json);
    }
}
