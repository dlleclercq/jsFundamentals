let = myName = "David"
let = friendName = "Dean"
    console.log(myName.length, friendName.length)

if (myName.length > friendName.length) {
    console.log(myName, "is longer than", friendName, "by:", myName.length-friendName.length, "letter(s)!")
} else if (myName.length == friendName.length){
    console.log("Our names are the same length!")
} else {
    console.log("Dean's name is longer than mine by:", friendName.length-myName.length, "letter(s)!")
}

// console.log(friendName, "is shorter than", myName, "by:", myName.length-friendName.length, "letter(s)!")

let nameDebate = (myName.length > friendName.length) ? (`${myName} is bigger by: ${myName.length-friendName.length} letter(s)!`) : (friendName.length>myName.length) ? (`${friendName} is bigger by: ${friendName.length-myName.length} letter(s)!`) : ("Our names are the same length!")
console.log(nameDebate)