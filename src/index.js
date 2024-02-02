 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getFirestore, collection, addDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
alert("hola")
const firebaseConfig = {
  apiKey: "AIzaSyAsJr3xWvlxMf2u629eXhSzQmOvVMUIEHg",
  authDomain: "carlitos-sandbox.firebaseapp.com",
  projectId: "carlitos-sandbox",
  storageBucket: "carlitos-sandbox.appspot.com",
  messagingSenderId: "1091870248006",
  appId: "1:1091870248006:web:accde58682225f83158e47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

//gets the db from Firestore project
const db = getFirestore(app)

//create  a reference variable to the collection
const cityCol = collection(db, "cities")



const addCityFrom = document.querySelector("#addCity")

addCityForm.addEventListener("submit",(event)=>{
  event.preventDefault()
  const tempCity = {
   city: addCityForm.cityName.value,
   state: addCityForm.stateName.value,
   region: addCityForm.regionName.value
  }
})

addDoc(cityCol, tempCity)
.then((doc)=>{
  console.log(doc)
})
.catch((e)=>{
  console.log(e)
})



console.log("check this is index.js")