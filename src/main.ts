import 'reflect-metadata'

import { app } from './app'
import { env } from './common/env'

app.listen(env.PORT, '0.0.0.0')
