const advancedCheckbox = document.getElementById
("advancedToggle")
advancedCheckbox.addEventListener("change", ()=>{
    isAdvancedMode = advancedCheckbox.checked;
    updateBonusUi(isAdvancedMode)  
}         
)
function updateBonusUi(isActive) {
    const headerImg = document.querySelector(".header img");
    const ruleImgs = document.querySelectorAll(".rules img");
    const container = document.querySelector(".container");

    headerImg.src = isActive ? "assets/images/logo-bonus.svg" : "assets/images/logo.svg";
    headerImg.alt = isActive ? "Rock Paper Scissors Lizard Spock Logo" : "Rock Paper Scissors Logo";
    
    ruleImgs.forEach(img => {
        img.src = isActive ? "assets/images/image-rules-bonus.svg" : "assets/images/image-rules.svg";
    });

    container.classList.toggle("active-bonus", isActive);
}