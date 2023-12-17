const promise1 = new Promise((_, rej) => {
  setTimeout(function timeoutInsidePromise1() {
    rej("promise1 rejected");
  }, 0);
});

const promise2 = new Promise(function (res) {
  setTimeout(function timeoutInsidePromise2() {
    promise1
      .then(console.log)
      .catch((e) => {
        console.log(e);
        return 1000;
      })
      .then((v) => {
        console.log(v);
      })
      .catch(() => console.log("error"));
  }, 0);
  console.log("random code");
});
