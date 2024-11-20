const firebaseConfig = {
    apiKey: "AIzaSyAg...",
    authDomain: "domestic-c3b45.firebaseapp.com",
    projectId: "domestic-c3b45",
    storageBucket: "domestic-c3b45.appspot.com",
    messagingSenderId: "634955558128",
    appId: "1:634955558128:web:1ea4cd6b7724df6490e635"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const firestore = firebase.firestore();

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const currentImage = document.getElementById("currentToolImage");

function switchTool(newTool) {
    currentImage.src = `image/${newTool}.png`;
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
