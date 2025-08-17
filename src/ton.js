import { TonConnect } from "@tonconnect/sdk";

let instance;
export function getTon() {
  if (!instance) {
    instance = new TonConnect({
      manifestUrl: `${window.location.origin}/tonconnect-manifest.json`
    });
  }
  return instance;
}