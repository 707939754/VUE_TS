import { Vue, Component } from "vue-property-decorator";
import "./pictures.less";

@Component
export default class Picture extends Vue {

    /**
     * 渲染
     */
    public render() {
        return (
            <div>
                <app-upload></app-upload>
            </div >
        )
    }
}