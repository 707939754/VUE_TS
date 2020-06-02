import { Component, Vue } from "vue-property-decorator";
import "./home.less";

@Component
export default class Home extends Vue {
    public render() {
        return (
            <div>
                home
            </div>
        )
    }
}