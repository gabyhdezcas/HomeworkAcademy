import {Selector, t} from 'testcafe'


class DeleteTask{
  constructor(){
    this.menuSelect = Selector ('#editor .items li td:last-child')
    this.menuOption = Selector ('.sel_delete_task')
    this.buttonDelete = Selector ('.ist_button_red')


  }
  DeleteFlow = async () =>{
    await t
        .click(this.menuSelect)
        .click(this.menuOption)
        .click(this.buttonDelete)


  }

}
export default new DeleteTask()
