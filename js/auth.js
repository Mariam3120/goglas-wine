// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    // 💡 ახალი, დაცული API გასაღები ჩასმულია აქ!
    apiKey: "AIzaSyBebXrLOTQ3MYtaNY9gg5OuOs0jPyDKXIc", 
    authDomain: "goglas-wine-acc47.firebaseapp.com",
    projectId: "goglas-wine-acc47",
    storageBucket: "goglas-wine-acc47.firebasestorage.app",
    messagingSenderId: "873836961968",
    appId: "1:873836961968:web:39c6f1b052ca23a5fcdb75"
};



document.getElementById('register-btn').addEventListener("click", register)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//register function 
async function register(){
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  
  // ძირითადი ვალიდაცია
  if (!email || !password) {
      console.error("Error: Email and password cannot be empty.");
      return;
  }

  try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      //  წარმატება: გამოიყენე console.log() ან UI-ის ელემენტი
      const userEmail = userCredential.user.email;
      
      // სწორი სინტაქსი
      console.log(`User registered successfully: ${userEmail}`);
      
  } catch(error){
      // შეცდომის დამუშავება
      console.error("Registration Failed:", error.code, error.message);
  }
}