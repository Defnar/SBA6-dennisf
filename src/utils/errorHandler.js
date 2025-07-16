"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataError = exports.FetchError = void 0;
//error if api fails to fetch data
class FetchError extends Error {
    constructor(message) {
        super(message);
        this.name = "FetchError";
    }
}
exports.FetchError = FetchError;
//class error for data mismatch types, such as number and string
class DataError extends Error {
    constructor(message) {
        super(message);
        this.name = "DataError";
    }
}
exports.DataError = DataError;
