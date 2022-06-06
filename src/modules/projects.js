import { toDate, isToday, isThisWeek, subDays } from 'date-fns';
class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setTasks(tasks) {
        this.tasks = tasks;
    }

    getTasks() {
        return this.tasks;
    }

    findTask(task) {
        return this.tasks.find(tas => tas === task);
    }

    addTask(task) {
        this.tasks.push(task);
    }

    getTasksToday() {
        return this.tasks.filter(task => isToday(new Date(toDate(task.dueDate))));
    }
}
