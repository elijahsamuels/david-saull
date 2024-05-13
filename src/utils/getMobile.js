import { UAParser } from "ua-parser-js";
const parser = new UAParser();

let userAgent = parser.getResult();
const {navigator} = window
const { mobile: navMobile} = navigator.userAgentData
const { innerHeight, innerWidth } = window;

const getMobile = () => {
  const { browser, device, os, ua } = userAgent;

  if (
    device.model === "iPhone" ||
    device.type === "mobile" ||
    os.name === "iOS" ||
    ua.includes("iPhone") ||
    browser.name.includes("mobile" ||
		!navMobile) ||
		innerWidth < 900
  ) {
    return true;
  }
  return false;
};

if (getMobile()) {
  console.log("mobile");
} else {
  console.log("not mobile");
}

export default getMobile;
