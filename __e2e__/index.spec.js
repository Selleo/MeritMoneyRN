describe('Main', () => {
  it('should display loginButton', async () => {
    await expect(element(by.id('loginButton'))).toBeVisible()
  })
})
