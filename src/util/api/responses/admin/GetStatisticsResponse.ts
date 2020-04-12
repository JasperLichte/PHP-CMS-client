import ResponseData from "../ResponseData";
import Statistics from "../../../models/Statistics";

class GetStatisticsResponse implements ResponseData {

    statistics: Statistics = new Statistics();

    deserialize(input: {}): GetStatisticsResponse {
        if (!input) {
            return this;
        }

        // @ts-ignore
        this.statistics = (new Statistics()).deserialize(input['statistics']);

        return this;
    }

}

export default GetStatisticsResponse;
