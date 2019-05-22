import {Selector , t } from 'testcafe'

class Drag {
  constructor(){
    this.drag = Selector('#item_3210035493 > div')

  }
  dragFlow = async () => {
    await t
     .drag(this.drag, 0, 82, {
          offsetX: 9,
          offsetY: 7,
          speed: 0.3
      });


  }
}
export default new Drag()
