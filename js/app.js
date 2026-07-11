// =============================
// KisanConnect App
// =============================

function showScreen(screenId){
    document.querySelectorAll(".screen").forEach(screen=>{
        screen.classList.remove("active");
    });
    
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add("active");
    } else {
        console.error("Screen ID not found: " + screenId);
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    // 1. Show the splash screen on startup
    showScreen("screenSplash");

    // 2. Make the Start button work!
    const startBtn = document.getElementById("startBtn");
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            showScreen("screenLanguage"); // Moves to the Select Language screen
        });
    }
});