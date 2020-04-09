import React, {useEffect, useState} from 'react';
import RequestFactory from "./util/models/api/RequestFactory";

function App() {

  useEffect(() => {
    RequestFactory.preflight('123').then((res) => {
      console.log(res);
    })
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
