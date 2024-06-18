
export default class Todo {
    private id: number;
    private title: string;
    public complited?: boolean

    constructor(id: number, title: string, complited = false) {
        this.id = id;
        this.title = title;
        this.complited = complited;
    }

    public getId(): number { return this.id; }
    public getTitle(): string { return this.title; }
    public setTitle(value: string) { this.title = value; }
    // public isComplited(): boolean { return this.complited; }
    // public setComplited(value: boolean) { this.complited = value;}
}
