export class Gate<T> {

    promise:Promise<T>
    resolve:(value:T)=>void
    reject:(reason:unknown)=>void

    constructor() {
        const { promise, resolve, reject } = Promise.withResolvers<T>()
        this.promise = promise
        this.resolve = resolve
        this.reject = reject
    }

}