function queue() {
    var items = []
    var count = 0;
    this.unshift = function (item) {
        items.unshift(item)
        count++;
    }
    this.shift = function () {
        if (count > 0) {
            items.shift()
            count--
        }
    }
    this.print = function () {
        for (var i = 0; i < count; i++) {
            console.log(items[i]);
        }
    }
}

var s = new queue()
s.unshift("Burberry")
s.unshift("Channel")
s.unshift("Gucci")
s.shift()
s.unshift("Givenchy")
s.unshift("Louis Vitton")
s.shift()
console.log(s)

s.print();

var s1 = new queue();
s1.unshift("CK one")
s1.unshift("Channel No 5")
s1.shift()
s1.unshift("Bulgari")
s1.unshift("Hermes")

s1.print();



