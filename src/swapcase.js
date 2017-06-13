function input() {
    var data = document.getElementById("str").value;
    var out = "";
    var str = data.split("");
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            out += str[i].toUpperCase();
        }
        else {
            out += str[i].toLowerCase();
        }
    }
    console.log(out);
}
input();
