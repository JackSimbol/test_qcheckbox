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

