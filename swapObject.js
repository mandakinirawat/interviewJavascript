//input obj =  { a:1, b:2, c:3 } 
//output obj = { 1:a, 2:b, 3:c }

const swapObj = (obj) => {
  let obj1 = {};
  for(let key in obj) {
    obj1 = {...obj1, [obj[key]]: key}
  }
  console.log(obj1)
}

swapObj({ a:1, b:2, c:3 })
