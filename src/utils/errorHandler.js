"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataError = exports.FetchError = void 0;
class FetchError extends Error {
    constructor(message) {
        super(message);
        this.name = "FetchError";
    }
}
exports.FetchError = FetchError;
class DataError extends Error {
    constructor(message) {
        super(message);
        this.name = "DataError";
    }
}
exports.DataError = DataError;
