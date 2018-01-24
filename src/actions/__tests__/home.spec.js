import { toggleHome, TOGGLE_HOME } from 'Actions/home'

describe('home', () => {
  describe('toggleHome', () => {
    it('should have return the correct action TYPE', () => {
      expect(toggleHome().type).toBe(TOGGLE_HOME)
    })
  })
})
