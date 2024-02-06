var colors = [
	"#bf242a", "#9d2933", "#ff461f", "#f36838", "#845a33", 
	"#1685a9", "#16a951", "#fff2df", "#003472", "#ffb61e", 
	"#ffc64b", "#e9bb1d", "#ff4777", "#50616d", 
];


function getRandom(arr) {
    var result = [];
    for (var i = 0; i < arr.length && result.length < 3; i++) {
        if (!result.includes(i)) {
            var randomIndex = Math.floor(Math.random() * arr.length);
            
            while (result.includes(randomIndex)) {
                randomIndex = Math.floor(Math.random() * arr.length);
            }
            
            result[i] = arr[randomIndex];
        }
    }
    return result;
}

var tmp = getRandom(colors);
var body = document.getElementsByTagName("body")[0];
body.style.background = `linear-gradient(120deg, ${tmp[0]}, ${tmp[1]}, ${tmp[2]})`;