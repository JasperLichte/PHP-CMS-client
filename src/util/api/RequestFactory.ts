import Api from "../Api";
import PreflightResponse from "./responses/PreflightResponse";
import GetPageResponse from "./responses/GetPageResponse";

export default class RequestFactory {

    public static license: string = '';

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
