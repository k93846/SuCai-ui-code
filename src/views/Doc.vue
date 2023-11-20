<template>
    <div class="layout">
        <Topnav :toogleMenuVisible="true" class="nav" />
        <div class="content">
            <transition name="aside">
                <aside v-if="menuVisible">
                    <div class="line-for-logo"></div>
                    <div class="logo-word"><strong>Su彩</strong></div>

                    <h2>
                        <svg class="icon" aria-hidden="true" style="margin-right:10px;">
                            <use xlink:href="#icon-wendang"></use>
                        </svg>文档
                    </h2>
                    <ol>
                        <li>
                            <router-link to="/doc/intro">介绍</router-link>
                        </li>
                    </ol>
                    <ol>
                        <li>
                            <router-link to="/doc/install">安装</router-link>
                        </li>
                    </ol>
                    <ol>
                        <li>
                            <router-link to="/doc/getstarted">开始使用</router-link>
                        </li>
                    </ol>


                    <h2>
                        <svg class="icon" aria-hidden="true" style="margin-right:7px;">
                            <use xlink:href="#icon--fuzhizujian"></use>
                        </svg>
                        组件
                    </h2>
                    <ol>

                        <li>
                            <router-link to="/doc/switch">Switch 组件</router-link>
                        </li>
                        <li>
                            <router-link to="/doc/button">Button 组件</router-link>
                        </li>
                        <li>
                            <router-link to="/doc/dialog">Dialog 组件</router-link>
                        </li>
                        <li>
                            <router-link to="/doc/tabs">Tabs 组件</router-link>
                        </li>
                    </ol>
                    <ol class="side-footer">
                        <div>
                            <a href="https://gitee.com/k93846/su-cai-ui-code" style="text-decoration: none;">
                                <svg>
                                    <use xlink:href="#icon-zhuandao"></use>
                                </svg>
                                gitee源码
                            </a>
                        </div>
                    </ol>

                </aside>
            </transition>
            <main @click="menuClose">
                <router-view />
            </main>
        </div>
        <DocBackground class="doc-back"></DocBackground>
    </div>
</template>
<script>
import { inject } from 'vue';
import Topnav from "../components/Topnav.vue";
import DocBackground from './Doc-background.vue';
export default {
    components: { Topnav, DocBackground },
    setup() {
        const menuVisible = inject('menuVisible')
        console.log('doc中menuVisible的值是' + menuVisible.value)
        const menuClose = () => {
            if (document.documentElement.clientWidth <= 500) {
                menuVisible.value = false
            }
        }
        return { menuVisible, menuClose }
    }
};
</script>
<style lang="scss" scoped>
.side-footer {
    color: rgba(141, 156, 234, 1);
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    position: absolute;
    top: 450px;

    div {
        &:hover {
            cursor: pointer;
        }


        svg {
            width: 32px;
            height: 32px;
            position: relative;
            top: 12px;
            animation: zhuandao 0.7s infinite linear alternate;



            @keyframes zhuandao {
                0%{transform: translateX(5px)}
                50%{transform: translateX(0px)}
                100%{transform:translateX(-2px)}

            }
        }
    }
}

.doc-back {
    position: absolute;
    z-index: 0;
}

.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;

    >.nav {
        flex-shrink: 0;
    }

    >.content {
        flex-grow: 1;
        padding-top: 60px;
        padding-left: 156px;

        @media (max-width: 500px) {
            padding-left: 0;
        }
    }
}

.content {
    display: flex;
    position: relative;
    z-index: 10;

    >main {
        flex-grow: 1;
        padding: 16px;
        background: rgba(255, 255, 255, 0.25);
        overflow: auto;
        height: calc(100vh - 68.61px);
    }
}

aside {
    flex-shrink: 0;
    background: lightblue;
    width: 150px;
    padding: 16px 0;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: calc(100% - 8px);
    z-index: 50;

    //以下来源于figma
    border-radius: 10px;
    background: linear-gradient(180deg, rgba(162, 234, 204, 1) 0%, rgba(162, 234, 204, 0.9) 100%);


    box-shadow: 0px 4px 52px 0px rgba(195, 208, 255, 0.48);

    >.line-for-logo {
        border-top: 1px solid rgba(203, 200, 200, 1);
        width: 127px;
        position: absolute;
        top: 60px;
        left: calc(50% - (127px/2));
        stroke-width: 1px;
        stroke: #CBC8C8;
        transform: rotate(-0.188deg);
        flex-shrink: 0;
        border-radius: 10px;
    }

    >.logo-word {
        color: rgba(14, 34, 142, 1);
        font-size: 20px;
        position: absolute;
        right: 10px;
        top: 14px;
    }

    //以上来源于figma

    >h2 {
        margin-bottom: 4px;
        padding: 0 2px;
        color: black;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    >ol {
        >li {
            color: black;
            font-family: Poppins;
            font-style: normal;
            font-weight: 500;
            line-height: normal;

            >a {
                display: block;
                padding: 4px 16px;
                text-decoration: none;
            }

            .router-link-active {
                background: white;
            }
        }
    }
}



.aside-enter-from {
    transform: translateX(-150px);
}

.aside-enter-active {
    transition: all 0.5s;
}

.aside-leave-to {
    transform: translateX(-150px);
}

.aside-leave-active {
    transition: all 0.7s;
}
</style>