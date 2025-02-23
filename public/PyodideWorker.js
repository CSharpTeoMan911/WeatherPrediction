/* eslint-disable no-undef */

var self = this;
self.addEventListener('message', async (event) => {
  if (event.data === "Load Pyodide" && self.pyodide == null) {
    self.importScripts("https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js");
    self.pyodide = await loadPyodide();
    await self.pyodide.loadPackage("micropip");
    const micropip = self.pyodide.pyimport("micropip");
    await micropip.install('scikit-learn');
    self.postMessage("Pyodide loaded");
  }
  else if (event.data[0] !== null && self.pyodide !== null) {
    const day = event.data[1];
    const month = event.data[2];
    const year = event.data[3];
    const script = event.data[4];

    const python = `${script + '\n\n'
      +
      'predict(' + "'" + event.data[0] + "', " + day + ',' + month + ',' + year + ')'}`

    let prediction = await pyodide.runPythonAsync(python);
    self.postMessage(`Predicted temperature: ${prediction}`);
  }
});
