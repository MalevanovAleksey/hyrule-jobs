import Todo from './Todo';

export default class DeadlineTodo extends Todo {
  private deadline: Date;

  constructor(id: number, title: string, deadline: Date, completed = false) {
    super(id, title, completed);
    this.deadline = deadline;
  }

  public getDeadline(): Date {
    return this.deadline;
  }

  public setDeadline(deadline: Date): void {
    this.deadline = deadline;
  }
}
