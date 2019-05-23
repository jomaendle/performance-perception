// please note,
// that IE11 now returns undefined again for window.chrome
// and new Opera 30 outputs true for window.chrome
// but needs to check if window.opr is not undefined
// and new IE Edge outputs to true now for window.chrome
// and if not iOS Chrome check
// so use the below updated condition
let isChromium = window.chrome;
let winNav = window.navigator;
let vendorName = winNav.vendor;
let isOpera = typeof window.opr !== "undefined";
let isIEedge = winNav.userAgent.indexOf("Edge") > -1;
let isIOSChrome = winNav.userAgent.match("CriOS");

if (isIOSChrome) {
    // is Google Chrome on IOS
    localStorage.setItem("isChrome", "true");
} else if(
    isChromium !== null &&
    typeof isChromium !== "undefined" &&
    vendorName === "Google Inc." &&
    isOpera === false &&
    isIEedge === false
) {
    // is Google Chrome
    localStorage.setItem("isChrome", "true");
} else {
    // not Google Chrome
    localStorage.setItem("isChrome", "false");

    if (navigator.userAgent.indexOf("Firefox") > 0) {
        localStorage.setItem("isFirefox", "true");
    }else {
        localStorage.setItem("isFirefox", "false");
    }
}