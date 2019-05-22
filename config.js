/**
 * This section is for gloabl variables and local storage initialization
 */

let indexTimes = {
    initialDelay: 2500,
    textDelay: 1500,
    imagesDelay: 2500,
    transitionToDetails: 1000
}

let detailsTimes = {
    loadReviewsAndSuggestions: 2000,
    description: 1000
}

let personalTimes = {
    transitionToConfirm: 2000
}

let confirmTimes = {
    transitionToCheckOut: 15000
}

let times = {
    short: 1500,
    long: 4500,
    sliderShow: 600,
    sliderHide: 400,
    sliderLoadShort: 500,
    sliderLoadLong: 3500 
}


let iPhone7Text = "iPhone 7 features a 12MP camera with 4K video and optical image stabilization, a 4.7-inch Retina HD display with wide color gamut and 3D Touch, A10 Fusion chip for high performance, great battery life, and water and dust resistance. And with iOS 12 - the most advanced mobile operating system - you'll have powerful new tools that make iPhone more personal than ever.";
let iPhone8Text = "iPhone 8 features an all-glass design and an aerospace-grade aluminum band. Charges wirelessly. Resists water and dust. 4.7-inch Retina HD display with True Tone. 12MP camera with an advanced image signal processor. Powered by the A11 Bionic chip. Supports augmented reality experiences in games and apps. And iOS 12 - the most advanced mobile operating system - with powerful new tools that make iPhone more personal than ever.";
let iPhoneXRText = "iPhone Xr features the most advanced LCD in a smartphone - a 6.1-inch Liquid Retina display with industry-leading color accuracy and an innovative backlight design that allows the screen to stretch into the corners. Six stunning new finishes. Advanced Face ID lets you securely unlock your iPhone, log in to apps, and pay with just a glance. The A12 Bionic chip with next-generation Neural Engine uses real-time machine learning to transform the way you experience photos, gaming, augmented reality, and more. A breakthrough 12MP camera system with Portrait mode, Portrait Lighting, enhanced bokeh, and all-new Depth Control. Water resistance. And iOS 12 - the most advanced mobile operating system in the world - with powerful new tools that make iPhone more personal than ever.";
let iPhoneXSText = "iPhone Xs features a 5.8-inch Super Retina display with custom-built OLED panels for an HDR display that provides the industry's best color accuracy, true blacks, and remarkable brightness. Advanced Face ID lets you securely unlock your iPhone, log in to apps, and pay with just a glance. The A12 Bionic chip with next-generation Neural Engine uses real-time machine learning to transform the way you experience photos, gaming, augmented reality, and more. A breakthrough 12MP dual-camera system takes your portraits to the next level with Portrait mode, Portrait Lighting, enhanced bokeh, and all-new Depth Control. Water resistance. And iOS 12 - the most advanced mobile operating system - with powerful new tools that make iPhone more personal than ever.";
let iPhoneXSMaxText = "Welcome to the big screens. Super Retina displays on iPhone XS Max deliver the most accurate color in the industry, HDR, and true blacks. Even faster Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough dual-camera system. Straight Talk iPhone XS Max is everything you love in an iPhone. Super Retina HD display all-screen OLED multi-touch display, 12MP wide-angle and telephono cameras 7MP TrueDepth camera, Face ID, Bionic chip with next-gen Neural Engine, 2 meters - Water resistant for 30 minutes Wireless charging iOS 12";
let iPhoneXText = "iPhone X 64GB on Total Wireless, Space Gray features an all-screen design with a 5.8-inch Super Retina HD display with HDR and True Tone. Designed with the most durable glass ever in a smartphone and a surgical grade stainless steel band. Charges wirelessly. Resists water and dust. 12MP dual cameras with dual optical image stabilization for great low-light photos. TrueDepth camera with Portrait selfies and new Portrait Lighting. Face ID lets you unlock and use Apple Pay with just a glance. Powered by A11 Bionic, the most powerful and smartest chip ever in a smartphone. Supports augmented reality experiences in games and apps. With iPhone X, the next era of iPhone has begun.";

localStorage.setItem("iPhone7", iPhone7Text);
localStorage.setItem("iPhone8", iPhone8Text);
localStorage.setItem("iPhoneXR", iPhoneXRText);
localStorage.setItem("iPhoneXS", iPhoneXSText);
localStorage.setItem("iPhoneXSMax", iPhoneXSMaxText);
localStorage.setItem("iPhoneX", iPhoneXText);

/**
 * Definition of metrics that are collected during the test
 * 
 * index.html: indexMeasures
 *      - [0]: Time when DOM is loaded
 *      - [1]: Time when content fully available
 *      - [2]: Time when user clicked on item
 * details.html: detailsMeasures
 *      - [0]: Time when DOM is loaded
 *      - [1]: Time when content is fully available
 *      - [2]: Time when user clicked on buy button
 * personal.html: personalMeasures
 *      - [0]: Time when DOM is loaded
 *      - [1]: Time when user clicks "Confirm" button
 *      - [2]: Amount of clicks done by user on button "Confirm"
 * confirm.html: confirmMeasures
 *      - [0]: Time when DOM is loaded
 *      - [1]: Time when user clicks "Buy" button
 *      - [2]: Amount of clicks done by user on button "Buy"
 * checkout.html: checkoutMeasures
 *      - [0]: Time when DOM is loaded
 *      - [1]: Time when user clicks buy button
 */




/**
 * This section provides globally demanded functions
 */

function redirectTo(location){
    window.location=location;
}

function loadImages(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("here2")
            let images = document.getElementsByClassName("product-image");
            Array.from(images).forEach(element => {
                element.style.visibility = "visible";
            });
            resolve(performance.now())
        }, indexTimes.imagesDelay)
    });
}

function saveMetricsToLocalStorage(values, page) {
    let times = [];
    values.forEach((e) => {
        times.push(e.toFixed(3))
    })
    localStorage.setItem(page+"Measures", times);
    console.log(localStorage.getItem(page+"Measures"))
}

function setOriginLocation(version){
    localStorage.setItem("origin", version)
}

function hideImageSekeleton() {
    let imageSkeletons = document.getElementsByClassName("image-loading-skeleton");
    Array.from(imageSkeletons).forEach(element => {
        element.style.visibility = "hidden";
    });
}

function hideTextSkeleton(){
    let loadingLines = document.getElementsByClassName("text-input__loading--line");
    Array.from(loadingLines).forEach(element => {
        element.style.visibility = "hidden";
    });
}

function hideTextSkeletonDisplay(){
    let loadingLines = document.getElementsByClassName("text-input__loading--line");
    Array.from(loadingLines).forEach(element => {
        element.style.display = "none";
    });
}