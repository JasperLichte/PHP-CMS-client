import ResponseData from "./ResponseData";

class NoDataResponse implements ResponseData {

    deserialize(input: {}): NoDataResponse {
        return this;
    }

}

export default NoDataResponse;
