class User {
  readonly socket: string;
  readonly name: string;
  readonly isAdmin: boolean;
  readonly isObserver: boolean;

  vote: string | null;

  constructor(name: string, id: string, isAdmin: boolean, isObserver: boolean) {
    this.name = name;
    this.socket = id;
    this.isAdmin = isAdmin;
    this.vote = null;
    this.isObserver = isObserver;
  }

  get hasVoted() {
    return this.vote ? true : false;
  }
}
export { User };
