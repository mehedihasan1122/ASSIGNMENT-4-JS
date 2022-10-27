// 1. ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।


function radianToDegree(radian) {

    var radian = radian * 57.2958;
    return radian;
}

var convert = radianToDegree(10);
console.log(convert);



// 2.ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । 

var filename = 'rayhan.node.js';

function isJavaScriptFile(check) {
    if (filename.includes('.js')) {
        return true;

    }
    else {
        return false;
    }


}

var checkResult = isJavaScriptFile(filename);
console.log(checkResult);



// 3.ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 
// প্রতি লিটার ডিজেলের এর দাম – 114 টাকা

// প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 

// প্রতি লিটার অকটেনের এর দাম – 135 টাকা 
// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। 



function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {

    const diesePerLitre = 114;
    const petrolPerLitre = 130;
    const octanePerLitre = 135;

    const dieselprice = dieselQuantity * diesePerLitre;
    const petrolPrice = petrolQuantity * petrolPerLitre;
    const octanePrice = octaneQuantity * octanePerLitre;

    const totalPrice = dieselprice + petrolPrice + octanePrice;
    return totalPrice;



}

const totalPrice = oilPrice(0, 0, 1);
console.log(totalPrice);


// 4.একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে )  নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে । 



function publicBusFare(people) {

    const busSeat = 50;
    const carSeat = 11;

    const restForCar = people % busSeat;
    const restForPublicBus = restForCar % carSeat;

    const publicBusticketFee = restForPublicBus * 250;

    return publicBusticketFee;



}

const publicBusticketFee = publicBusFare(365);
console.log(publicBusticketFee);








// 5.তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।

const friend1 = {
    name: "rayhan",
    bondhu: "riyad"
};
const friend2 = {
    name: "riyad",
    bondhu: "rayhan"
};


function isBestFriend(x, y) {

    if (friend1.name == friend2.bondhu && friend2.name == friend1.bondhu) {
        return true;
    }
    else {
        return false;
    }

}

const friends = isBestFriend(friend1, friend2);
console.log(friends);




















