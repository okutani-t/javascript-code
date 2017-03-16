###
ここはコメント
###

# ここから書くよ
score = 82

if score > 80
  console.log 'good!'

console.log "score: #{score}"
console.log "score: #{score * 10}"

html = """
  <div id="main">
    hello
  </div>
       """

console.log html

a = [1, 10, 30]
b = [0..5]

console.log a
console.log b
console.log b[1..3]

b[0..2] = ["a", "b", "c"]
console.log b

obj = name: 'okutani', score: 10

console.log obj

console.log 'ok!' if score > 60

msg = if score > 60 then 'ok.' else 'ng.'
console.log msg

console.log 'in!' if 5 in [1, 3, 5]

console.log 'name is exist!' if 'name' of obj

switch score
  when 80
    console.log '80!'
  when 81 then console.log '81!'
  when 82 then console.log '82!'
  else console.log 'other...'

sum = 0
sum += i for i in [0..9]
console.log sum

sum = 0
for i in [0..9] by 2
  console.log i
  sum += i
console.log sum

# 配列内包
sum = 0
total = (sum += i for i in [0..9])
console.log total

results =
  okutani: 40
  yamada: 80
  sakura: 60

console.log "#{name}: #{score}" for name, score of results
hello = -> 'hello!'
console.log hello()

super_hello = (name) -> "#{name}, hello!!!!!!"
console.log super_hello('okutani')

do -> console.log super_hello('yamada')

class User
  constructor: (name) ->
    @name = name
  greet: -> "hello, #{@name}!"

tom = new User "Tom"
console.log tom
console.log tom.greet()

rs = if x? then "found!" else "not found..."
console.log rs

x = y ? 20
console.log x
