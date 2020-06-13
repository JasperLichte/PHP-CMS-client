import Api from "./Api";
import PreflightResponse from "./responses/PreflightResponse";
import GetPageResponse from "./responses/pages/GetPageResponse";
import GetConfigResponse from "./responses/GetConfigResponse";
import LoginResponse from "./responses/auth/LoginResponse";
import NoDataResponse from "./responses/NoDataResponse";
import RegisterResponse from "./responses/auth/RegisterResponse";
import GetStatisticsResponse from "./responses/admin/GetStatisticsResponse";
import CreateMdPageRequestBody from "./requests/CreateMdPageRequestBody";
import EditMdPageRequestBody from "./requests/EditMdPageRequestBody";
import GetPageGroupResponse from "./responses/pages/GetPageGroupResponse";
import GetJsonFromStoreResponse from "./responses/GetJsonFromStoreResponse";

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

    public static async createPage(body: CreateMdPageRequestBody) {
        return Api.makePostRequest<NoDataResponse>(
            new NoDataResponse(),
            `/admin/page/new.php`,
            body
        );
    }

    public static async editPage(body: EditMdPageRequestBody) {
        return Api.makePostRequest<NoDataResponse>(
            new NoDataResponse(),
            `/admin/page/edit.php`,
            body
        );
    }

    public static async deletePage(slug: string) {
        return Api.makeGetRequest<NoDataResponse>(
            new NoDataResponse(),
            `/admin/page/delete.php?p=${slug}`,
        );
    }

    public static async getPageGroup(slug: string) {
        return Api.makeGetRequest<GetPageGroupResponse>(
            new GetPageGroupResponse(),
            `/page/group/get.php?group=${slug}`,
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

    public static async getStatistics() {
        return Api.makeGetRequest<GetStatisticsResponse>(
            new GetStatisticsResponse(),
            '/admin/statistics/get.php'
        );
    }

    public static async getJsonFromStore(id: string) {
        return Api.makeGetRequest<GetJsonFromStoreResponse>(
            new GetJsonFromStoreResponse(),
            `/store/get.php?id=${id}`
        );
    }

    public static async saveJsonInStore(id: string, json: string) {
        return Api.makePostRequest<NoDataResponse>(
            new NoDataResponse(),
            `/admin/store/save.php?id=${id}`,
            {json}
        );
    }

}
