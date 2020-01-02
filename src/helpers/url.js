export const getASIN = input => {
  const match = input.match(/dp\/([A-Za-z0-9]{10,13})/)
  return match && match[0].replace('dp/', '')
}

export const getAffCode = input => {
  const match = input.match(/tag=([^&]*)/)
  return match && match[0].split('=')[1]
}

export const isUrl = input => {
  return input.match(/(https?:\/\/[^\s]+)/)
}
