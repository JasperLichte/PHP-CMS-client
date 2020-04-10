import Api from "./Api";
import PreflightResponse from "./responses/PreflightResponse";
import GetPageResponse from "./responses/GetPageResponse";
import GetConfigResponse from "./responses/GetConfigResponse";

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

}
