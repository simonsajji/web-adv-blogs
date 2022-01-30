// OOPs Approach ES6

// ------------------------- varible declarations--------------------------
const add_btn = document.querySelector('.add-btn')
const model = document.querySelector('.modal')
const hide_modal = document.querySelector('.hide-modal-btn')
const book_title= document.querySelector('.book-title')
const add_book_btn=document.querySelector('.add-book-btn')
const container = document.querySelector('.container')
let delete_keys = document.querySelectorAll('.cross-btn')
let tarea_content=document.getElementById("tarea");
let update=document.querySelectorAll(".update");
const id_value=1
let book_ctn;

let books=[];
// -------------------------END OF variable declaration-------------------------

// -----------------------------classes-------------------------------
class B{

    setBooks(){
        if(localStorage.getItem("books1")){
            books = JSON.parse(localStorage.getItem("books1"))
            console.log(books);
    
        }
        
        this.BuildUi(books)
    }

    static delete_book_from_local(bname){

        localStorage.getItem("books")
        books = JSON.parse(localStorage.getItem("books1"));
        for(let i=0;i<books.length;i++){
            if(books[i].title==bname){
    
     
                 const index = books.indexOf(books[i]);
                 if (index > -1) {
                     books.splice(i, 1); // 2nd parameter means remove one item only
     
                 }
                localStorage.setItem("books1",JSON.stringify(books))
                 
     
            }
     
        }
        
     
        
     
     
     }
    static update_book_from_local(bname,t_content){

        books = JSON.parse(localStorage.getItem("books1"));
        for(let i=0;i<books.length;i++){
            if(books[i].title==bname){

                books[i].descr=t_content;
             
    
                localStorage.setItem("books1",JSON.stringify(books))
                 // console.log(localStorage.getItem("books1"))
     
            }
     
        }
        
     
        
     
     
     }

     

    BuildUi(books){

        container.innerHTML="";
        books.forEach((book)=>{
            book_ctn = document.createElement('div')
            book_ctn.classList.add('book')
            const book_name = document.createElement('h2')
            book_name.classList.add("book-name")
            book_name.innerText=book.title;
            let update=document.createElement("button");
            update.textContent="UPDATE";
            update.classList.add("update");
            update.setAttribute('id',Math.floor(Math.random() * 100) + 1);

            book_name.appendChild(update);
    
            const icon = document.createElement('img')
            icon.classList.add("cross-btn")

    
            icon.setAttribute('id',Math.floor(Math.random() * 100) + 1)
            icon.setAttribute('src',"cross.png")

            let description=document.createElement("div");
            description.classList.add("description");
            let tarea=document.createElement("textarea");
            tarea.classList.add("tarea");
            tarea.value=book.descr;
            description.appendChild(tarea);


           
            book_ctn.append(icon);
            book_ctn.append(book_name);
            book_ctn.append(description);
            container.append(book_ctn);

           
            // books.push(book);
        })
        delete_keys = document.querySelectorAll('.cross-btn')
        console.log(delete_keys);
        delete_keys.forEach(function(key){

            console.log(key);


            key.addEventListener('click',function(event){
                // console.log(event.target.classList[0])
                console.log(event.srcElement.id)
                let id= event.srcElement.id;
                let inner=document.getElementById(id);
                let bname=inner.parentNode.querySelector('.book-name').textContent;
                let t_content=inner.parentNode.querySelector('.tarea').value;
                bname=bname.substring(0, bname.length - 6);

                console.log(bname,t_content);
                B.delete_book_from_local(bname);
            
              
            
                inner.parentNode.parentNode.removeChild(inner.parentNode);
                
                
            
                console.log("clicked")
            })
    
        })


        // Update k is clicked
            update=document.querySelectorAll(".update");
            console.log(update);

            update.forEach(function(key){

                key.addEventListener("click",function(event){
                    console.log(event.srcElement.id)
                    let id= event.srcElement.id;
                    let inner=document.getElementById(id);
                    let bname=inner.parentNode.parentNode.querySelector('.book-name').textContent;
                    let t_content=inner.parentNode.parentNode.querySelector('.tarea').value;
                    bname=bname.substring(0, bname.length - 6);
                    console.log(bname);
                    console.log(t_content);
                    books.forEach((bk)=>{
                        if(bk.title==bname){
                            bk.descr=t_content;
                        }
                    })
                    B.update_book_from_local(bname,t_content);
                
                    
                    
                
                    console.log("clicked update")
                    // console.log(books);

                })

            })

        
    }


    fetchBookTitle(event){
    

        // event.preventDefault();
        
        const book ={
            title:book_title.value,
            descr:" "
        }
        books.push(book)
        console.log(books);
        localStorage.setItem("books1",JSON.stringify(books))
        console.log(localStorage.getItem("books1"));
        setBooks();
        book_title.value="" ;
        
        
    }

    
     
     // let books=[];
     showModal(){
          model.classList.add('show-modal')  
     }
     hideModal(){
         model.classList.remove('show-modal')
     }
     



}


// -----------------------------END of classes-------------------------------


// Creating object of class and calling methods

let obj_b=new B();
// here the everything should be rendered including the Localstorage items..

obj_b.setBooks();  // 1st Function to be called.

// ---------------------------------------------------------------------





// the eventlistiners

add_book_btn.addEventListener('click',obj_b.fetchBookTitle);
hide_modal.addEventListener('click',obj_b.hideModal);
add_btn.addEventListener('click',obj_b.showModal);



// console.log(books);