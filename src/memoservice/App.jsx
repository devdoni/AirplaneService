import React from "react";
import Menubar from './Menubar'

import './style/app.css'
import './style/common.css'

const App = () => {
    return(
        <div id="wrap">
            <div style={
                {
                    textAlign   :'center',
                    fontWeight  :'bold',
                    fontSize    :'1.3em',
                    padding     :'10px',
                    margin      :'15px',
                }
            }>
                My Memo Service
            </div>
            <Menubar />
        </div>
    );
}

export default App;