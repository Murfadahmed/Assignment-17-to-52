// ARRAY OF LOOPS "ASSIGNMENT 17 TO 20"

// NUMBER ONE 
// let multidimensional = ["murfad",["malik",["malik ka dusra array",["malik ka tesra"]]]]
// console.log(multidimensional[1][1][1][0 ])

//NUMBER TWO 

// let multiArray = [0,1,2,3,[1,0,1,2,[2,1,0,1]]]
// console.log(multiArray)
// console.log(multiArray[4])
// console.log(multiArray[4][4])
//     document.write(`${multiArray[0]} <br> ${multiArray[4]} <br>  ${multiArray[4][4]} <br>`)


//number threee


// var m = 1
// for(m; m <= 10 ; m++)
// {
//     console.log(m)
// }

//number four

// var num01 = +prompt("enter table number ")
// var num02 = +prompt("enter index number ")
//  console.log(num01 * num02)


//  for(var t =0;t < num02 +1;t++)
//  {
//     document.write(`${num01} x ${t} = ${num01*t}`)
//  }

//number five


// let friut = ["mango","banana","apricot","papaya","waterMelon"]

// for(var a=0; a < friut.length;a++)
// {
//     console.log(friut[a])
//     console.log(`${friut[a]} is at index of ${a}`)
// }


//number six

// for (var a = 0; a <= 20; a++) {
//     let num = a
//     if(num%2==0)
//     {
//         console.log(num + " is an even number")
//     }
// };
// for (var a = 1; a <= 20; a++) {
//     let num = a
//     if(num%2==1)
//     {
//         console.log(num + " is an odd number")
//     }    
// };

// for (var b = 20; b > 0  ; b--) {
//     console.log(b + " it is the reverse form")
// }


//number 7

// let userAsk = prompt("which flavour do you want to eat,")

// let productArray = ["icecream","himcream","chocbar","kingkulfa","pista&lava","vanilla","chocolato crave","blueBerry"]

// var included = productArray.includes(userAsk)
// if(included === true)
// {
//     console.log(`yes ${userAsk} is available at the cabinet of ${productArray.indexOf(userAsk)}`)
// }
// else{
//     console.log(` ${userAsk} abhi nhi hai kal ayega `)
// }
// console.log(included)    


//NUMBER 08


// let getSmallNum = (largeNumber) =>largeNumber.reduce((smallNumber, num)=>Math.min(smallNumber , num) )

// console.log(getSmallNum(largeNumber))

// let samllNumber = [16,67,59,1,19,45,65,87,65,74,0,99.5];

// let deltasmall = (nn)=>nn.reduce((num,num2)=> Math.min(num,num2))

// console.log(deltasmall(samllNumber))

//number 09

// let largeNumber = [16,67,59,1,19,45,65,87,65,74,0,99.5];

// let alpha = (nn)=>nn.reduce((num,num2)=> Math.max(num,num2))

// console.log(alpha(largeNumber))

//number 10

// let uesr = prompt("write the random number !","to generate its multiplication on 100")


// function calculate(number){
//     for(var n=0;n<=20;n++)
//     {
//         let table = `${number*n}`
//         console.log(table)
        
//     }
// }
// calculate(uesr)