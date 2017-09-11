describe('Main', () => {
  it('should be able to click Login button when not authorized', async () => {
    await expect(element(by.id('loginButton'))).toBeVisible()
    await element(by.id('loginButton')).tap()
    await expect(element(by.id('loginButton'))).toBeNotVisible()
  })
})
