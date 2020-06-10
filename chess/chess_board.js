/**********绘制棋盘**********/
var str = '<table id ="chess_table" onclick="table_onclick(this.id)">';
//cellpadding 属性规定单元边沿与其内容之间的空白。
//cellspacing 属性规定的是单元之间的空间。
var off = true;
for (i = 0; i <= 7; i++) {
    str += "<tr>";
    for (j = 1; j <= 8; j++) {
        if (off) {
            off = !off;
            str += '<td class="td01" id = "chess_' + (i * 8 + j) + '" onclick="td_onclick(this.id)"></td>';
        }
        else {
            off = !off;
            str += '<td class="td02" id = "chess_' + (i * 8 + j) + '" onclick="td_onclick(this.id)"></td>';
        }
    }
    off = !off;
    str += "</tr>";
}
str += '</table>';
document.write(str);