import ApiResponse from "./ApiResponse";
import Api from "../Api";
import PreflightResponse from "./responses/PreflightResponse";
import GetPageResponse from "./responses/GetPageResponse";

export default class RequestFactory {

    private static license: string = '';

    private static async makeRequest<T>(obj: T, url: string): Promise<ApiResponse<T>> {
        const res = await Api.get(url);
        // @ts-ignore
        return (new ApiResponse(obj.deserialize(res.data.data))).deserialize(res);
    }

    public static async preflight(license: string) {
        RequestFactory.license = license;
        return RequestFactory.makeRequest<PreflightResponse>(
            new PreflightResponse(),
            `/preflight.php?license=${license}`
        );
    }

    public static async getPage(slug: string) {
        return RequestFactory.makeRequest<GetPageResponse>(
            new GetPageResponse(),
            `/page/get.php?p=${slug}&license=${RequestFactory.license}`
        );
    }

}
