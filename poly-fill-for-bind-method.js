Function.prototype.mybind = function(...args) {
    const context = this;
    if(typeof context !== "function") {
        // if context is not a function raising a type error exception
        throw new TypeError(`${context}.bind is not a function`);
    }
    const params = args.slice(1); //return complete args without first element
    return function(...callingArgs) {
        context.apply(args[0], [...params, ...callingArgs]);
    }
}
