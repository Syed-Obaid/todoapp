 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
 import { getDatabase,
          ref,
          set,
          remove, } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBo68WUhXy39rn7XEoevtwFb4sZ-oQlKSM",
   authDomain: "todoapp-203be.firebaseapp.com",
   projectId: "todoapp-203be",
   storageBucket: "todoapp-203be.appspot.com",
   messagingSenderId: "327439971409",
   appId: "1:327439971409:web:61fb14ab74b84d22977470",
   measurementId: "G-VVVXPVLDCZ"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
const db = getDatabase();




var mainlist = document.getElementById('mainlist');

function addElem(){
  var inp1 = document.getElementById('inp1');
    // var obj = {
    //     inp1: inp1.value,
    // };
    // obj.id = Math.random().toString().slice(2);
    // let reference = ref(db, `tasks/${obj.id}/`);
    // set(reference, obj);
    // console.log(obj);
  
    var a = document.createElement('LI');
    var b = document.createTextNode(inp1.value);

    a.appendChild(b);
    mainlist.appendChild(a);
    console.log(a);
    var delBtn = document.createElement('BUTTON');
    var delText = document.createTextNode('Delete');
    delBtn.appendChild(delText);
    a.appendChild(delBtn);
    


    var edtBtn = document.createElement('Button');
    var edtText = document.createTextNode('Edit');
    edtBtn.appendChild(edtText);
    a.appendChild(edtBtn);

    // mainlist.appendChild(a);

    delBtn.setAttribute('class','editing');
    delBtn.setAttribute('onclick','delbutton(this)');
    edtBtn.setAttribute('class','editing2');
    edtBtn.setAttribute('onclick','edtbutton(this)')
    // console.log(a);
}

// window.delbutton = function (element){
  function delbutton (element){
    element.parentNode.remove();
}
// window.edtbutton = function (element){
  function edtbutton (element){
  console.log(element.parentNode);
  element.parentNode.firstChild.nodeValue = prompt();

}
// window.deleteAll = function (){
  function edtbutton (element){
    mainlist.innerHTML = "";
    
}