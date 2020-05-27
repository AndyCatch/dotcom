let public_projectName = "Loading... Loading... Loading...";
let public_isProject = false;
document.addEventListener("projectname", projectEventHandler);
function projectEventHandler(event) {
  console.log("<HEAD>Project name is: " + event.detail.titleName);
  public_projectName = event.detail.titleName;
  public_isProject = event.detail.isProject;
}

document.addEventListener(sempliceEvents.transitions.done.type, transitionListener);

function transitionListener(event) {
    console.log("Event name is: " + event.type);
}