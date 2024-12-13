/* eslint-disable no-undef */

var self = this;

const func =  async() => {
  let pyodite = null;
  self.addEventListener('message', async(event) => {
    if(event.data === "Load Pyodide" && pyodite === null){
      console.log("LOADING");
      self.importScripts("https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js");
      pyodide = await loadPyodide(); 
      await pyodide.loadPackage("micropip");
      const micropip = pyodide.pyimport("micropip");
      await micropip.install('scikit-learn');
      self.postMessage("Pyodide loaded");
    }
    else if(event.data === "Run global model" && pyodite !== null){

    }
    else if(event.data === "Run london model" && pyodite !== null){

    }
  });
};

export default func;