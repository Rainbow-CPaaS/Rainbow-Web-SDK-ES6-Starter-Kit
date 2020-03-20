import rainbowSDK from "./rainbow-sdk.min.js";
import { AuthKeysNet, AuthKeysProd, AuthKeysSandbox } from "./AuthKeys.js";

window.addEventListener("DOMContentLoaded", event => {
  console.log("*** HELLO, WORLD! - Rainbow Web SDK ***");

  let onReady = function onReady() {
    console.log("[Hello World] :: On SDK Ready !");
  };

  let onLoaded = function onLoaded() {
    console.log("[Hello World] :: On SDK Loaded !");

    rainbowSDK
      .initialize(AuthKeysProd.applicationID, AuthKeysProd.applicationSecret)
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
