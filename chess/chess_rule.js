//棋盘被点击触发
function table_onclick(table_id) {
    if (Win == false) {
        tableId = table_id;
        td_id[1] = document.getElementById("chess_board_information").innerText;    //棋格id
        td_num[1] = document.getElementById("chess_td_num").innerText;  //棋格序号
        who_go = document.getElementById("whogo").innerText;
        e1 = document.getElementById(td_id[1]);
        img1 = e1.getElementsByTagName("img");
        if ((img1[0] != undefined)) {//判断棋格中是否有棋子
            chess_judge(img1[0].id);  //对选择的棋子进行判断
            chess_color_[1] = document.getElementById("chess_color").innerText;//获得第一次点击的棋子的颜色
            if (who_go == "白") {//白方下棋
                WhiteMove();
            }
            if (who_go == "黑") {//黑方下棋
                BlackMove();
            }
        }
    }
}

//白棋移动
function WhiteMove() {
    if (who_go == chess_color_[1]) {
        //document.getElementById("whogo").innerText = "白";
        document.getElementById(tableId).onclick = function () { GetNextId() };
    }
}

//黑棋移动
function BlackMove() {    
    if (who_go == chess_color_[1]) {
        //document.getElementById("whogo").innerText = "黑";
        document.getElementById(tableId).onclick = function () { GetNextId() };
    }    
}

//走棋判断
function GetNextId() {
    td_id[2] = document.getElementById("chess_board_information").innerText;
    e2 = document.getElementById(td_id[2]);
    img2 = e2.getElementsByTagName("img");
    td_num[2] = document.getElementById("chess_td_num").innerText;
    if (td_id[1] != td_id[2]) {        
        if (img2[0] == undefined) {
            document.getElementById("chess_color").innerText = "";
            chess_color_[2] = document.getElementById("chess_color").innerText;
            temp = true;    //传参，告诉MoveRule函数，第二次点击的棋格是否为空
            MoveRule(img1[0].id, temp);
            if (img1[0] == undefined) {
                if (who_go == "黑") {
                    document.getElementById("whogo").innerText = "白";
                }
                else if (who_go == "白") {
                    document.getElementById("whogo").innerText = "黑";
                }
                document.getElementById("chess_information").innerText = "";
                document.getElementById(tableId).onclick = function () { table_onclick(tableId) };
            }
        }
        else {
            temp = false;
            chess_judge(img2[0].id);
            chess_color_[2] = document.getElementById("chess_color").innerText;
            if (chess_color_[1] == chess_color_[2]) {
                document.getElementById(tableId).onclick = function () { table_onclick(tableId) };
            }
            else {
                MoveRule(img1[0].id, temp);
                if (img1[0] == undefined) {
                    if (who_go == "黑") {
                        document.getElementById("whogo").innerText = "白";
                    }
                    else if (who_go == "白") {
                        document.getElementById("whogo").innerText = "黑";
                    }
                    document.getElementById("chess_information").innerText = "";
                    document.getElementById(tableId).onclick = function () { table_onclick(tableId) };
                }
            }
        }
    }
}

//棋格信息
function td_onclick(td_id) {//棋格信息
    //alert("td_click");
    document.getElementById("chess_board_information").innerText = td_id;
    //alert(chess_[1].id);
    for (i = 1; i <= 64; i++) {
        if (chess_[i].id == td_id) {
            //alert("ok");
            break;
        }
    }
    document.getElementById("chess_td_num").innerText = i;
}

//当前棋子判断
function chess_judge(get_chess_id) {
    switch (get_chess_id) { //对选择的棋子进行判断
        case "black_chesspiece_1":
            document.getElementById("chess_color").innerText = "黑";
            document.getElementById("chess_information").innerText = "黑：车"; break;
        case "black_chesspiece_2":
            document.getElementById("chess_color").innerText = "黑";
            document.getElementById("chess_information").innerText = "黑：马"; break;
        case "black_chesspiece_3":
            document.getElementById("chess_color").innerText = "黑";
            document.getElementById("chess_information").innerText = "黑：象"; break;
        case "black_chesspiece_4":
            document.getElementById("chess_color").innerText = "黑";
            document.getElementById("chess_information").innerText = "黑：后"; break;
        case "black_chesspiece_5":
            document.getElementById("chess_color").innerText = "黑";
            document.getElementById("chess_information").innerText = "黑：王"; break;
        case "black_chesspiece_6":
            document.getElementById("chess_color").innerText = "黑";
            document.getElementById("chess_information").innerText = "黑：象"; break;
        case "black_chesspiece_7":
            document.getElementById("chess_color").innerText = "黑";
            document.getElementById("chess_information").innerText = "黑：马"; break;
        case "black_chesspiece_8":
            document.getElementById("chess_color").innerText = "黑";
            document.getElementById("chess_information").innerText = "黑：车"; break;
        case "black_bing_1":
            document.getElementById("chess_color").innerText = "黑";
            document.getElementById("chess_information").innerText = "黑：兵1"; break;
        case "black_bing_2":
            document.getElementById("chess_color").innerText = "黑";
            document.getElementById("chess_information").innerText = "黑：兵2"; break;
        case "black_bing_3":
            document.getElementById("chess_color").innerText = "黑";
            document.getElementById("chess_information").innerText = "黑：兵3"; break;
        case "black_bing_4":
            document.getElementById("chess_color").innerText = "黑";
            document.getElementById("chess_information").innerText = "黑：兵4"; break;
        case "black_bing_5":
            document.getElementById("chess_color").innerText = "黑";
            document.getElementById("chess_information").innerText = "黑：兵5"; break;
        case "black_bing_6":
            document.getElementById("chess_color").innerText = "黑";
            document.getElementById("chess_information").innerText = "黑：兵6"; break;
        case "black_bing_7":
            document.getElementById("chess_color").innerText = "黑";
            document.getElementById("chess_information").innerText = "黑：兵7"; break;
        case "black_bing_8":
            document.getElementById("chess_color").innerText = "黑";
            document.getElementById("chess_information").innerText = "黑：兵8"; break;
        case "white_chesspiece_1":
            document.getElementById("chess_color").innerText = "白";
            document.getElementById("chess_information").innerText = "白：车"; break;
        case "white_chesspiece_2":
            document.getElementById("chess_color").innerText = "白";
            document.getElementById("chess_information").innerText = "白：马"; break;
        case "white_chesspiece_3":
            document.getElementById("chess_color").innerText = "白";
            document.getElementById("chess_information").innerText = "白：象"; break;
        case "white_chesspiece_4":
            document.getElementById("chess_color").innerText = "白";
            document.getElementById("chess_information").innerText = "白：后"; break;
        case "white_chesspiece_5":
            document.getElementById("chess_color").innerText = "白";
            document.getElementById("chess_information").innerText = "白：王"; break;
        case "white_chesspiece_6":
            document.getElementById("chess_color").innerText = "白";
            document.getElementById("chess_information").innerText = "白：象"; break;
        case "white_chesspiece_7":
            document.getElementById("chess_color").innerText = "白";
            document.getElementById("chess_information").innerText = "白：马"; break;
        case "white_chesspiece_8":
            document.getElementById("chess_color").innerText = "白";
            document.getElementById("chess_information").innerText = "白：车"; break;
        case "white_bing_1":
            document.getElementById("chess_color").innerText = "白";
            document.getElementById("chess_information").innerText = "白：兵1"; break;
        case "white_bing_2":
            document.getElementById("chess_color").innerText = "白";
            document.getElementById("chess_information").innerText = "白：兵2"; break;
        case "white_bing_3":
            document.getElementById("chess_color").innerText = "白";
            document.getElementById("chess_information").innerText = "白：兵3"; break;
        case "white_bing_4":
            document.getElementById("chess_color").innerText = "白";
            document.getElementById("chess_information").innerText = "白：兵4"; break;
        case "white_bing_5":
            document.getElementById("chess_color").innerText = "白";
            document.getElementById("chess_information").innerText = "白：兵5"; break;
        case "white_bing_6":
            document.getElementById("chess_color").innerText = "白";
            document.getElementById("chess_information").innerText = "白：兵6"; break;
        case "white_bing_7":
            document.getElementById("chess_color").innerText = "白";
            document.getElementById("chess_information").innerText = "白：兵7"; break;
        case "white_bing_8":
            document.getElementById("chess_color").innerText = "白";
            document.getElementById("chess_information").innerText = "白：兵8"; break;
    }
}

//棋子移动规则
function MoveRule(get_chess_id,get_temp) {
    switch (get_chess_id) {//对选择的棋子判断
        //白兵
        case "white_bing_1":
        case "white_bing_2":
        case "white_bing_3":
        case "white_bing_4":
        case "white_bing_5":
        case "white_bing_6":
        case "white_bing_7":
        case "white_bing_8":
            if (get_temp) {//目标棋格为空
                if (td_num[1] > 48) {
                    if ((Number(td_num[1]) - Number(8)) == td_num[2] ) {
                        e2.appendChild(img1[0]);
                    }
                    if ((Number(td_num[1]) - Number(16)) == td_num[2]) {
                        var e = document.getElementById("chess_" + (Number(td_num[1]) -Number(8)) + "");
                        var img = e.getElementsByTagName("img");
                        if (img[0] == undefined) {
                            e2.appendChild(img1[0]);
                        }
                    }
                }
                else {
                    if ((Number(td_num[1]) - Number(8)) == td_num[2]) {
                        e2.appendChild(img1[0]);
                    }
                }
            }
            if (!get_temp) {//目标棋格非空
                if (td_num[1] % 8 != 1 && td_num[1] != 0) {
                    if ((Number(td_num[1]) - Number(9)) == td_num[2] || (Number(td_num[1]) - Number(7) == td_num[2])) {
                        var child = document.getElementById(img2[0].id);
                        e2.removeChild(child);
                        e2.appendChild(img1[0]);
                    }
                }
                if (td_num[1] % 8 == 0) {
                    if ((Number(td_num[1]) - Number(9)) == td_num[2]) {
                        var child = document.getElementById(img2[0].id);
                        e2.removeChild(child);
                        e2.appendChild(img1[0]);
                    }
                }
                if (td_num[1] % 8 == 1) {
                    if ((Number(td_num[1]) - Number(7) == td_num[2])) {
                        var child = document.getElementById(img2[0].id);
                        e2.removeChild(child);
                        e2.appendChild(img1[0]);
                    }
                }
            }
            break;
        //黑兵
        case "black_bing_1":
        case "black_bing_2":
        case "black_bing_3":
        case "black_bing_4":
        case "black_bing_5":
        case "black_bing_6":
        case "black_bing_7":
        case "black_bing_8":            
            if (get_temp) {//目标棋格为空
                if (td_num[1] <17) {
                    if ((Number(td_num[1]) + Number(8)) == td_num[2]) {
                        e2.appendChild(img1[0]);
                    }
                    if ((Number(td_num[1]) + Number(16)) == td_num[2]) {
                        var e = document.getElementById("chess_" + (Number(td_num[1]) + Number(8)) + "");
                        var img = e.getElementsByTagName("img");
                        if (img[0] == undefined) {
                            e2.appendChild(img1[0]);
                        }
                    }
                }
                else {
                    if ((Number(td_num[1]) + Number(8)) == td_num[2]) {
                        e2.appendChild(img1[0]);
                    }
                }
            }
            if (!get_temp) {//目标棋格非空
                if (td_num[1] % 8 != 1 && td_num[1] % 8 != 0) {
                    if ((Number(td_num[1]) + Number(9)) == td_num[2] || (Number(td_num[1]) + Number(7) == td_num[2])) {
                        var child = document.getElementById(img2[0].id);
                        e2.removeChild(child);
                        e2.appendChild(img1[0]);
                    }
                }
                if (td_num[1] % 8 == 1) {
                    if ((Number(td_num[1]) + Number(9)) == td_num[2]) {
                        var child = document.getElementById(img2[0].id);
                        e2.removeChild(child);
                        e2.appendChild(img1[0]);
                    }
                }
                if (td_num[1] % 8 == 0) {
                    if ((Number(td_num[1]) + Number(7) == td_num[2])) {
                        var child = document.getElementById(img2[0].id);
                        e2.removeChild(child);
                        e2.appendChild(img1[0]);
                    }
                }
            }
            break;
        //象
        case "black_chesspiece_3":
        case "white_chesspiece_6":
        case "white_chesspiece_3":
        case "black_chesspiece_6":
            var x1 = Math.ceil(td_num[1] / 8) - 1;
            var y1 = ((Number(td_num[1]) + 7) % 8);
            var x2 = Math.ceil(td_num[2] / 8) - 1;
            var y2 = ((Number(td_num[2]) + 7) % 8);
            var temp = 0;
            if ((y2 - y1) / (x2 - x1) == 1 || (y2 - y1) / (x2 - x1) == (-1)) {
                if (y2 > y1) {
                    if (x2 > x1) {
                        for (i = 1; i < (x2 - x1) ; i++) {
                            var e = document.getElementById("chess_" + (Number(td_num[1]) + i * 8 + i) + "");
                            var img = e.getElementsByTagName("img");
                            if (img[0] == undefined) {
                                temp = temp + 1;
                            }
                        }
                        if (temp == (x2 - x1) - 1) {
                            chessMove(get_temp);
                        }
                    }
                    if (x2 < x1) {
                        for (i = 1; i < (x1 - x2) ; i++) {
                            var e = document.getElementById("chess_" + (Number(td_num[2]) + i * 8 - i) + "");
                            var img = e.getElementsByTagName("img");
                            if (img[0] == undefined) {
                                temp = temp + 1;
                            }
                        }
                        if (temp == (x1 - x2) - 1) {
                            chessMove(get_temp);
                        }
                    }
                }
                if (y2 < y1) {
                    if (x2 > x1) {
                        for (i = 1; i < (x2 - x1) ; i++) {
                            var e = document.getElementById("chess_" + (Number(td_num[1]) + i * 8 - i) + "");
                            var img = e.getElementsByTagName("img");
                            if (img[0] == undefined) {
                                temp = temp + 1;
                            }
                        }
                        if (temp == (x2 - x1) - 1) {
                            chessMove(get_temp);
                        }
                    }
                    if (x2 < x1) {
                        for (i = 1; i < (x1 - x2) ; i++) {
                            var e = document.getElementById("chess_" + (Number(td_num[2]) + i * 8 + i) + "");
                            var img = e.getElementsByTagName("img");
                            if (img[0] == undefined) {
                                temp = temp + 1;
                            }
                        }
                        if (temp == (x1 - x2) - 1) {
                            chessMove(get_temp);
                        }
                    }
                }
            }
            break;
        //马
        case "black_chesspiece_2":
        case "black_chesspiece_7":
        case "white_chesspiece_2":
        case "white_chesspiece_7":
            if (td_num[1] % 8 > 2 && td_num[1] % 8 < 7) {
                if (td_num[1] > 18 && td_num[1] < 47) {//马可以到达的位置：x-17,x-15,x-10,x-6,x+6,x+10,x+15,x+17;
                    if (td_num[2] == Number(td_num[1]) - 17 || td_num[2] == Number(td_num[1]) - 15 ||td_num[2]==Number(td_num[1]) - 10|| td_num[2] == td_num[1] - 6 || td_num[2] == Number(td_num[1]) + 6 || td_num[2] == Number(td_num[1]) + 10 || td_num[2] == Number(td_num[1]) + 15 || td_num[2] == Number(td_num[1]) + 17) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] < 19 && td_num[1] > 10) {
                    if (td_num[2]==Number(td_num[1]) - 10||td_num[2] == td_num[1] - 6 || td_num[2] == Number(td_num[1]) + 6 || td_num[2] == Number(td_num[1]) + 10 || td_num[2] == Number(td_num[1]) + 15 || td_num[2] == Number(td_num[1]) + 17) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] < 7 && td_num[1] > 2) {
                    if (td_num[2] == Number(td_num[1]) + 6 || td_num[2] == Number(td_num[1]) + 10 || td_num[2] == Number(td_num[1]) + 15 || td_num[2] == Number(td_num[1]) + 17) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] > 50 && td_num[1] < 55) {
                    if (td_num[2] == Number(td_num[1]) - 17 || td_num[2] == Number(td_num[1]) - 15 ||td_num[2]==Number(td_num[1]) - 10|| td_num[2] == td_num[1] - 6 || td_num[2] == Number(td_num[1]) + 6 || td_num[2] == Number(td_num[1]) + 10) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] > 58 && td_num[1] < 63) {
                    if (td_num[2] == Number(td_num[1]) - 17 || td_num[2] == Number(td_num[1]) - 15 ||td_num[2]==Number(td_num[1]) - 10|| td_num[2] == td_num[1] - 6) {
                        chessMove(get_temp);
                    }
                }
            }
            if (td_num[1] % 8 == 0) {
                if (td_num[1] > 16 && td_num[1] < 56) {
                    if (td_num[2] == Number(td_num[1]) - 17 || td_num[2]==Number(td_num[1]) - 10|| td_num[2] == Number(td_num[1]) + 6 || td_num[2] == Number(td_num[1]) + 15) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] == 16) {
                    if (td_num[2]==Number(td_num[1]) - 10|| td_num[2] == Number(td_num[1]) + 6 || td_num[2] == Number(td_num[1]) + 15) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] == 8) {
                    if (td_num[2] == Number(td_num[1]) + 6 || td_num[2] == Number(td_num[1]) + 15) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] == 56) {
                    if (td_num[2] == Number(td_num[1]) + 6 || td_num[2] == Number(td_num[1]) - 17 || td_num[2] == td_num[2]==Number(td_num[1]) - 10) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] == 64) {
                    if (td_num[2] == Number(td_num[1]) - 17 || td_num[2] == td_num[2]==Number(td_num[1]) - 10) {
                        chessMove(get_temp);
                    }
                }
            }
            if (td_num[1] % 8 == 1) {
                if (td_num[1] > 16 && td_num[1] < 42) {
                    if (td_num[2] == Number(td_num[1]) + 17 || td_num[2] == Number(td_num[1]) + 10 || td_num[2] == Number(td_num[1]) - 15 || td_num[2] == Number(td_num[1]) - 6) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] == 1) {
                    if (td_num[2] == Number(td_num[1]) + 17 || td_num[2] == Number(td_num[1]) + 10) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] == 9) {
                    if (td_num[2] == Number(td_num[1]) + 17 || td_num[2] == Number(td_num[1]) + 10 || td_num[2] == Number(td_num[1]) - 6) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] == 49) {
                    if (td_num[2] == Number(td_num[1]) + 10 || td_num[2] == Number(td_num[1]) - 15 || td_num[2] == Number(td_num[1]) - 6) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] == 57) {
                    if (td_num[2] == Number(td_num[1]) - 15 || td_num[2] == Number(td_num[1]) - 6) {
                        chessMove(get_temp);
                    }
                }
            }
            if (td_num[1] % 8 == 2) {
                if (td_num[1] > 17 && td_num[1] < 48) {
                    if (td_num[2] == Number(td_num[1]) - 17 || td_num[2] == Number(td_num[1]) - 15 || td_num[2] == td_num[1] - 6 || td_num[2] == Number(td_num[1]) + 10 || td_num[2] == Number(td_num[1]) + 15 || td_num[2] == Number(td_num[1]) + 17) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] == 2) {
                    if (td_num[2] == Number(td_num[1]) + 10 || td_num[2] == Number(td_num[1]) + 15 || td_num[2] == Number(td_num[1]) + 17) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] == 10) {
                    if (td_num[2] == td_num[1] - 6 || td_num[2] == Number(td_num[1]) + 10 || td_num[2] == Number(td_num[1]) + 15 || td_num[2] == Number(td_num[1]) + 17) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] == 50) {
                    if (td_num[2] == Number(td_num[1]) - 17 || td_num[2] == Number(td_num[1]) - 15 || td_num[2] == td_num[1] - 6 || td_num[2] == Number(td_num[1]) + 10) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] == 58) {
                    if (td_num[2] == Number(td_num[1]) - 17 || td_num[2] == Number(td_num[1]) - 15 || td_num[2] == td_num[1] - 6) {
                        chessMove(get_temp);
                    }
                }
            }
            if (td_num[1] % 8 == 7) {
                if (td_num[1] > 16 && td_num[1] < 48) {
                    if (td_num[2] == Number(td_num[1]) - 17 || td_num[2] == Number(td_num[1]) - 15 || td_num[2]==Number(td_num[1]) - 10|| td_num[2] == Number(td_num[1]) + 6 || td_num[2] == Number(td_num[1]) + 15 || td_num[2] == Number(td_num[1]) + 17) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] == 7) {
                    if (td_num[2] == Number(td_num[1]) + 6 || td_num[2] == Number(td_num[1]) + 15 || td_num[2] == Number(td_num[1]) + 17) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] == 15) {
                    if (td_num[2]==Number(td_num[1]) - 10|| td_num[2] == Number(td_num[1]) + 6 || td_num[2] == Number(td_num[1]) + 15 || td_num[2] == Number(td_num[1]) + 17) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] == 55) {
                    if (td_num[2] == Number(td_num[1]) - 17 || td_num[2] == Number(td_num[1]) - 15 || td_num[2]==Number(td_num[1]) - 10|| td_num[2] == Number(td_num[1]) + 6) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] == 63) {
                    if (td_num[2] == Number(td_num[1]) - 17 || td_num[2] == Number(td_num[1]) - 15 ||td_num[2]==Number(td_num[1]) - 10) {
                        chessMove(get_temp);
                    }
                }
            }
            break;
        //车
        case "black_chesspiece_1":
        case "black_chesspiece_8":
        case "white_chesspiece_1":
        case "white_chesspiece_8":
            var x1 = Math.ceil(td_num[1] / 8) - 1;//向上取整 //车在第几行 0~7 行
            var y1 = ((Number(td_num[1]) + 7) % 8);  //车在第几列 0~7 列
            var x2 = Math.ceil(td_num[2] / 8) - 1;
            var y2 = ((Number(td_num[2]) + 7) % 8);
            var temp = 0;                   //用于记录起始点和目标点之间的空格数
            if (x2 == x1) {//目标地点和棋子的初始位置在同一行
                if (y2 > y1) {//目标地点在棋子右边
                    for (i = 1; i < (y2 - y1) ; i++) {
                        var e = document.getElementById("chess_" + (Number(td_num[1]) + i) + "");
                        //alert(e);
                        var img = e.getElementsByTagName("img");
                        if (img[0] == undefined) {
                            temp = temp + 1;
                        }
                    }
                    //alert(temp);
                    if (temp == (y2 - y1 - 1)) {
                        chessMove(get_temp);
                    }
                }
                if (y2 < y1) {//目标地点在棋子左边
                    for (i = 1; i < (y1 - y2) ; i++) {
                        var e = document.getElementById("chess_" + (Number(td_num[2]) + i) + "");
                        var img = e.getElementsByTagName("img");
                        if (img[0] == undefined) {
                            temp = temp + 1;
                        }
                    }
                    if (temp == (y1 - y2 - 1)) {
                        chessMove(get_temp);
                    }
                }
            }
            if (y2 == y1) {//目标地点和棋子的初始位置在同一列
                if (x2 > x1) {//目标地点在棋子下边
                    for (i = 1; i < (x2 - x1) ; i++) {
                        var e = document.getElementById("chess_" + (Number(td_num[1]) + i*8) + "");
                        var img = e.getElementsByTagName("img");
                        if (img[0] == undefined) {
                            temp = temp + 1;
                        }
                    }
                    if (temp == (x2 - x1 - 1)) {
                        chessMove(get_temp);
                    }
                }
                if (x2 < x1) {//目标地点在棋子上边
                    for (i = 1; i < (x1 - x2) ; i++) {
                        var e = document.getElementById("chess_" + (Number(td_num[2]) + i * 8) + "");
                        var img = e.getElementsByTagName("img");
                        if (img[0] == undefined) {
                            temp = temp + 1;
                        }
                    }
                    if (temp == (x1 - x2 - 1)) {
                        chessMove(get_temp);
                    }
                }
            }
            break;
        //王后
        case "black_chesspiece_4":
        case "white_chesspiece_4":
            var x1 = Math.ceil(td_num[1] / 8) - 1;
            var y1 = ((Number(td_num[1]) + 7) % 8);
            var x2 = Math.ceil(td_num[2] / 8) - 1;
            var y2 = ((Number(td_num[2]) + 7) % 8);
            var temp = 0;
            if ((y2 - y1) / (x2 - x1) == 1 || (y2 - y1) / (x2 - x1) == (-1)) {
                if (y2 > y1) {
                    if (x2 > x1) {
                        for (i = 1; i < (x2 - x1) ; i++) {
                            var e = document.getElementById("chess_" + (Number(td_num[1]) + i * 8 + i) + "");
                            var img = e.getElementsByTagName("img");
                            if (img[0] == undefined) {
                                temp = temp + 1;
                            }
                        }
                        if (temp == (x2 - x1) - 1) {
                            chessMove(get_temp);
                        }
                    }
                    if (x2 < x1) {
                        for (i = 1; i < (x1 - x2) ; i++) {
                            var e = document.getElementById("chess_" + (Number(td_num[2]) + i * 8 - i) + "");
                            var img = e.getElementsByTagName("img");
                            if (img[0] == undefined) {
                                temp = temp + 1;
                            }
                        }
                        if (temp == (x1 - x2) - 1) {
                            chessMove(get_temp);
                        }
                    }
                }
                if (y2 < y1) {
                    if (x2 > x1) {
                        for (i = 1; i < (x2 - x1) ; i++) {
                            var e = document.getElementById("chess_" + (Number(td_num[1]) + i * 8 - i) + "");
                            var img = e.getElementsByTagName("img");
                            if (img[0] == undefined) {
                                temp = temp + 1;
                            }
                        }
                        if (temp == (x2 - x1) - 1) {
                            chessMove(get_temp);
                        }
                    }
                    if (x2 < x1) {
                        for (i = 1; i < (x1 - x2) ; i++) {
                            var e = document.getElementById("chess_" + (Number(td_num[2]) + i * 8 + i) + "");
                            var img = e.getElementsByTagName("img");
                            if (img[0] == undefined) {
                                temp = temp + 1;
                            }
                        }
                        if (temp == (x1 - x2) - 1) {
                            chessMove(get_temp);
                        }
                    }
                }
            }
            if (x2 == x1) {//目标地点和棋子的初始位置在同一行
                if (y2 > y1) {//目标地点在棋子右边
                    for (i = 1; i < (y2 - y1) ; i++) {
                        var e = document.getElementById("chess_" + (Number(td_num[1]) + i) + "");
                        //alert(e);
                        var img = e.getElementsByTagName("img");
                        if (img[0] == undefined) {
                            temp = temp + 1;
                        }
                    }
                    //alert(temp);
                    if (temp == (y2 - y1 - 1)) {
                        chessMove(get_temp);
                    }
                }
                if (y2 < y1) {//目标地点在棋子左边
                    for (i = 1; i < (y1 - y2) ; i++) {
                        var e = document.getElementById("chess_" + (Number(td_num[2]) + i) + "");
                        var img = e.getElementsByTagName("img");
                        if (img[0] == undefined) {
                            temp = temp + 1;
                        }
                    }
                    if (temp == (y1 - y2 - 1)) {
                        chessMove(get_temp);
                    }
                }
            }
            if (y2 == y1) {//目标地点和棋子的初始位置在同一列
                if (x2 > x1) {//目标地点在棋子下边
                    for (i = 1; i < (x2 - x1) ; i++) {
                        var e = document.getElementById("chess_" + (Number(td_num[1]) + i * 8) + "");
                        var img = e.getElementsByTagName("img");
                        if (img[0] == undefined) {
                            temp = temp + 1;
                        }
                    }
                    if (temp == (x2 - x1 - 1)) {
                        chessMove(get_temp);
                    }
                }
                if (x2 < x1) {//目标地点在棋子上边
                    for (i = 1; i < (x1 - x2) ; i++) {
                        var e = document.getElementById("chess_" + (Number(td_num[2]) + i * 8) + "");
                        var img = e.getElementsByTagName("img");
                        if (img[0] == undefined) {
                            temp = temp + 1;
                        }
                    }
                    if (temp == (x1 - x2 - 1)) {
                        chessMove(get_temp);
                    }
                }
            }
            break;
        //国王
        case "black_chesspiece_5":
        case "white_chesspiece_5":
            if (td_num[1] % 8 > 1 && td_num[1] % 8 <= 7) {
                if (td_num[2] > 8&&td_num[2]<56) {
                    if (td_num[2] == Number(td_num[1]) + 1 || td_num[2] == Number(td_num[1]) - 1 || td_num[2] == Number(td_num[1]) + 8 || td_num[2] == Number(td_num[1]) - 8 || td_num[2] == Number(td_num[1]) - 9 || td_num[2] == Number(td_num[1]) - 7 || td_num[2] == Number(td_num[1]) + 7 || td_num[2] == Number(td_num[1]) + 9) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[2] < 8) {
                    if (td_num[2] == Number(td_num[1]) + 1 || td_num[2] == Number(td_num[1]) - 1 || td_num[2] == Number(td_num[1]) + 8 || td_num[2] == Number(td_num[1]) + 7 || td_num[2] == Number(td_num[1]) + 9) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[2] > 56) {
                    if (td_num[2] == Number(td_num[1]) + 1 || td_num[2] == Number(td_num[1]) - 1 || td_num[2] == Number(td_num[1]) - 8 || td_num[2] == Number(td_num[1]) - 9 || td_num[2] == Number(td_num[1]) - 7) {
                        chessMove(get_temp);
                    }
                }
            }
            if (td_num[1] % 8 == 1) {
                if (td_num[1] == 1) {
                    if (td_num[2] == Number(td_num[1]) + 1 || td_num[2] == Number(td_num[1]) + 8 || td_num[2] == Number(td_num[1]) + 9) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] == 57) {
                    if (td_num[2] == Number(td_num[1]) + 1 || td_num[2] == Number(td_num[1]) - 7 || td_num[2] == Number(td_num[1]) - 8) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] > 1 && td_num[1] < 57) {
                    if (td_num[2] == Number(td_num[1]) + 1 || td_num[2] == Number(td_num[1]) - 8 || td_num[2] == Number(td_num[1]) - 7 || td_num[2] == Number(td_num[1]) + 8 || td_num[2] == Number(td_num[1]) + 9) {
                        chessMove(get_temp);
                    }
                }
            }
            if (td_num[1] % 8 == 0) {
                if (td_num[1] == 8) {
                    if (td_num[2] == Number(td_num[1]) + 7 || td_num[2] == Number(td_num[1]) + 8 || td_num[2] == Number(td_num[1]) - 1) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] == 64) {
                    if (td_num[2] == Number(td_num[1]) - 1 || td_num[2] == Number(td_num[1]) - 8 || td_num[2] == Number(td_num[1]) - 9) {
                        chessMove(get_temp);
                    }
                }
                if (td_num[1] > 8 && td_num[1] < 64) {
                    if (td_num[2] == Number(td_num[1]) - 1 || td_num[2] == Number(td_num[1]) - 8 || td_num[2] == Number(td_num[1]) + 8 || td_num[2] == Number(td_num[1]) - 9 || td_num[2] == Number(td_num[1]) + 7) {
                        chessMove(get_temp);
                    }
                }
            }
            break;

    }
    whoWin();
}

//获胜条件判断
function whoWin() {
    var blackWin = true;
    var whiteWin = true;
    for (j = 1; j <= 64; j++) {
        var x = document.getElementById("chess_" + j + "");
        var y = x.getElementsByTagName("img");
        if (y[0] != undefined) {
            if (y[0].id == "black_chesspiece_5") {
                whiteWin = false;
            }
            if (y[0].id == "white_chesspiece_5") {
                blackWin = false;
            }
        }
        else if (y[0] == undefined) {
        }
    }
    if (blackWin == true) {
        alert("黑方获胜");
        return Win = true;
    }
    if (whiteWin == true) {
        alert("白方获胜");
        return Win = true;
    }
}

//棋子移动
function chessMove(get_temp) {
    if (get_temp) {
        e2.appendChild(img1[0]);
    }
    if (!get_temp) {
        var child = document.getElementById(img2[0].id);
        e2.removeChild(child);
        e2.appendChild(img1[0]);
    }
}