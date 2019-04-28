import maxmind from 'maxmind'

export async function get(req, res) {
  //const ip = req.clientIp;
  const ip = '2a02:8084:6983:8f00:d954:f8af:6236:62fe'
  //const result = geoip.lookup(ip)

  const lookup = await maxmind.openSync('geolite2/GeoLite2-Country.mmdb')
  const result = lookup.get(ip)
  const iso_code = result && result.country ? result.country.iso_code : null

  res.writeHead(200, {
    'Content-Type': 'application/json'
  })

  res.end(JSON.stringify({ iso_code }))
}
