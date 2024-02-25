(function () {
  String.prototype.ensureStart = function (str) {
    if (!this.startsWith(str)) {
      return str + this;
    } else {
      return this.toString();
    }
  };

  String.prototype.ensureEnd = function (str) {
    if (!this.endsWith(str)) {
      return this + str;
    } else {
      return this.toString();
    }
  };

  String.prototype.isEmpty = function () {
    return this.length == 0;
  };

  String.prototype.truncate = function (n) {
    if (n < 4) {
      return ".".repeat(n);
    }

    if (n >= this.length) {
      return this.toString();
    }

    if (this.includes(" ")) {
      let words = this.split(" ");
      let result = [];
      
      for (let word of words) {
        if (result.join(" ").length + word.length + 3 <= n) {
          result.push(word);
        } else {
          break;
        }
      }

      return result.join(" ") + "...";
    }

    return this.slice(0, n - 3) + "...";
  };

  String.format = function (string, ...params) {
    for (let i = 0; i < params.length; i++) {
      string = string.replace(`{${i}}`, params[i]);
    }

    return string;
  };
})();

let str = "my string";

str = str.ensureStart("my");
console.log(str); // 'my string'

str = str.ensureStart("hello ");
console.log(str); // 'hello my string'

str = str.truncate(16);
console.log(str); // 'hello my string'

str = str.truncate(14);
console.log(str); // 'hello my...'

str = str.truncate(8);
console.log(str); // 'hello...'

str = str.truncate(4);
console.log(str); // 'h...'

str = str.truncate(2);
console.log(str); // '..'

str = String.format("The {0} {1} fox", "quick", "brown");
console.log(str); // 'The quick brown fox'

str = String.format("jumps {0} {1}", "dog");
console.log(str); // 'jumps dog {1}'
