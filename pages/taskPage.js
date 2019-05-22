import {Selector, t} from 'testcafe'

class TaskPage{
  constructor(){
    this.taskFrame = Selector('.completed_today')
    this.taskFrameNested = Selector('.empty-state')
    this.taskButton = Selector('.empty-state-button')
    this.describeTask = Selector('.richtext_editor')
    this.dateTaks = Selector('.input_due_date')
    this.saveTask= Selector ('.ist_button')
    this.dateText = Selector ('.scheduler-picker-header-action:nth-child(3)')
    this.monthDay = Selector ('.scheduler-picker-cell').withExactText('10')
    this.addTimeTask = Selector('.scheduler-timepicker-actions-add')
    this.selectTime = Selector('.scheduler-actions-addtime')
    this.selectTimeTask = Selector('.scheduler-timepicker-input-controls')
    this.saveTime = Selector('.scheduler-timepicker-actions-add')
    this.saveTaskTime = Selector('.scheduler-actions-save')
    this.buzon = Selector('.filter:nth-child(1)')
    //this.counterFirst = Selector('.item_counter')

      }

    TaskFlow = async () => {
      await t
      //.switchToIframe(this.taskFrame)
      //.switchToIframe(this.taskFrameNested)
      .click(this.taskButton)
      .typeText(this.describeTask,'Culichi 200%')
      .click(this.dateTaks)
      .click(this.dateText)
      .click(this.monthDay)
      .click(this.dateTaks)
      .click(this.selectTime)
      .typeText(this.selectTimeTask,'2pm')
      .click(this.saveTime)
      .click(this.saveTaskTime)
      .click(this.saveTask)
      .click(this.buzon)



    }

  }
  export default new TaskPage() //Por default se va a exportar la clase landingPage
