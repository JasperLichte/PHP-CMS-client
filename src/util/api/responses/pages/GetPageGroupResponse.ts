import ResponseData from "../ResponseData";
import PageGroup from "../../../models/PageGroup";

export default class GetPageGroupResponse implements ResponseData {

    group: PageGroup = new PageGroup();

    deserialize(input: {}): GetPageGroupResponse {
        if (!input) {
            return this;
        }

        // @ts-ignore
        input['group'] && (this.group = (new PageGroup()).deserialize(input['group']));

        return this;
    }

}
