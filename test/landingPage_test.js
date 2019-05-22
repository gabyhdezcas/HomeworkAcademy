import {t} from 'testcafe'
import landingPage from '../pages/landingPage'
import homePage from '../pages/homePage'
import taskPage from '../pages/taskPage'
import editTask from '../pages/editTask'
import deleteTask from '../pages/deleteTask'
import dragnDrop from '../pages/dragnDrop'


fixture ('Successful login')
  .page('https://todoist.com/')

  test('login', async t => {
    await landingPage.LoginFlow()
    await t.expect(homePage.topIcons.exists).ok()
    await taskPage.TaskFlow()
    await editTask.EditFlow()
    await deleteTask.DeleteFlow()
    await dragnDrop.dragFlow()
    await t.wait(3000)

  })
