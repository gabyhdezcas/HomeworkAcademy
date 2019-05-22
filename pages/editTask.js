import {Selector, t} from 'testcafe'

class EditTask{
  constructor() {
    this.contentTask = Selector ('.task_content_item:nth-child(2)')
    //this.editor = Selector ('#editor')
  //  this.listEditor   = Selector ('.list_editor:nth-child(1)')
    this.describeTask = Selector('.richtext_editor')
    this.dateTaks = Selector('.input_due_date')
    this.saveTask= Selector ('.ist_button')
    this.dateText = Selector ('.outline-circle')
    this.monthDay = Selector ('.scheduler-picker-cell-day').withExactText('26')
    this.selectTime = Selector ('.scheduler-actions-time-label')
    this.saveDate = Selector ('.scheduler-actions-save')
    this.editTime = Selector ('.scheduler-timepicker-input-controls')
    this.saveEdit = Selector ('.scheduler-timepicker-actions-add')
    this.saveEditTask = Selector ('.scheduler-actions-save')
    this.saveTask = Selector ('.ist_button_red')



  }
  EditFlow = async () =>{
    await t
    //.switchToIframe(this.editor)
    //.switchToIframe(this.listEditor)
    .click(this.contentTask)
    .click(this.describeTask)
    .pressKey('ctrl+a delete')
    .typeText(this.describeTask,'Tomar avión de regreso a Culiacán, Sinaloa..Estar dos horas antes del vuelo')
    .click(this.dateTaks)
    .click(this.monthDay)
    .click(this.selectTime)
    .pressKey('ctrl+a delete')
    .typeText(this.editTime,'10 am')
    .click(this.saveEdit)
    .click(this.saveEditTask)
    .click(this.saveTask)




  }

}

export default new EditTask()
