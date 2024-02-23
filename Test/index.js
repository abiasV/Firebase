  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getDatabase, ref, child, get, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCJVvBnaYKmU19tvQYZ9KS8WjQoEgi5bgI",
    authDomain: "http5214-347e3.firebaseapp.com",
    projectId: "http5214-347e3",
    storageBucket: "http5214-347e3.appspot.com",
    messagingSenderId: "103305012736",
    appId: "1:103305012736:web:1107f009b1bdd0488f1ae5",
    measurementId: "G-071K53G374"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const database = getDatabase();
  const messages = ref(database, '/messages');

  onValue(messages, (snapshot) => {
    // console.log(snapshot);
    const ul = document.getElementById("messages");
    ul.replaceChildren();
    
    snapshot.forEach((childSnapshot)=> {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      console.log(childKey);
      console.log(childData);

      const text = document.createTextNode(childData.message);
      const li = document.createElement("li");

      li.appendChild(text);
      ul.appendChild(li);

    })
  }, 
  {
    onlyOnce: false,
  });