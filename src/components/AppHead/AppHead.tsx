import { Vue, Component, Prop } from "vue-property-decorator";
import "./AppHead.less";

@Component
export default class AppHead extends Vue {
    @Prop() headData: any;

    @Prop() defaultIndex: any;

    /**
     * 生命周期 mounted
     */
    public mounted() {
        // console.log(this.headData);
    }

    /**
     * 菜单点击
     */
    public selectItem() {
        console.log("1214");
    }

    /**
     * 渲染
     */
    public render() {
        return (
            <div>
                <el-menu default-active={this.defaultIndex} mode="horizontal" on-select={this.selectItem} background-color="#545c64"
                    text-color="#fff" active-text-color="#ffd04b" router={true}>
                    {
                        this.headData.map((item: any) => {
                            return (
                                <el-menu-item index={item.id}>{item.name}</el-menu-item>
                            )
                        })
                    }
                </el-menu>
            </div>
        )
    }
}