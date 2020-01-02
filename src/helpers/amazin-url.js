const countries = {
  GB: { name: 'United Kingdom', url: 'https://amazon.co.uk' },
  DE: { name: 'Germany', url: 'https://amazon.de' },
  IT: { name: 'Italy', url: 'https://amazon.it' },
  AU: { name: 'Australia', url: 'https://amazon.com.au' },
  AT: { name: 'Austria', url: 'https://amazon.at' },
  BR: { name: 'Brazil', url: 'https://amazon.com.br' },
  CA: { name: 'Canada', url: 'https://amazon.ca' },
  CN: { name: 'China', url: 'https://amazon.cn' },
  ES: { name: 'Spain', url: 'https://amazon.es' },
  FR: { name: 'France', url: 'https://amazon.fr' },
  IN: { name: 'India', url: 'https://amazon.in' },
  JP: { name: 'Japan', url: 'https://amazon.co.jp' },
  MX: { name: 'Mexico', url: 'https://amazon.com.mx' },
  US: { name: 'USA', url: 'https://amazon.com' }
}

const buildUrl = (iso_code, asin, tag) => {
  if (!tag) {
    tag = generateTagByCountry(iso_code);
  }
  if (!asin) {
    return countries[iso_code]
    ? `${countries[iso_code].url}/?tag=${tag}`
    : `https://amazon.com?/?tag=${donssite-20}` 
  }
  return countries[iso_code]
    ? `${countries[iso_code].url}/dp/${asin.toUpperCase()}/${
        tag ? `?tag=${tag}` : ''
      }`
    : `https://amazon.com/?tag=${donssite-20}`
}

const generateTagByCountry = (iso_code) => {
  let tag
  switch (iso_code) {
    case 'US':
      tag = 'donssite-20'
      break
    case 'GB':
      tag = 'designni-21'
      break
    case 'FR':
      tag = 'cssanimatio05-21'
      break
    case 'DE':
      tag = 'cssanimation-21'
      break
    case 'ES':
      tag = 'cssanimatio03-21'
      break
    default:
      tag = 'donssite-20'
  }

  return tag
}

const buildClosestAmazonUrl = (iso_code, asin, tag) => {
  let iso
  switch (iso_code) {
    case 'HR':
    case 'SK':
    case 'HU':
    case 'RS':
    case 'GR':
      iso = 'AT'
      break
    case 'ID':
    case 'NZ':
    case 'PG':
      iso = 'AU'
      break
    case 'IE':
    case 'NO':
    case 'SE':
      iso = 'GB'
      break
    case 'BE':
      iso = 'FR'
      break
    case 'NL':
    case 'DK':
    case 'PL':
    case 'CZ':
    case 'LT':
    case 'LV':
    case 'TR':
      iso = 'DE'
      break
    case 'PT':
      iso = 'ES'
      break
    case 'PK':
      iso = 'IN'
      break
    default:
      iso = 'US'
  }
  return buildUrl(iso, asin, tag)
}

export const amazinUrl = (iso_code, asin, tag) => {
  if (countries[iso_code]) {
    return buildUrl(iso_code, asin, tag)
  } else {
    return buildClosestAmazonUrl(iso_code, asin, tag)
  }
}
