class DomHelper {

  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }

  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);
  }
}

class Component {

  constructor(hostElementId, insertBefore = false) {
    if (hostElementId) {
      this.hostElement = document.getElementById(hostElementId);
    } else {
      this.hostElement = document.body;
    }
    this.insertBefore = insertBefore;
  }

  detach() {
    if (this.element) {
      this.element.remove();
    }
  }

  attach() {

    this.hostElement.insertAdjacentElement(this.insertBefore ? 'afterbegin' : 'beforeend', this.element);
    // document.body.append(this.element);
  }
}

class Tooltip extends Component {

  constructor(closeNotifierFunction) {
    super();
    this.closeNotifier = closeNotifierFunction;
    this.create();
  }

  closeTooltip = () => {
    this.detach();
    this.closeNotifier();
  }

  create() {
    const toolTipEl = document.createElement('div');
    toolTipEl.className = "card";
    toolTipEl.textContent = "Dummy";
    toolTipEl.addEventListener('click', this.closeTooltip);
    this.element = toolTipEl;
  }

}

class ProjectItem {

  hasActiveTooltip = false;

  constructor(id, updateProjectListsFunction, type) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectToSwitchButton(type);
  }

  showMoreInfoHandler() {

    if (this.hasActiveTooltip) {
      return;
    }

    const toolTip = new Tooltip(() => {
      this.hasActiveTooltip = false;
    });
    toolTip.attach();
    this.hasActiveTooltip = true;
  }

  connectMoreInfoButton() {
    const projectItemEl = document.getElementById(this.id);
    const moreInfoBtn = projectItemEl.querySelector('button:first-of-type');
    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler);
  }

  connectToSwitchButton(type) {
    const projectItemEl = document.getElementById(this.id);
    let switchBtn = projectItemEl.querySelector('button:last-of-type');
    switchBtn = DomHelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === 'active' ? 'Finished' : 'Activate';
    switchBtn.addEventListener('click', this.updateProjectListsHandler.bind(null, this.id));
  }

  update(updateProjectListsFn, type) {
    this.updateProjectListsHandler = updateProjectListsFn;
    this.connectToSwitchButton(type);
  }
}

class ProjectList {

  projects = [];
  switchHandler;

  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type));
    }
  }

  setSwitchHandlerFunction(switchHandlerFxn) {
    this.switchHandler = switchHandlerFxn;
  }

  switchProject(projectId) {
    // const projectIndex = this.projects.findIndex(p => p.id === projectId);
    // this.projects.splice(projectIndex, 1);
    this.switchHandler(this.projects.find(p => p.id === projectId));
    this.projects = this.projects.filter(p => p.id !== projectId);
  }

  addProject(project) {
    this.projects.push(project);
    DomHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

}

class App {
  static init() {
    const activeProjectsList = new ProjectList('active');
    const finishedProjectsList = new ProjectList('finished');
    activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProject.bind(finishedProjectsList));
    finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList));
  }
}

App.init();