var oTab = document.getElementById("tab");
var tHead = oTab.tHead;
var oThs = tHead.rows[0].cells;
var tBody = oTab.tBodies[0];
var oRows = tBody.rows;

function bindData() {
    var frg = document.createDocumentFragment();
    for (var i = 0; i < data.length; i++) {
        var cur = data[i];
        cur.name = cur.name || "--";
        cur.age = cur.age || "25";
        cur.score = cur.score || "0";
        cur.sex = cur.sex === 0 ? "男" : "女";
        var oTr = document.createElement("tr");
        for (var key in cur) {
            var oTd = document.createElement("td");
            oTd.innerHTML = cur[key];
            oTr.appendChild(oTd);
        }
        frg.appendChild(oTr);
    }
    tBody.appendChild(frg);
    frg = null;
}
bindData();