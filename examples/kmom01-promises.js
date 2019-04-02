function slowFunction () {
    setTimeout(function timer() {
        console.log("time is up");
    }, 1000);
}

slowFunction();
