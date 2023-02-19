function isBeginOfMonth(arg) {
    if(arg < 7){
        return true;
    } else {
        return false;
    }
};
isBeginOfMonth(8);
// isBeginOfMonth(new Date().getDate());
// console.log(isBeginOfMonth(new Date().getDate()));

module.exports = {
    isBeginOfMonth
};


// const currentDataTime = new Promise(() => {
//     setTimeout(() => {
//        console.log(new Date());
//     }, 3000);  
// });