import { Vue, Component, Prop } from "vue-property-decorator";
import "./AppHead.less";

@Component
export default class AppHead extends Vue {
    @Prop() headData: any;

    @Prop() defaultIndex: any;

    @Prop() iscollapse: any;

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
        console.log();
    }

    /**
     * 渲染
     */
    public render() {
        return (
            <div>
                <el-menu class="appmenu" default-active={this.defaultIndex} mode="vertical" on-select={this.selectItem}
                    background-color="#2f4055" text-color="#fff" active-text-color="#ffd04b" router={true} collapse={this.iscollapse}>
                    {
                        this.headData.map((item: any) => {
                            return (
                                <el-menu-item index={item.id}>
                                    <i class={item.icon}></i>
                                    <span slot="title" class="title">{item.name}</span>
                                </el-menu-item>
                            )
                        })
                    }
                </el-menu>
            </div>
        )
    }
}