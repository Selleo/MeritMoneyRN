describe('Main', () => {
  it('should have main', async () => {
    await expect(element(by.id('main'))).toBeVisible()
  })
})
