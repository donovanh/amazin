import { getASIN, getAffCode, isUrl } from '../url'

describe('getASIN', () => {
  it('should return null if no ASIN found', () => {
    const url = 'http://amazon.com/1234567890/etc?qwertyqwer'
    expect(getASIN(url)).toBe(null)
  })

  it('should get an ASIN from a string', () => {
    const urls = [
      'http://amazon.com/1234567890/dp/ASINASIN0K/etc?etcetcetcetcetc',
      'https://www.amazon.com/Platinum-Collection-Greatest-Hits-III/dp/ASINASIN0K?ref_=Oct_BSellerC_408256_0&pf_rd_p=452ccc16-ec87-57e9-aea0-bf6c6738392e&pf_rd_s=merchandised-search-6&pf_rd_t=101&pf_rd_i=408256&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=MN7SR496W82AEMMDNY2G&pf_rd_r=MN7SR496W82AEMMDNY2G&pf_rd_p=452ccc16-ec87-57e9-aea0-bf6c6738392e',
      'https://www.amazon.es/merymall-Reloj-Para-65201118CN/dp/ASINASIN0K/ref=bbp_bb_757550_st_pmhH_w_1?psc=1&smid=A274C08CWF2GOH',
      'https://www.amazon.co.jp/Fire-TV-Stick-Alexa対応音声認識リモコン付属/dp/ASINASIN0K/ref=sr_1_1?brr=1&qid=1556570874&rd=1&s=amazon-devices&sr=1-1'
    ]

    urls.forEach(url => {
      expect(getASIN(url)).toEqual('ASINASIN0K')
    })
  })
})

describe('getAffCode', () => {
  it('should return null if no tag in url', () => {
    const url = 'http://amazon.com/1234567890/dp/ASINASIN0K/etc?etcetcetcetcetc'
    expect(getAffCode(url)).toBe(null)
  })

  it('should return tag', () => {
    const url =
      'https://www.amazon.com/CSS-Animation-101-websites-animation-ebook/dp/B07R9V95NX/ref=as_li_ss_tl?keywords=css+animation+101&qid=1556561364&s=gateway&sr=8-1-fkmrnull&linkCode=sl1&tag=affiliate-tag&linkId=894f5fa0cf866c6341bcd6fbeead5624&language=en_US'
    expect(getAffCode(url)).toEqual('affiliate-tag')
  })
})

describe('isUrl', () => {
  it('should return null for a non-URL', () => {
    const url = 'boom'
    expect(isUrl(url)).toBe(null)
  })
  it('should correctly identify a URL', () => {
    const validUrls = [
      'http://url.com',
      'https://url.com',
      'https://www.url.com'
    ]
    validUrls.forEach(url => {
      expect(isUrl(url)).toBeTruthy()
    })
  })
})
