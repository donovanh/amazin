import maxmind from 'maxmind'

export async function get(req, res) {
  const ip = req.clientIp.includes('127.0.0.1') ? '37.228.254.54' : req.clientIp

  const lookup = await maxmind.openSync('geolite2/GeoLite2-Country.mmdb')
  const result = lookup.get(ip)
  const iso_code = result && result.country ? result.country.iso_code : null

  res.writeHead(200, {
    'Content-Type': 'application/json'
  })

  res.end(JSON.stringify({ iso_code, ip }))
}
