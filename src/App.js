import React, { useState, useEffect } from "react";

import useCustomFetch from "./hooks/useCustomFetch";

import "./App.css";

const App = () => {
  const [urlOne, setUrlOne] = useState(null);
  const [urlTwo, setUrlTwo] = useState(null);

  const dataFetchOne = useCustomFetch(urlOne);
  const { data: dataOne, loading: loadingOne } = dataFetchOne;

  const dataFetchTwo = useCustomFetch(urlTwo);
  const { data: dataTwo, loading: loadingTwo } = dataFetchTwo;

  useEffect(() => {
    setUrlOne("https://sheltered-earth-84596.herokuapp.com/articles");
    console.log(dataOne);
    setUrlTwo("https://jsonplaceholder.typicode.com/users");
    console.log(dataTwo);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Custom Hook_fetch data</h1>
        <div className="data-container">
          {loadingOne && urlOne && <div>Loading...</div>}
          {!loadingOne && <h2>Data One</h2>}
          {!loadingOne &&
            dataOne &&
            dataOne.map(item => (
              <div className="data-field" key={item._id}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
        </div>

        <div className="data-container">
          {loadingTwo && urlTwo && <div>Loading...</div>}
          {!loadingTwo && <h2>Data Two</h2>}
          {!loadingTwo &&
            dataTwo &&
            dataTwo.map(item => (
              <div className="data-field" key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.email}</p>
              </div>
            ))}
        </div>
      </header>
    </div>
  );
};

export default App;
