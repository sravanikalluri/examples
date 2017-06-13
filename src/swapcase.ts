function input(){
    var data:string = (<HTMLInputElement>document.getElementById("str")).value;
    var out:string = "";
    for(let i:number = 0; i < data.length; i++) {
        var ch:string = data[i];
        if(ch === ch.toLowerCase()) {
            out += ch.toUpperCase();
        } else {
            out += ch.toLowerCase();
        }
    }
    console.log(out);
}

input();
