import * as sapper from '@sapper/server'
import compression from 'compression'
import polka from 'polka'
import requestIp from 'request-ip'
import sirv from 'sirv'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    requestIp.mw(),
    sapper.middleware()
  )
  .listen(PORT, err => {
    if (err) console.log('error', err)
  })
