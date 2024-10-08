export class User {
    id: number;
    email: string;
    password: string;
    name: string;
    token: string;
    constructor() {
        this.id = 0;
        this.email = '';
        this.password = '';
        this.name = '';
        this.token = '';
    }
}
