<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="chess.aspx.cs" Inherits="chess._1" %>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>国际象棋</title>
        <link rel="stylesheet" type="text/css" href="chessStyle.css"/>
        <script type="text/javascript">
            var chesspiece_ = new Array();
            var chess_ = new Array();
            var td_id = new Array();
            var chesspiece_id = new Array();
            var who_go = "";
            var td_num = new Array();
            var getchesspiece = new Array();
            var tableId;
            var e1;
            var e2;
            var temp;
            var img1;
            var img2;
            var Win = false;
            //var color_same;
            var chess_color_ = new Array();
            function button_onclick() { }
            function td_onclick(td_id) { }
            function table_onclick(table_id) { }
            function clickImage(id) { }
            function GetNextId() { }
            function change() { }
        </script>
        <script type="text/javascript" src="chess_board.js"></script>
        <script type="text/javascript" src="chess_start.js"></script>
        <script type="text/javascript" src="chess_rule.js"></script>
    </head>
    <body>
        <table>
            <tr>
                <td class="td03">
                    <input type="button" value ="开始游戏" id="button" onclick="button_onclick()"/>
                </td>
                <td class="td03" id ="whogo">
                </td>
                <td class="td03" id ="chess_information">
                </td>
                <td class="td03" id ="chess_board_information" style="display:none;">
                </td>
                <td class="td03" id ="chess_td_num" style="display:none;">
                </td>
                <td class="td03" id ="chess_color" style="display:none;">
                </td>
            </tr>
        </table>            
    </body>
</html>
