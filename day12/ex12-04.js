console.log("파일이 임포트 되었습니다.")

let num =123
let str = "456"
let bit = true
console.log("========== Note ==========")
console.log(`${typeof(num)} 타입 ${num}의 자료형을 변환하면`)
console.log(String(num), typeof String(num))
console.log(Boolean(num), typeof Boolean(num))
console.log(`${typeof(num)} 타입 ${str}의 자료형을 변환하면`)
console.log(String(num), typeof String(str))
console.log(Boolean(num), typeof Boolean(str))
console.log(`${typeof(num)} 타입 ${bit}의 자료형을 변환하면`)
console.log(String(num), typeof String(bit))
console.log(Boolean(num), typeof Boolean(bit))
console.log("\n========== Test ==========")
console.log("num + str : ", num + str, typeof(num+str))
console.log("num + bit : ", num + bit, typeof(num+str))
console.log("bit + str : ", bit + str, typeof(num+str))
console.log("\n========== Tip ==========")
console.log('num+""', num+"", typeof(num+""))
console.log('!!num', !!num, typeof(!!num))
console.log('str*1', str*1, typeof(str*1))
console.log('+str', +str, typeof(+str))
console.log('!!str', !!str, typeof(!!str))
console.log('bit+""', bit+"", typeof(bit+""))
console.log('bit*1', bit*1, typeof(bit*1))
console.log('+bit', +bit, typeof(+bit))