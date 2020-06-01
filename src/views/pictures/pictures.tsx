import { Vue, Component } from "vue-property-decorator";
import "./pictures.less";

@Component
export default class Picture extends Vue {

    public render() {
        return(
            <div>
                pictures
            </div>
        )
    }
}