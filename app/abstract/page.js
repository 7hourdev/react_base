import React, { Component } from 'react';
import { observer } from 'mobx-react';

import AppStore from 'stores/app';

@observer
class Abstract extends Component{

  renderUser(){
    return (
      <div>
        <h3>Temp User View</h3>
      </div>
    );
  }

  renderAdmin(){
    return 
      <div>
        <h3>Sorry you are unauthorized to view this page</h3>
      </div>;
  }

  renderNoAuth(){
    return <div>Not logged in</div>
  }

  render(){
    if (!AppStore.loggedIn){
      return this.renderNoAuth();
    }
    switch(AppStore.user.type){
      case 1:
        return this.renderAdmin();
      default:
        return this.renderUser();
    }
  }
}

export default Abstract;