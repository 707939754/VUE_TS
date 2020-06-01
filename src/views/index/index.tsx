import { Component, Vue } from "vue-property-decorator";
import "./index.less";
import router from '@/router';

@Component
export default class Index extends Vue {

    /**
     * 菜单数据
     */
    public headData: any = [
        {
            id: "/videos",
            name: "首页"
        },
        {
            id: "/pictures",
            name: "图片"
        },
        // {
        //     id: "3",
        //     name: "用户"
        // }
    ];

    /**
     * 渲染
     */
    public render() {
        return (
            <div>
                <el-container>
                    <el-header>
                        <app-head defaultIndex="/videos" headData={this.headData}></app-head>
                    </el-header>
                    <el-main>
                        <router-view />
                    </el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </div>
        )
    }
}
