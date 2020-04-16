import Serializable from "../interfaces/Serializable";

export default class Pagegroup implements Serializable {

    slug: string = '';
    pages: string[] = [];

    deserialize(input: {}): Pagegroup {
        // @ts-ignore
        if (!input) {
            return this;
        }

        // @ts-ignore
        input['slug'] && (this.slug = `${input['slug']}`);

        // @ts-ignore
        input['pages'] && (this.pages = input['pages'].filter(p => !!p).map(p => `${p}`));

        return this;
    }

}
