const p1 = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
};

const p2 = async () => {
  console.log(19);
  return 20;
};

const temp = async () => {
  //   const a = await p1();
  //   console.log("tjesklrjfslkehl");
  //   const b = await p2();
  p1().then();
  console.log("dajlhwhdawjklh");
  p2().then();
};

temp();
