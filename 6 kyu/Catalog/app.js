//====== S O L U T I O N - 1 ======//
function catalog(s, article) {
  s = s.split('\n\n')
  const array = s.filter(item => item.includes(article))

  const pattern1 = /<name[^>]*>((.|[\n\r])*)<\/name>/im
  const pattern2 = /<prx[^>]*>((.|[\n\r])*)<\/prx>/im
  const pattern3 = /<qty[^>]*>((.|[\n\r])*)<\/qty>/im

  return array.length == 0 ? 'Nothing' : array.map(item => `${item.match(pattern1)[1]} > prx: $${item.match(pattern2)[1]} qty: ${item.match(pattern3)[1]}`).join('\r\n')
}

//====== S O L U T I O N - 2 ======//
function catalog(s, article) {
  const arr = []
  s.split('\n+').forEach(line => {
    if (line.includes(article)) {
      const pattern = line.slice(12, -13).split(/<.*?><.*?>/)
      arr.push(`${pattern[0]} > prx: $${pattern[1]} qty: ${pattern[2]}`)
    }
  })

  return arr.length == 0 ? 'Nothing' : arr.join('/r/n')
}