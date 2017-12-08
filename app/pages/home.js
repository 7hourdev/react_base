import React from 'react';
import {observer} from 'mobx-react';

import Page from 'abstract/page';

@observer 
class Home extends Page{
  renderNoAuth() {
    return (
    	<div className="container content">
    		<h1>Hello World</h1>
    	</div>
	);
  }
}

export default Home;