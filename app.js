console.log("hello paras");
showNote();

let addBtn=document.getElementById("addBtn");
addBtn.addEventListener("click",function func(e){
    console.log("i am clicked");
    let addNote = document.getElementById("addNote");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if(notes==null){

        notesObj=[];

    }else{
        notesObj=JSON.parse(notes);
    }
//new feautures
    let myObj={
        myText:addNote.value,
        myTitle:addTitle.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addNote.value = "";
    addTitle.value = "";
    showNote();
});


    function showNote(){
    let notes = localStorage.getItem("notes");
    if(notes==null){

        notesObj=[];

    }else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach((element,index)=>{
            html+=` <div id="noteColl" class="card col-sm-3 m-3">
                        <div class="card-body">
                            <h5 class="card-title">Title - ${element.myTitle}</h5>
                            <p class="card-text">${element.myText}</p>
                            <button id="${index}" onclick="display(this.id)" type="button" class="btn btn-primary">Delete Note</button>
                        </div>
                    </div>`
    });
    let book = document.getElementById("book")
    if(notesObj.length!=0){
        book.innerHTML=html;
    }else{
        book.innerHTML="write something to see your notes";
    }  
};
//delete text function
function display(index){
    let delTxt = document.getElementById("delTxt");
       let notes = localStorage.getItem("notes");
        if(notes==null){
    
            notesObj=[];
    
        }else{
            notesObj=JSON.parse(notes);
        };
            notesObj.splice(index,1);       
            localStorage.setItem("notes",JSON.stringify(notesObj));
            showNote();
}
//serach function
let searchTxt=document.getElementById("searchTxt")
searchTxt.addEventListener("input",function(){
    let inputVal=searchTxt.value.toLowerCase();
    // console.log("input fired",inputVal);
    let noteColl=document.getElementsByClassName("noteColl");
    
    Array.from(noteColl).forEach((element)=>{
        let cardTxt= element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
       } else{
        element.style.display="none";
       }
    })     
});
















 
// console.log("Welcome to notes app. This is app.js");


// // If user adds a note, add it to the localStorage
// let addBtn = document.getElementById("addBtn");
// addBtn.addEventListener("click", function(e) {
//   let addNote = document.getElementById("addNote");
//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }
//   notesObj.push(addNote.value);
//   localStorage.setItem("notes", JSON.stringify(notesObj));
//   addNote.value = "";
// //   console.log(notesObj);
 
// });