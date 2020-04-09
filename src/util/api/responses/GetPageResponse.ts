import ResponseData from "./ResponseData";
import Page from "../../models/Page";

export default class GetPageResponse implements ResponseData {

    page: Page|null = null;

    deserialize(input: {}): GetPageResponse {
        if (!input) {
            return this;
        }

        // @ts-ignore
        input['page'] && (this.page = (new Page()).deserialize(input['page']));

        return this;
    }

}
