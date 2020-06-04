import { Component, Vue } from "vue-property-decorator";
import "./home.less";

@Component
export default class Home extends Vue {

    public login() {
        console.log();
    }

    /**
     * 渲染
     */
    public render() {
        return (
            <div>
                <el-button size="small" type="primary" on-click={this.login}>登录</el-button>
            </div>
        )
    }
}