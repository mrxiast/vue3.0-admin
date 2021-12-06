import myBtn from './demo';
let uiList = [myBtn]
export default {
  install (app, options) {
    uiList.forEach(item => {
      app.component(item.name, item)
    })
    console.log(app, 'app')

  }

}