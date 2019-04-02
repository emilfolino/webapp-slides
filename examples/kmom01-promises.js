function slowFunction () {
    return new Promise(function promiseHandler (resolve, reject) {
        setTimeout(function timer() {
            resolve("time is up");
        }, 1000);
    });
}

(async function () {
    var message = await slowFunction();
    console.log(message);
})();
