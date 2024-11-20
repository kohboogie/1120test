const video = document.getElementById('webcam');
const welcomeText = document.getElementById('welcome-text');
const nextButton = document.getElementById('next-button');

// URL에서 이름 가져오기
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');

// 이름이 있으면 텍스트에 반영
if (name) {
    welcomeText.innerHTML = `${name}, Follow the dot.<br>Inhale as it grows, exhale as it shrinks.`;
} else {
    welcomeText.innerHTML = `Follow the dot.<br>Inhale as it grows, exhale as it shrinks.`;
}

// Start webcam
async function startWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        video.play();
    } catch (error) {
        console.error("Webcam initialization failed:", error);
        alert("Unable to access webcam. Please check your permissions.");
    }
}

// Show "Next" button after 10 seconds
setTimeout(() => {
    nextButton.style.display = "block";
    nextButton.addEventListener('click', () => {
        window.location.href = "clean.html"; // 다음 페이지로 이동
    });
}, 10000); // 10초 후 버튼 표시

// Initialize webcam
startWebcam();




