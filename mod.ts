function promiseWithResolvers<T>() {
    let resolve:(value:T)=>void = () => {}
    let reject:(reason:unknown)=>void = () => {}
    const promise = new Promise<T>((r, j) => { resolve = r, reject = j })
    return { promise, resolve, reject }
}

export class Gate<T> {

    promise:Promise<T>
    resolve:(value:T)=>void
    reject:(reason:unknown)=>void

    constructor() {
        const { promise, resolve, reject } = promiseWithResolvers<T>()
        this.promise = promise
        this.resolve = resolve
        this.reject = reject
    }

}