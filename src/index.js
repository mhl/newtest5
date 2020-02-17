import "./init";
// init is being called before the template is being rendered. Use the init function
// to import Flourish modules that add properties to the state object

export var data = {};
// If your template includes data tables, use this variable to access the data.
// Each of the 'datasets' in data.json file will be available as properties of the data.

export var state = {
  input: ""
}

export function draw() {
  g.select(".input")
}
// The draw function is called when the template first loads

export function update() {
  g.select(".input")
}
  
// The update function is called whenever the user changes a data table or settings
// in the visualisation editor, or when changing slides in the story editor.

// Tip: to make your template work nicely in the story editor, ensure that all user
// interface controls such as buttons and sliders update the state and then call update.
