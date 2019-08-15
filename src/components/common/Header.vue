<template>
    <div>
        <div class="top-info">
          <img src="../../assets/img/conference-logo.jpg" class="logo">
              <div class="conferencename">
                The 6th International Symposium on Electromagnetic Compatibility (ISEMC'2019, Nanjing)
              </div>
              <div  class="condate">
                November 1-4,2019,Nanjing,China
              </div>
              
        </div>                 
          
                
        <div>
          <el-menu theme="dark" default-active="1" class="el-menu-demo navbar" mode="horizontal" :router="true">
            <template v-for="item in items">
              <template v-if="item.subs">
                <el-submenu :index="item.index" :key="item.index" class="elmenu">
                  <template slot="title">
                    <span slot="title" class="elmenu">{{ item.title }}</span>
                  </template>
                  <template v-for="subItem in item.subs">
                    <!-- <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                      <template slot="title">{{ subItem.title }}</template>
                      <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                            {{ threeItem.title }}
                      </el-menu-item>
                    </el-submenu> -->
                    <el-menu-item :index="subItem.index" :key="subItem.index">
                      {{ subItem.title }}
                    </el-menu-item>
                  </template>
                </el-submenu>
              </template>
              <template v-else>
                <el-menu-item :index="item.index" :key="item.index">
                  <span slot="title">{{ item.title }}</span>
                </el-menu-item>
              </template>
            </template>
           
          </el-menu>
          
        </div>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                dialogFormVisible: false,
                formLabelWidth: '120px',
                userinfo:'',
                loginauto:false,
                cookieuser:'',
                form: {
                  username: '',
                  password: ''
                },
                items: [
                    {
                        index: 'Home',
                        title: 'Home'
                    },
                    {
                        // index: 'previous',
                        index: 'KeynoteSpeech',
                        title: 'Keynote Speech'
                    },
                    {
                        index: 'committee',
                        title: 'Committee/TPC',
                    },
                    {
                        index: 'schedule',
                        title: 'Schedule',
                        
                    },
                    
                    {
                        index: 'CallforPaper',
                        title: 'Call for Paper',
                        
                    },
                    
                    // {
                    //     index: '6',
                    //     title: 'Call for Paper',
                    //     subs: [
                    //         {
                    //             index: 'ImportantDates',
                    //             title: 'Important Dates'
                    //         },
                    //         {
                    //             index: 'Topics',
                    //             title: 'Topics'
                    //         }
                            
                    //     ]
                    // },
                    {
                        index: 'register',
                        title: 'Registration'
                    },
                    {
                        index: 'Travel',
                        title: 'Travel'
                    },
                    {
                        index: 'PastConferences',
                        title: 'Past Conferences'
                    }
                    
                    
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
            
        }
        
    }
    
</script>


<style type="text/css">
.head{
  float: right;
}
.head a{
    text-decoration:none;
}

.aleft{
    text-align: left;
}
.aright{
    text-align: right;
}
/*.nav{
  width:90%;
  margin:0 auto 0;
  position:fixed;
  top:0px;
  _position:absolute;
  _top:expression(documentElement.scrollTop + "px"); 
  z-index:9999; 
  text-align:left;
}*/
.conferencename{
  font-size: 25px;
  font-family:'Oswald Medium';
  color: #0066CC;
}
.condate{
  color: #AAAAAA;
  font-family:'Oswald Light';
  font-size: 20px;
}
.el-menu {
    background-color: #0066CC !important;
  }
.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item:hover, .el-menu--horizontal.el-menu--dark .el-submenu .el-submenu-title:hover, .el-menu-item:hover, .el-submenu__title:hover{
    background-color: #409EFF !important;
}
 
  .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active, .el-submenu.is-active, .el-submenu__title.is-active{
    /*color: #FFDC6E;*/
     background: #409EFF !important;
     color: white !important;
  }
 
  .el-menu-item, .el-submenu__title {
    color: #C0C0C0 !important;
    font-family: 'SourceSansPro Semibold' !important;
    font-size: 17px !important;
  }

  
/*.navbar{
  
  background-color: #0066CC;
  
}*/

.logo{
  width: 200px;
  float: right;
}


</style>

<style>
@import "../css/base.css"
@import "../css/layout.css"
@import "../css/common.css"
/*@import "./components/css/swiper-3.4.2.min.css"*/
</style>
