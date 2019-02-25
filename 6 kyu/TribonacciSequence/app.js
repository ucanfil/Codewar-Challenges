//====== S O L U T I O N - 1 ======//
function tribonacci(signature, n) {
  const result = [...signature]
  for (let i = 0; i < n - signature.length; i++) {
    const num = result.slice(-3).reduce((a,b) => a+b)
    result.push(num)
  }

  return result.slice(0, n)
}