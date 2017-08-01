import Model from "./Model";
import {FIELD_TYPE} from "../constants/fields";
import {
    PAYLOAD_TYPE_AUDIO, PAYLOAD_TYPE_FALLBACK, PAYLOAD_TYPE_FILE, PAYLOAD_TYPE_IMAGE, PAYLOAD_TYPE_LOCATION,
    PAYLOAD_TYPE_VIDEO
} from "../constants/payload_types";
import {SYM_PAYLOAD} from "../symbols";
import MultimediaPayload from "./MultimediaPayload";
import Payload from './Payload';
import LocationPayload from "./LocationPayload";
import FallbackPayload from "./FallbackPayload";

export default class Attachment extends Model {

    constructor(json) {
        super(json);
        let {payload} = this.json;

        if (this.isMultimedia) {

        }
    }
    /**
     * @return {string}
     */
    get type() {
        return this.json[FIELD_TYPE];
    }

    /**
     * @param value {string}
     */
    set type(value) {
        this.json[FIELD_TYPE] = value;
    }

    /**
     * @return {Payload}
     */
    get payload() {
        return this[SYM_PAYLOAD];
    }

    /**
     * @param value {Payload}
     */
    set payload(value) {
        if (!(value instanceof Payload)) {
            throw new TypeError('value must be Payload');
        }
        this[SYM_PAYLOAD] = value;
    }

    /**
     * @return {MultimediaPayload}
     */
    get multimedia() {
        return (this.payload instanceof MultimediaPayload) ? this.payload : null;
    }

    /**
     * @return {LocationPayload}
     */
    get location() {
        return (this.payload instanceof LocationPayload) ? this.payload : null;
    }

    /**
     * @return {FallbackPayload}
     */
    get fallback() {
        return (this.payload instanceof FallbackPayload) ? this.payload : null;
    }

    get isMultimedia() {
        switch (this.type) {
            case PAYLOAD_TYPE_IMAGE:
            case PAYLOAD_TYPE_AUDIO:
            case PAYLOAD_TYPE_FILE:
            case PAYLOAD_TYPE_VIDEO:
                return true;
        }
        return false;
    }

    get isFallback() {
        return this.type === PAYLOAD_TYPE_FALLBACK;
    }

    get isLocation() {
        return this.type === PAYLOAD_TYPE_LOCATION;
    }

    /**
     * @param type {String}
     * @param payload {Object}
     * @return {Attachment}
     */
    static createAttachment(type, payload) {
        return new Attachment({type, payload});
    }

    /**
     * @param type {String}
     * @param url {String}
     * @return {Attachment}
     */
    static createMultimedia(type, url) {
        return Attachment.createAttachment(type, {url});
    }

    /**
     * @param url {String}
     * @return {Attachment}
     */
    static createImage(url) {
        return Attachment.createMultimedia(PAYLOAD_TYPE_IMAGE, url);
    }

    /**
     * @param url {String}
     * @return {Attachment}
     */
    static createAudio(url) {
        return Attachment.createMultimedia(PAYLOAD_TYPE_AUDIO, url);
    }

    /**
     * @param url {String}
     * @return {Attachment}
     */
    static createVideo(url) {
        return Attachment.createMultimedia(PAYLOAD_TYPE_VIDEO, url);
    }

    /**
     * @param url {String}
     * @return {Attachment}
     */
    static createFile(url) {
        return Attachment.createMultimedia(PAYLOAD_TYPE_FILE, url);
    }

    /**
     * @param lat {Number}
     * @param long {Number}
     * @return {Attachment}
     */
    static createLocation(lat, long) {
        return Attachment.createAttachment(PAYLOAD_TYPE_LOCATION, {lat, long});
    }

    /**
     * @param title {String}
     * @param url {String}
     * @return {Attachment}
     */
    static createFallback(title, url) {
        return Attachment.createAttachment(PAYLOAD_TYPE_FALLBACK,
            {title, url, payload: null, type: PAYLOAD_TYPE_FALLBACK});
    }
}
