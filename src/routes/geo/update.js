const geoip = require('geoip-lite')

export async function get(req, res, next) {
  await geoip.reloadData()

  res.writeHead(200, {
    'Content-Type': 'application/json',
  })

  res.end(JSON.stringify('Update done'))
}
