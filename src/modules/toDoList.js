export default class ToDo {
    constructor() {
        this.projects = [];
    }

    setProjects(projects) {
        this.projects = projects;
    }

    addProject(project) {
        this.projects.push(project);
    }
}