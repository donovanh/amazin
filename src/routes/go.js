import { amazinUrl } from '../helpers/amazin-url'
import fetch from 'node-fetch'
import ua from 'universal-analytics'

export async function get(req, res) {
  const ip = req.headers['x-forwarded-for']
  const key = process.env.GEO_KEY
  const APIUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${key}&ip=${ip}`
  const visitor = ua('UA-3481417-31');
  let iso_code

  if (ip) {
    const result = await fetch(APIUrl)
    const geoInfo = await result.json()
    iso_code = geoInfo.country_code2 ? geoInfo.country_code2 : null
  }

  const { tag } = req.query

  visitor.pageview(req.originalUrl).send()

  const url = amazinUrl(iso_code, null, tag)
  res.redirect(301, url)

}