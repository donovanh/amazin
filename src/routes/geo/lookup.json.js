const geoip = require('geoip-lite')

export async function get(req, res) {
  //const ip = req.clientIp;
  const ip = '2a02:8084:6983:8f00:d954:f8af:6236:62fe'
  const result = geoip.lookup(ip)

  res.writeHead(200, {
    'Content-Type': 'application/json',
  })

  res.end(JSON.stringify({ result, ip }))
}
