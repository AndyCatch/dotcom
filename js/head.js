let public_projectName = "Loading... Loading... Loading...";
let public_isProject = false;
let public_testProj
const projectList = [
  { project: "vz-hp-vision", marquee: "Homepage Vision Verizon" },
  { project: "switchers", marquee: "Switchers Journey Verizon" },
  { project: "tbny", marquee: "Take Back New York Verizon" },
  { project: "defund-refund", marquee: "Defund Refund Planned Parenthood" },
  { project: "sonic-drive-in", marquee: "Sonic PWA Sonic Drive–In" },
  { project: "on-page-guidelines", marquee: "On Page Guidelines Verizon" },
  { project: "business-markets", marquee: "Business Markets Verizon" },
  { project: "archive-1", marquee: "Archive Various" },
];

// projectList[i].project = dataset.project
// projectList[i].marquee = marquee title

document.addEventListener("projectname", projectEventHandler);
function projectEventHandler(event) {
  console.log("<HEAD>Project name is: " + event.detail.titleName);
  public_projectName = event.detail.titleName;
  public_isProject = event.detail.isProject;
}
