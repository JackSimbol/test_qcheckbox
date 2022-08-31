/* 多选题交互js
 * tid: 题干id
 * sid: 单个选项id
 * oid: 选项id的序列
 */

function get_id(idlist){ //由idlist转到slider-id构成的数组
    return idlist.split(',');
}

function check_checkbox(sid){
    document.getElementById(sid).checked = true;
}

function unparse_checkbox(tid){
    var oid = get_id(document.getElementById(tid).getAttribute("idlist"));
    var checked = "checked=";
    var opt_body = "options=";
    for(var id of oid){
        var in_id = document.getElementById(id).getAttribute("in_id");
        var ob_id = document.getElementById(id).getAttribute("ob_id");
        opt_body += "["+document.getElementById(ob_id).innerHTML + "]";
        if(document.getElementById(in_id).checked == true){
            checked += "["+id+"]"
        }
    }
    return opt_body+","+checked;
}

document.getElementById("a_in").onclick = function(){
    check_checkbox("a_in");
}

document.getElementById("b_in").onclick = function(){
    check_checkbox("b_in");
}

document.getElementById("c_in").onclick = function(){
    check_checkbox("c_in");
}

document.getElementById("d_in").onclick = function(){
    check_checkbox("d_in");
}

document.getElementById("unparse").onclick = function(){
    console.log(unparse_checkbox("test_cb"));
}
