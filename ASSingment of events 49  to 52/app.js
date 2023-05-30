            // numnber one & two

            // form and read more button


let form = document.querySelector('.signup')
let art = document.querySelector('.article')
let buttun = document.querySelector('.btn')

// console.log(form.children[0].children[5].children[1])
// console.log(form.children[0].children[6])



buttun.addEventListener('click',()=>{
    
    // for(var f=1;f<6;f++){console.log((form.children[0].children[f].children[1]).value)}
            art.innerHTML = 
            `<p>name:${(form.children[0].children[1].children[1]).value}</p>
            <p>address:${(form.children[0].children[2].children[1]).value}</p>
            <button class="readMore">Read more</button>
            `
            let readMore = document.querySelector('.readMore')
            readMore.addEventListener('click',()=>{
                art.innerHTML = `<p>name:${(form.children[0].children[1].children[1]).value}</p>
                <p>address:${(form.children[0].children[2].children[1]).value}</p>
                <p>Phone Number:${(form.children[0].children[3].children[1]).value}</p>
                <p>password:${(form.children[0].children[4].children[1]).value}</p>
                 <p>Email:${(form.children[0].children[5].children[1]).value}</p>`
            })
            // console.log(readMore)
    })






//////////*********** TODO list started */

//number three


let input = document.querySelector('#inputList')

let addBtn = document.querySelector('.addBtn')

let item =document.querySelector('.item ul')


addBtn.addEventListener('click',()=>{
    
    if(input.value != "")
    {
        add()
    }
    
    
})



function add (){
    
    let list = document.createElement('li')


        list.textContent = input.value
        
         item.appendChild(list)

        const mySpan =  document.createElement('button')

        mySpan.innerHTML = "delete";

        mySpan.setAttribute('class','delete')

        // console.log(mySpan)
        
        list.appendChild(mySpan);
        
        let Edit = document.createElement('button')

        
        Edit.textContent = "EDIT";
        
        Edit.setAttribute('class','edited')
        
        list.appendChild(Edit)

        // console.log(Edit)

        input.value = ""
        
        edit(list)
        Deleted()   
        
        
        
    }
    
    function edit (l){
        let Editez = document.querySelectorAll('.edited')
        
        for(let e=0; e < Editez.length;e++)
        {
            
            Editez[e].addEventListener('click',()=>{

                // input.value = l.textContent
                console.log(l.textContent)
            })
         }
    }
    function Deleted (){

        const close = document.querySelectorAll('.delete')


     for(let i=0; i<close.length ;i++)
     {
         close[i].addEventListener('click',()=>{
             
            //  console.log(close[i].nextElementSibling)


             close[i].parentElement.remove()
            //  close[i].parentElement.style.display ="none"
            //  close[i].parentElement.style.visibility ="hidden"

            })
        }
    }









































































        // let list = document.createElement('li')
        
        // list.textContent = input.value
        
        //  item.appendChild(list)
        
        //  const mySpan =  document.createElement('span')
        
        //  mySpan.innerHTML = "x"
        
        // //  console.log(mySpan)
        
        //  list.appendChild(mySpan)
        
        //  const close = document.querySelectorAll('span')
        
        
        //  for(let i=0; i<close.length ;i++)
        //  {
        //      close[i].addEventListener('click',()=>{
        //          // console.log(i)
        //          console.log(close[i])
        //          close[i].parentElement.style.display ="none"
        //      })
        //  }
        //  input.value = ""