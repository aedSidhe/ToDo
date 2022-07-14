import Project from 'projects.js';
import Task from 'tasks.js';
import ToDo from 'toDoList.js';

export default class Storage {
    static saveToDoList(list) {
        localStorage.setItem('toDoList', JSON.stringify(list));
    }

    static getToDoList() {
        const toDoList = Object.assign(new ToDo(), 
        JSON.parse(localStorage.getItem('toDoList')));

        toDoList.setProjects(toDoList.getProjects()
        .map(project => Object.assign(new Project(), project)));

        toDoList.getProjects().array.forEach(project => project.setTasks(
            project.getTasks().map(task => Object.assign(new Task(), task))
        ));

        return toDoList;
    
        }

}