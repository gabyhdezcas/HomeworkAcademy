//importar los selectores de testcafe
import {Selector, t} from 'testcafe'

//clase principal de la pagina
  class LandingPage{
    //iniciar los objetos
    constructor(){
      //Empezar a definir los elementos
        this.loginlink = Selector('.sel_login') //. --> para clases
        this.loginIframe = Selector('.GB_frame') //# --> para id
        this.loginIframeNested = Selector ('#GB_frame') //["name='GB_frame'"]
        this.emailInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.LoginButton = Selector ('.submit_btn')


    }

    LoginFlow = async () =>  {
      await t //clase padre que tiene todas las funciones Ej: click, hover, etc
        .click(this.loginlink)
        .switchToIframe(this.loginIframe)  //se va al iframe por capas
        .switchToIframe(this.loginIframeNested)
        .typeText(this.emailInput,'gabriela.hernandez@coppel.com')
        .typeText(this.passwordInput,'gabriela1')
        .click(this.LoginButton)
        .switchToMainWindow()

    }

  }


  export default new LandingPage() //Por default se va a exportar la clase landingPage


  //si tengo otras seria
  //export new "Nombre de la clase"
