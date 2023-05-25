//ASSINMENT OF CHAPTER NUMBER 43 TO 48


//NUMBER 01

let link = document.querySelector('a')


link.addEventListener('click',()=>{
    alert("link")
    console.log(link.textContent)
})
  

//Number 02 

// let mainImg  = document.querySelector('.mian')
// let pegam  = document.querySelector('.pegameirsaART')
//  console.log(pegam)

// let pic01 = mainImg.firstElementChild

// let pic02 = mainImg.firstElementChild.nextElementSibling

// console.log(pic01)

// console.log(pic02)
// // console.log(mainImg.nthChild(1))

// pic01.addEventListener('click',()=>{
//     // alert("its the picture of normal B612 cammera")
//     Swal.fire({
//         position: 'top-end',
//         icon: 'success',
//         title: 'its the picture of normal B612 camera',
//         showConfirmButton: false,
//         timer: 1500
//       })
// })


// pic02.addEventListener('click',()=>{
//     // alert("its the picture of an AI Art ")
//     Swal.fire({
//         position: 'top-end',
//         icon: 'success',
//         title: 'its the picture of an AI Art ',
//         showConfirmButton: false,
//         timer: 1500
//       })
// })



//NUmber 03

// are available in seperate folder name todo only delete function

// let table = document.querySelectorAll('.table01 tr')
// for (var i =0;i<table.length ; i++)
// {
//   console.log(table[i].children[i])
// }
// console.log(table.length)
// console.log(table)

// Number 04
image01 = document.querySelector('.image01')
image02 = document.querySelector('.image02')
// console.log(image01)
// console.log(image02);
  function image01func (){
    image01.src  = image02.src
    image02.src  = 'image/unblurpi02.jpg'
  }
  function image01func02 (){
    image01.src  = 'image/unblurpi02.jpg'
    image02.src  = 'image/Young man with short, ash blond hair.png'
    // console.log("mmmm")
  }


  ///number 05 


  let headEdit = document.querySelector('.head')

  let increas = document.querySelector('.Btninc')

  let decreas = document.querySelector('.Btndec')
      let count = 0;
      
      increas.addEventListener('click',()=>{
        count++;
        headEdit.textContent = count
      })
      decreas.addEventListener('click',()=>{
        count--;
        headEdit.textContent = count
        // console.log(count)
  })