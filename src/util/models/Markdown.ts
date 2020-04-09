import Serializable from "../interfaces/Serializable";

export default class Markdown implements Serializable {

    content = '';
    htmlContent = '';
    description = '';

    deserialize(input: {}): Markdown {
        // @ts-ignore
        input['content'] && (this.content = input['content']);
        // @ts-ignore
        input['htmlContent'] && (this.htmlContent = input['htmlContent']);
        // @ts-ignore
        input['description'] && (this.description = input['description']);

        return this;
    }

}
