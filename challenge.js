 module.exports = function sqrt(number) {
  return sqrt_recursive(number, 0, number)
}

function sqrt_recursive(number, min_interval, max_interval) {
  let mid = Math.floor((min_interval + max_interval)/2)
  if(min_interval === (max_interval - 1)){
    return `cannot find square root of ${number}`
  }
  if(mid * mid === number){
    return mid
  }
  else {
    if(mid * mid > number){
return sqrt_recursive(number,0,mid)
    }
    else if(mid * mid < number){
return sqrt_recursive(number,mid,max_interval)
    }
  }
}

// console.log(sqrt(1000000))
// console.log(sqrt(7056))
