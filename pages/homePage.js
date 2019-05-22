import {Selector} from 'testcafe'

  class HomePage {
      constructor()
    {
      this.topIcons = Selector('#top_icons')
    }
  }
export default new HomePage()
