import React, {useEffect} from 'react';
import Api from "./util/Api";

function App() {

  useEffect(() => {
    Api.get('/preflight.php').then(console.log);
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
