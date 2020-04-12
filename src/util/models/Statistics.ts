import Serializable from "../interfaces/Serializable";

export default class Statistics implements Serializable {

    totalRequests: number = 0;
    requestsByPath: {[key: string]: number} = {};

    deserialize(input: {}): Statistics {
        if (!input) return this;

        // @ts-ignore
        this.totalRequests = parseInt(input['totalRequests']);

        // @ts-ignore
        Object.keys(input['requestsByPath']).forEach(p => this.requestsByPath[p] = parseInt(input['requestsByPath'][p]));

        return this;
    }
}
