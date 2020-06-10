/**********开局**********/
for (i = 1; i <= 64; i++) {
    chess_[i] = document.getElementById("chess_" + i + "");
    //chess_[i].setAttribute("id", "chess_" + i + "");
}
for (i = 1; i <= 8; i++) {
    chesspiece_[i] = document.createElement("img");
    chesspiece_[i].setAttribute("id", "black_chesspiece_" + i + "");
    chesspiece_[i].setAttribute("src", "Resources/black_chesspiece_" + i + ".png");
    chesspiece_[i].setAttribute("onclick", "clickImage(this.id)");
}
for (i = 9; i <= 16; i++) {
    chesspiece_[i] = document.createElement("img");
    chesspiece_[i].setAttribute("id", "black_bing_" + (i-8) + "");
    chesspiece_[i].setAttribute("src", "Resources/black_bing.png");
    chesspiece_[i].setAttribute("onclick", "clickImage(this.id)");
}
for (i = 49; i <= 56; i++) {
    chesspiece_[i] = document.createElement("img");
    chesspiece_[i].setAttribute("id", "white_bing_" + (i-48) + "");
    chesspiece_[i].setAttribute("src", "Resources/white_bing.png");
    chesspiece_[i].setAttribute("onclick", "clickImage(this.id)");
}
for (i = 57; i <= 64; i++) {
    chesspiece_[i] = document.createElement("img");
    chesspiece_[i].setAttribute("id", "white_chesspiece_" + (i-56) + "");
    chesspiece_[i].setAttribute("src", "Resources/white_chesspiece_" + (i-56) + ".png");
    chesspiece_[i].setAttribute("onclick", "clickImage(this.id)");
}
function button_onclick() {//点击开始按钮将棋子按初始位置放入棋盘
    //alert("good luck!");
    for (i = 1; i <= 16; i++) {
        var object = chess_[i].appendChild(chesspiece_[i]);
    }
    for (i = 49; i <= 64; i++) {
        var object = chess_[i].appendChild(chesspiece_[i]);
    }
    document.getElementById("whogo").innerText = "白";
}
