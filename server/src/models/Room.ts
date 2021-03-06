import { User } from '@models/User';
import { Task } from '@models/Task';

class Room {
  id: string;
  history: Task[];
  inactiveTime: number;
  private task: Task;
  private users: User[];
  private observers: User[];

  constructor(id: string) {
    this.id = id;
    this.task = new Task('Waiting for first task...');
    this.users = [];
    this.history = [];
    this.observers = [];
    this.inactiveTime = new Date().getTime();
  }

  howLongInactive(actualTime: number) {
    return actualTime - this.inactiveTime > 3600000 ? this.id : null;
  }

  getUser(name: string): User {
    const user = this.allParticipaties.find(user => user.name === name);
    if (!user) throw new Error(`User ${name} does not belong to room ${this.id}`);
    return user;
  }

  getAdmin(id: string): User | null {
    const roomAdmin = this.allParticipaties.find(user => user.isAdmin === true) ?? null;
    return roomAdmin;
  }

  addUser(name: string, socket: string, isAdmin: boolean, isObserver: boolean): User {
    let userName = name;
    let numberUser = 0;

    while (this.isTaken(userName)) {
      numberUser++;
      userName = name + '(' + numberUser + ')';
    }

    name = userName;
    const user = new User(name, socket, isAdmin, isObserver);
    isObserver ? this.observers.push(user) : this.users.push(user);
    return user;
  }

  deleteUser(name: string, isObserver: boolean) {
    let userName = name;
    if (this.isTaken(userName)) {
      if (isObserver) {
        this.observers = this.observers.filter(user => user.name !== userName);
      } else this.users = this.users.filter(user => user.name !== userName);
    } else throw new Error('This user does not exists.');
  }

  private isTaken(userName: string): boolean {
    if (this.allParticipaties.find(user => user.name === userName)) return true;
    return false;
  }

  hasEveryoneVoted(): boolean {
    return !this.users.some(user => user.vote === null);
  }

  get allParticipaties() {
    return [...this.users, ...this.observers];
  }

  clearVotes() {
    this.users.map(user => (user.vote = null));
  }

  getUsers(): User[] {
    return [...this.users];
  }

  getVotes(): Array<Pick<User, 'name' | 'vote'>> {
    return this.users.map(user => ({ name: user.name, vote: user.vote }));
  }

  getTask(): Task {
    return this.task;
  }

  setTask(title: string): void {
    if (!title) throw new Error('Task title is empty');
    this.task = new Task(title);
  }

  archiveTask() {
    this.task.setEstimationTime();
    this.history.push(this.task);
  }
}

export { Room };
