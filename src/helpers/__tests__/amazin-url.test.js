import { amazinUrl } from '../amazin-url'

describe('amazinUrl', () => {
  let iso_code
  let asin
  let tag

  beforeEach(() => {
    iso_code = 'UK'
    asin = '1234567890'
    tag = null
  })

  it('should return US address when no country iso given', () => {
    iso_code = null
    expect(amazinUrl(iso_code, asin, tag)).toBe(
      'https://amazon.com/dp/1234567890/'
    )
  })

  it('should return correct url for existing Amazon countries', () => {
    expect(amazinUrl(iso_code, asin, tag)).toBe(
      'https://amazon.co.uk/dp/1234567890/'
    )

    iso_code = 'DE'
    expect(amazinUrl(iso_code, asin)).toBe('https://amazon.de/dp/1234567890/')
  })

  it('should apply affiliate tag to url', () => {
    tag = 'mytag-20'
    expect(amazinUrl(iso_code, asin, tag)).toBe(
      'https://amazon.co.uk/dp/1234567890/?tag=mytag-20'
    )
  })

  it('should return fallback country for Ireland', () => {
    iso_code = 'IE'
    expect(amazinUrl(iso_code, asin, tag)).toBe(
      'https://amazon.co.uk/dp/1234567890/'
    )
  })

  it('should return Amazon.com for an unmatched country with no fallback', () => {
    iso_code = 'Not a country'
    expect(amazinUrl(iso_code, asin, tag)).toBe(
      'https://amazon.com/dp/1234567890/'
    )
  })
})
