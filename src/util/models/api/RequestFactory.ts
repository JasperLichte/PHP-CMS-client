import ApiResponse from "./ApiResponse";
import Api from "../../Api";
import PreflightResponse from "./responses/PreflightResponse";

export default class RequestFactory {

    private static async makeRequest<T>(obj: T, url: string): Promise<ApiResponse<T>> {
        const res = await Api.get(url);
        // @ts-ignore
        return (new ApiResponse(obj.deserialize(res.data.data))
        ).deserialize(res);
    }

    public static async preflight(license: string) {
        return RequestFactory.makeRequest<PreflightResponse>(
            new PreflightResponse(),
            `/preflight.php?license=${license}`
        );
    }

}
