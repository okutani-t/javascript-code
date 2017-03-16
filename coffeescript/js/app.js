
/*
ここはコメント
 */
var User, a, b, hello, html, i, j, k, msg, name, obj, ref, results, rs, score, sum, super_hello, tom, total, x;

score = 82;

if (score > 80) {
  console.log('good!');
}

console.log("score: " + score);

console.log("score: " + (score * 10));

html = "<div id=\"main\">\n  hello\n</div>";

console.log(html);

a = [1, 10, 30];

b = [0, 1, 2, 3, 4, 5];

console.log(a);

console.log(b);

console.log(b.slice(1, 4));

[].splice.apply(b, [0, 3].concat(ref = ["a", "b", "c"])), ref;

console.log(b);

obj = {
  name: 'okutani',
  score: 10
};

console.log(obj);

if (score > 60) {
  console.log('ok!');
}

msg = score > 60 ? 'ok.' : 'ng.';

console.log(msg);

if (5 === 1 || 5 === 3 || 5 === 5) {
  console.log('in!');
}

if ('name' in obj) {
  console.log('name is exist!');
}

switch (score) {
  case 80:
    console.log('80!');
    break;
  case 81:
    console.log('81!');
    break;
  case 82:
    console.log('82!');
    break;
  default:
    console.log('other...');
}

sum = 0;

for (i = j = 0; j <= 9; i = ++j) {
  sum += i;
}

console.log(sum);

sum = 0;

for (i = k = 0; k <= 9; i = k += 2) {
  console.log(i);
  sum += i;
}

console.log(sum);

sum = 0;

total = (function() {
  var l, results1;
  results1 = [];
  for (i = l = 0; l <= 9; i = ++l) {
    results1.push(sum += i);
  }
  return results1;
})();

console.log(total);

results = {
  okutani: 40,
  yamada: 80,
  sakura: 60
};

for (name in results) {
  score = results[name];
  console.log(name + ": " + score);
}

hello = function() {
  return 'hello!';
};

console.log(hello());

super_hello = function(name) {
  return name + ", hello!!!!!!";
};

console.log(super_hello('okutani'));

(function() {
  return console.log(super_hello('yamada'));
})();

User = (function() {
  function User(name) {
    this.name = name;
  }

  User.prototype.greet = function() {
    return "hello, " + this.name + "!";
  };

  return User;

})();

tom = new User("Tom");

console.log(tom);

console.log(tom.greet());

rs = typeof x !== "undefined" && x !== null ? "found!" : "not found...";

console.log(rs);

x = typeof y !== "undefined" && y !== null ? y : 20;

console.log(x);
