
/*
    - for catching errors in async functions
    - last argument in the func must be the "next" callback function
    - when an error occurres it will be thrown to the "next" function which 
        will deliver it to our global error handler
*/
module.exports = fn => {
    return (...args) => {
        const next = args[args.length - 1]
        fn(...args).catch(next)
    }
}