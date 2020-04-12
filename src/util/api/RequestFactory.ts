import Api from "./Api";
import PreflightResponse from "./responses/PreflightResponse";
import GetPageResponse from "./responses/GetPageResponse";
import GetConfigResponse from "./responses/GetConfigResponse";
import LoginResponse from "./responses/LoginResponse";
import NoDataResponse from "./responses/NoDataResponse";
import RegisterResponse from "./responses/RegisterResponse";

export default class RequestFactory {

    public static license: string = '';

    public static async getConfig() {
        return Api.makeGetRequest<GetConfigResponse>(
            new GetConfigResponse(),
            `/config/get.php`
        );
    }

    public static async preflight(license: string) {
        RequestFactory.license = license;
        return Api.makeGetRequest<PreflightResponse>(
            new PreflightResponse(),
            `/preflight.php`
        );
    }

    public static async getPage(slug: string) {
        return Api.makeGetRequest<GetPageResponse>(
            new GetPageResponse(),
            `/page/get.php?p=${slug}`
        );
    }

    public static async doLogin(email: string, password: string) {
        return Api.makePostRequest<LoginResponse>(
            new LoginResponse(),
            `/auth/login.php`,
            {email, password}
        );
    }

    public static async register(email: string, password: string) {
        return Api.makePostRequest<RegisterResponse>(
            new RegisterResponse(),
            `/auth/register.php`,
            {email, password}
        );
    }

    public static async doLogout() {
        return Api.makeGetRequest<NoDataResponse>(
            new NoDataResponse(),
            `/auth/logout.php`,
        );
    }

}
