import Serializable from "../interfaces/Serializable";

export default class User implements Serializable {

    id: number = 0;
    email: string = '';
    isAdmin: boolean = false;

    deserialize(input: {}): User {
        if (!input) {
            return this;
        }

        // @ts-ignore
        input['id'] && (this.id = parseInt(input['id']));
        // @ts-ignore
        input['email'] && (this.id = `${input['email']}`);
        // @ts-ignore
        input['isAdmin'] && (this.isAdmin = !!input['isAdmin']);

        return this;
    }

}
