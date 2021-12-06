console.log(document.title);

var klass = document.getElementsByClassName('infocard-lg-data text-muted');
var fly = document.getElementsByClassName('itype flying');
for (i = 0; i < klass.length; i++) {
    for (j = 0; j < fly.length; j++) {
        if ((klass[i] == fly)) {
            klass[i].style.backgroundColor = 'yellow';
        }
    }
}

console.log(klass.length)
console.log(fly.length)



