import Serializable from "../interfaces/Serializable";
import Markdown from "./Markdown";

export default class Page implements Serializable {

    slug: string = '';
    title: string = '';
    markdown: Markdown|null = null;
    
    deserialize(input: {}): Page {
        // @ts-ignore
        this.slug = input['slug'];
        // @ts-ignore
        this.title = input['title'];

        // @ts-ignore
        this.markdown = (new Markdown()).deserialize(input['markdown']);

        return this;
    }

}
