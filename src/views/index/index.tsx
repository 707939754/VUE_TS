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
            id: "/",
            name: "首页",
            icon: "el-icon-s-home"
        },
        {
            id: "/article",
            name: "文章",
            icon: "el-icon-document"
        },
        {
            id: "/videos",
            name: "视频",
            icon: "el-icon-video-camera-solid"
        },
        {
            id: "/pictures",
            name: "图片",
            icon: "el-icon-picture"
        },
        // {
        //     id: "3",
        //     name: "用户"
        // }
    ];

    public iscollapse: any = false;

    public asideWidth: any = "150px";

    /**
     * 菜单收缩
     */
    public foldClick() {
        this.iscollapse = !this.iscollapse;
        if (this.iscollapse) {
            this.asideWidth = "64px";
        } else {
            this.asideWidth = "150px";
        }
    }

    /**
     * 渲染
     */
    public render() {
        return (
            <div class='container'>
                <el-container>
                    <el-aside width={this.asideWidth}>
                        <app-head defaultIndex="/" headData={this.headData} iscollapse={this.iscollapse}></app-head>
                    </el-aside>
                    <el-container>
                        <el-header>
                            <div class="head-left">
                                <i class="el-icon-s-fold" on-click={this.foldClick} />
                            </div>
                            <div class="head-right">
                                <div>
                                    <span style="font-size: 35px; color: #0095ff; margin-left: 30px;">博客</span>
                                    <span style="color: #0095ff;">--weblog</span>
                                </div>
                                <div>

                                </div>
                            </div>
                        </el-header>
                        <el-main>
                            <router-view />
                        </el-main>
                        <el-footer>2020 @Chuanecey Li</el-footer>
                    </el-container>
                </el-container>
            </div>
        )
    }
}
