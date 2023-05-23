//ASSINMENT OF CHAPTER NUMBER 43 TO 48


//NUMBER 01

// let link = document.querySelector('a')


// link.addEventListener('click',()=>{
//     alert("link")
//     console.log(link.textContent)
// })


//Number 02 

let mainImg  = document.querySelector('.mian')

let pic01 = mainImg.firstElementChild

let pic02 = mainImg.firstElementChild.nextElementSibling

// console.log(pic01)

// console.log(pic02)
// // console.log(mainImg.nthChild(1))

pic01.addEventListener('click',()=>{
    // alert("its the picture of normal B612 cammera")
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'its the picture of normal B612 camera',
        showConfirmButton: false,
        timer: 1500
      })
})


pic02.addEventListener('click',()=>{
    // alert("its the picture of an AI Art ")
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'its the picture of an AI Art ',
        showConfirmButton: false,
        timer: 1500
      })
})



//NUmber 03

// are available in seperate folder name todo only delete function

