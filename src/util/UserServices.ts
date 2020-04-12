import User from "./models/User";
import RequestFactory from "./api/RequestFactory";

export default class UserServices {

    public static async login(email: string, password: string): Promise<User|null> {
        const res = await RequestFactory.doLogin(email, password);
        return res.data.user;
    }

    public static async register(email: string, password: string): Promise<User|null> {
        const res = await RequestFactory.register(email, password);
        return res.data.user;
    }

    public static async logout(): Promise<boolean> {
        const res = await RequestFactory.doLogout();
        return (res.status === 200);
    }

}
