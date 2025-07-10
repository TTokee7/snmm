
// モーダル要素を取得
var modal50 = document.getElementById("Modal-50F");
// モーダルを開くボタンを取得
var open50Btn = document.getElementById("open50fModal");
// モーダルを閉じるボタンを取得
var close50Btn = document.getElementById("close50fModal");
var nextBtn = document.getElementById("nav");
var tc50f = document.getElementById("text-content-50f");


// モーダルを開くボタンがクリックされた時にモーダルを表示
open50Btn.onclick = function () {
    modal50.style.display = "block"; // モーダルのdisplayスタイルを"block"にして表示
    close50Btn.style.display = "block";
    nextBtn.style.display = "none";
    open50Btn.style.display = "none";
    tc50f.style.display = "none";
}

// モーダルを閉じるがクリックされた時にモーダルを非表示
close50Btn.onclick = function () {
    modal50.style.display = "none"; // モーダルのdisplayスタイルを"none"にして非表示
    nextBtn.style.display = "flex";
    open50Btn.style.display = "block";
    tc50f.style.display = "block";
}

var modalcr = document.getElementById("ModalCr");
var openCrBtn = document.getElementById("openCrModal");
var closeCrBtn = document.getElementById("closeModalCr");
var nextBtn = document.getElementById("nav");
var tcCr = document.getElementById("text-content-cr");

openCrBtn.onclick = function () {
    modalcr.style.display = "block";
    closeCrBtn.style.display = "block";
    nextBtn.style.display = "none";
    openCrBtn.style.display = "none";
    tcCr.style.display = "none";

}

closeCrBtn.onclick = function () {
    modalcr.style.display = "none";
    nextBtn.style.display = "flex";
    openCrBtn.style.display = "block";
    tcCr.style.display = "block";

}

var modalcs = document.getElementById("ModalCs");
var openCsBtn = document.getElementById("openCsModal");
var closeCsBtn = document.getElementById("closeModalCs");
var nextBtn = document.getElementById("nav");
var tcCs = document.getElementById("text-content-cs");

openCsBtn.onclick = function () {
    modalcs.style.display = "block";
    closeCsBtn.style.display = "block";
    nextBtn.style.display = "none";
    openCsBtn.style.display = "none";
    tcCs.style.display = "none";
}

closeCsBtn.onclick = function () {
    modalcs.style.display = "none";
    nextBtn.style.display = "flex";
    openCsBtn.style.display = "block";
    tcCs.style.display = "block";

}

// open 50F modal
open50Btn.onclick = function () {
    modal50.style.display = "block";
    setTimeout(() => {
        modal50.classList.add("show");
    }, 10); // ブラウザにローディング時間あげる
    close50Btn.style.display = "block";
    nextBtn.style.display = "none";
    open50Btn.style.display = "none";
    tc50f.style.display = "none";
}

// close
close50Btn.onclick = function () {
    modal50.classList.remove("show");
    setTimeout(() => {
        modal50.style.display = "none";
    }, 300); // 300ms　CSS動画時間と一致
    nextBtn.style.display = "flex";
    open50Btn.style.display = "block";
    tc50f.style.display = "block";
}

// open 教室 modal
openCrBtn.onclick = function () {
    modalcr.style.display = "block";
    setTimeout(() => {
        modalcr.classList.add("show");
    }, 10);
    closeCrBtn.style.display = "block";
    nextBtn.style.display = "none";
    openCrBtn.style.display = "none";
    tcCr.style.display = "none";
}

// close
closeCrBtn.onclick = function () {
    modalcr.classList.remove("show");
    setTimeout(() => {
        modalcr.style.display = "none";
    }, 300);
    nextBtn.style.display = "flex";
    openCrBtn.style.display = "block";
    tcCr.style.display = "block";
}

// open コンビニ modal
openCsBtn.onclick = function () {
    modalcs.style.display = "block";
    setTimeout(() => {
        modalcs.classList.add("show");
    }, 10);
    closeCsBtn.style.display = "block";
    nextBtn.style.display = "none";
    openCsBtn.style.display = "none";
    tcCs.style.display = "none";
}

// close
closeCsBtn.onclick = function () {
    modalcs.classList.remove("show");
    setTimeout(() => {
        modalcs.style.display = "none";
    }, 300);
    nextBtn.style.display = "flex";
    openCsBtn.style.display = "block";
    tcCs.style.display = "block";
}