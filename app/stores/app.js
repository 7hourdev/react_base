import {observable, computed} from 'mobx';

class AppStore {
  @observable loggedIn = false;
  @observable prevUrl = undefined;

  constructor(){
    this.isLoggedIn();
  }

  isLoggedIn(){
  }
}

var singleton = new AppStore();
export default singleton;
