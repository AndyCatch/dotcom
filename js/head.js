var public_projectName = "Loading.................";
var public_isProject = false;


document.addEventListener("projectname", projectEventHandler);

function projectEventHandler(event) {
  public_projectName = event.detail.titleName;
  public_isProject = event.detail.isProject;
  
  // console.log("<HEAD>projectEventHandler " + event);
  // console.log("<HEAD>projectEventHandler>public_projectName: " + event.detail.titleName);
  // console.log("<HEAD>projectEventHandler>isProject: " + event.detail.isProject);
}