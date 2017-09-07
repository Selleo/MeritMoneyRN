import { AsyncStorage } from 'react-native'

describe('Main', () => {
  beforeEach(() => {
    AsyncStorage.setItem('credentials', 'creds')
  })

  it('should have main', async () => {
    await expect(element(by.id('main'))).toBeVisible()
  })
})
