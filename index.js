module.exports = function whisperspammer(mod) {
  ///
  let config = {};

  mod.command.add("w", async (...args) => {
    if (!args.length) return;
    let message = "";
    let target = args.shift();
    let count = args.shift();

    let wait = new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 50);
    });

    message = args.join(" ");
    // console.log(message);

    for (let i = 0; i < count; i++) {
      await wait;
      mod.toServer("C_WHISPER", 1, {
        target,
        message,
      });
    }
  });
};
