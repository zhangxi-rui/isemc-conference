<template>
    
    <div class="wrapper">
        <v-head class="nav"></v-head>
        <div class="content-box " :class="{'content-collapse':collapse}">
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vFooter from './Footer.vue';
    import bus from './bus';
    export default {
        data(){
            return {
                tagsList: [],
                collapse: false
            }
        },
        // mounted () {
        //   // 事件监听滚动条
        //   window.addEventListener('scroll', this.watchScroll)
        // },
        // methods: { 
        //     watchScroll () {
        //         var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //          //  当滚动超过 50 时，实现吸顶效果
        //         if (scrollTop > 49) {
        //             this.navBarFixed = true
        //         } else {
        //             this.navBarFixed = false
        //         }
        //     }

        // },

        components:{
            vHead,vFooter
          
        },
        created(){
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })

            // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
            bus.$on('tags', msg => {
                let arr = [];
                for(let i = 0, len = msg.length; i < len; i ++){
                    msg[i].name && arr.push(msg[i].name);
                }
                this.tagsList = arr;
            })
        }
    }
</script>

<style type="text/css">
    .nav{
        text-align: left;
    }
    /*.navBarWrap {
        position:fixed;
        top:0;
        z-index:999;
    }*/
    /*.nav{
      width:90%;
      min-width: 1000px;
      margin:0 auto 0;
      position:fixed;
      top:0px;
      z-index:9999; 
      text-align:left;
    }*/
    /*.nav{
      
      position: fixed;
      margin:0 auto 0;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: left;
    }*/
    /*.posrela{
        padding-top: 160px;
        
    }*/

</style>