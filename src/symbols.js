import {
    FIELD_ATTACHMENTS,
    FIELD_ID, FIELD_PAYLOAD, FIELD_QUICK_REPLY, FIELD_RECIPIENT, FIELD_REFERRAL,
    FIELD_SENDER,
} from "./constants/fields";

export const SYM_ID = Symbol(FIELD_ID);
export const SYM_SENDER = Symbol(FIELD_SENDER);
export const SYM_RECIPIENT = Symbol(FIELD_RECIPIENT);
export const SYM_PAYLOAD = Symbol(FIELD_PAYLOAD);
export const SYM_ATTACHMENTS = Symbol(FIELD_ATTACHMENTS);
export const SYM_QUICK_REPLY = Symbol(FIELD_QUICK_REPLY);
export const SYM_REFERRAL = Symbol(FIELD_REFERRAL);

export const SYM_PAGE_ID_FILTER = Symbol('pageIdFilter');
export const SYM_INCLUDES = Symbol('includes');
export const SYM_EXCLUDES = Symbol('excludes');
export const SYM_CONTEXT = Symbol('context');
export const SYM_REQUEST = Symbol('request');
export const SYM_PAGE_ENTRY = Symbol('pageEntry');
export const SYM_DATA = Symbol('data');
