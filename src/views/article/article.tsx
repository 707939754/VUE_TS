import { Component, Vue } from "vue-property-decorator";
import "./article.less";

@Component
export default class Article extends Vue {

    /**
     * 渲染
     */
    public render() {
        return (
            <div>
                article
            </div>
        )
    }
}