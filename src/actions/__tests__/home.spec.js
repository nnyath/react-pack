import { toggleHome, TOGGLE_HOME } from '../home'

describe('home', () => {
  describe('toggleHome', () => {
    it('should have return the correct type const', () => {
      expect(toggleHome().type).toBe(TOGGLE_HOME)
    })
  })
})
