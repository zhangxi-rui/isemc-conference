
 <template>
    <div id="app">
        <div class="main" v-if="info">
            <router-view></router-view>
        </div>
        <div class="main" v-if="!info">
            <p>暂不支持IE浏览器</p>

        </div>
    </div>
    
</template>


<style rel="stylesheet">
    @import "../../components/css/base.css"
    @import "../../components/css/layout.css"
    @import "../../components/css/common.css"
    @import "../../components/css/font.css"
    /*@import "../../assets/font/font.css"*/
</style>

<script type="text/javascript">
	import {IEVersion} from '../../../static/filter.js' 
export default {
	 data(){
        return{
            info:false
        }
    },
    mounted(){
            
            // this.logauto();
        this.getdata();
    },
    methods:{
        // IE:function(){
        //      IEVersion();
        // },
        getdata(){
        	var iev = IEVersion();
        	if(iev<12&&iev!=-1){
    			// alert('你目前的IE版本为'+ie+'版本太低，请升级！');
    			this.info=false;
    		// window.location.href="http://windows.microsoft.com/zh-CN/internet-explorer/downloads/ie";
    		}
    		else{
    			this.info=true;
    		}
        	console.log(iev);
        }

    }
}
 </script>