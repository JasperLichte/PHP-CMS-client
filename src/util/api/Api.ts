import ApiResponse from "./ApiResponse";
import RequestFactory from "./RequestFactory";
import config from "../../config";

class Api {

    public static baseUrl = (config.PRODUCTION ? config.BASE_PROD_API_URL : config.BASE_DEV_API_URL);

    private static get(path: string, license: string): Promise<ApiResponse<any>> {
        return new Promise(async (resolve, reject) => {
            const url = new URL(`${Api.baseUrl}${path}`);
            url.searchParams.delete('license');
            url.searchParams.append('license', license);

            const res = await fetch(url.href);
            const json = await res.json();
            resolve((new ApiResponse(json)).deserialize(json));
        });
    }

    private static post(path: string, license: string) {
        return (body: {}) => {
            return new Promise(async (resolve, reject) => {
                const json = (await fetch(
                    `${Api.baseUrl}${path}`,
                    {
                        method: 'POST',
                        body: JSON.stringify({...body, license}),
                    }
                )).json();
                resolve((new ApiResponse(json)).deserialize(json));
            });
        }
    }

    public static async makeGetRequest<T>(obj: T, url: string): Promise<ApiResponse<T>> {
        const res = await Api.get(url, RequestFactory.license);
        // @ts-ignore
        return (new ApiResponse(obj.deserialize(res.data.data))).deserialize(res);
    }

    public static async makePostRequest<T>(obj: T, url: string, body: {}): Promise<ApiResponse<T>> {
        const res = await Api.post(url, RequestFactory.license)(body);
        // @ts-ignore
        return (new ApiResponse(obj.deserialize(res.data.data))).deserialize(res);
    }

}

export default Api;
