describe('index', () => {
  test('should be able to navigate through app', async () => {
    await element(by.text('Comments')).tap()
    await element(by.text('Collectors & Hamsters')).tap()
    await element(by.text('Main')).tap()
  })

  describe('Main', () => {
    test('should be able to click Login button when not authorized', async () => {
      await expect(element(by.id('loginButton'))).toBeVisible()
      await element(by.id('loginButton')).tap()
      await expect(element(by.id('loginButton'))).toBeNotVisible()
      await device.launchApp({ newInstance: true })
    })
  })

  describe('Comments', () => {
    test('should be able to see comment labels', async () => {
      await element(by.text('Comments')).tap()
      await expect(element(by.text('Selleo team appreciate…'))).toBeVisible()
      await expect(element(by.text('me for:'))).toBeVisible()
    })
  })

  describe('Collectors & Hamsters', () => {
    test('should be able to see hamsters & collectors collections', async () => {
      await element(by.text('Collectors & Hamsters')).tap()
      await expect(element(by.id('hamstersContainer'))).toBeVisible()
      await expect(element(by.id('collectorsContainer'))).toBeVisible()
    })
  })
})
