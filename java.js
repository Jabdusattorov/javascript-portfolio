let r = Math.floor(Math.random() * 10) + 1; //random number

let input = prompt("1dan 10gacha bir sonni o'ylang")

// console.log("Men", r, "sonini o'ylagandim.", "six esa", input,"ni o'yladingiz");
console.log(`Men ${r} sonini o'ylagan edim, siz ${input} sonini yozdingiz`);

if(input = r){
    alert("Topdingiz");
}else if(input > r){
    alert("Katta son o'yladingiz")
}else if(input < r){
    alert("Kichik son o'yladingiz")
}