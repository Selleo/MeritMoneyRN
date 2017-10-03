import detox from 'detox'
import pkg from '../package.json'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000

if (process.argv[2].includes('__e2e__')) {
  beforeAll(async () => {
    await detox.init(pkg.detox)
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  afterAll(async () => {
    await detox.cleanup()
  })
}
