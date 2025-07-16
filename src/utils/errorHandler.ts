
//error if api fails to fetch data
export class FetchError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "FetchError";
    }
}

//class error for data mismatch types, such as number and string
export class DataError extends Error{
    constructor(message: string) {
        super(message);
        this.name = "DataError"
    }
}