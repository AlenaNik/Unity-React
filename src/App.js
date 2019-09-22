
import React, {Component} from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';
// import UnityJsonFile from './Build/Unity-React_test';
// import UnityLoaderFile from './Build/UnityLoader';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Nav';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.unityContent = new UnityContent(
        "Build/Build.json",
        "Build/UnityLoader.js"
    );
  }

  render() {
    return (
        <div>
          <BrowserRouter>
            <Navbar/>
            <Unity unityContent={this.unityContent}
                   height="100%"
                   width="100%"
                   ref={component => this.component = component}
            />
            <Footer/>
          </BrowserRouter>

        </div>
    )
  }
}
export default App;