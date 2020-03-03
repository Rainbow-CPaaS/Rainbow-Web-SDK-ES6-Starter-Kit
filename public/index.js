import rainbowSDK from "./rainbow-sdk.min.js";

window.addEventListener("DOMContentLoaded", event => {
  console.log("*** HELLO, WORLD! - Rainbow Web SDK ***");

  console.log(rainbowSDK);
  let onReady = function onReady() {
    console.log("[Hello World] :: On SDK Ready !");
  };

  let onLoaded = function onLoaded() {
    console.log("[Hello World] :: On SDK Loaded !");

    rainbowSDK
      .initialize("AppID", "AppSecret")
      .then(() => {
        console.log("Rainbow SDK is initialized!");
      })
      .catch(err => {
        console.log("Something went wrong with the SDK.", err);
      });
  };
  document.addEventListener(rainbowSDK.RAINBOW_ONREADY, onReady);

  document.addEventListener(rainbowSDK.RAINBOW_ONLOADED, onLoaded);

  rainbowSDK.start();
  rainbowSDK.load();
});
