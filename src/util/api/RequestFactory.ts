import ApiResponse from "./ApiResponse";
import Api from "../Api";
import PreflightResponse from "./responses/PreflightResponse";
import GetPageResponse from "./responses/GetPageResponse";

export default class RequestFactory {

    private static license: string = '';

    private static async makeGetRequest<T>(obj: T, url: string): Promise<ApiResponse<T>> {
        const res = await Api.get(url, RequestFactory.license);
        // @ts-ignore
        return (new ApiResponse(obj.deserialize(res.data.data))).deserialize(res);
    }

    private static async makePostRequest<T>(obj: T, url: string, body: {}): Promise<ApiResponse<T>> {
        const res = await Api.post(url, RequestFactory.license)(body);
        // @ts-ignore
        return (new ApiResponse(obj.deserialize(res.data.data))).deserialize(res);
    }

    public static async preflight(license: string) {
        RequestFactory.license = license;
        return RequestFactory.makeGetRequest<PreflightResponse>(
            new PreflightResponse(),
            `/preflight.php`
        );
    }

    public static async getPage(slug: string) {
        return RequestFactory.makeGetRequest<GetPageResponse>(
            new GetPageResponse(),
            `/page/get.php?p=${slug}`
        );
    }

}
