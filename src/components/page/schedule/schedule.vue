<template>
  <div class="main-container">
    <div class="about-container center">
      <!-- <p>该页面尚未开放</p> -->
      <p>coming soon</p>
    </div>
  </div>
</template>

<style type="text/css">
  .center{
    text-align: center;
  }
</style>

<!-- <template>
  <div class="main-container">
    <div class="about-container">
	    	<div class="title">
	    		主要会议流程和地点
	    	</div>
	    	<div class="details">
          <div class="left">
            <p class="center">主要会议流程和地点：PDF版本可在<a href="" id="test" title="日程获取" v-on:click="getDownloadUrl">此处获取</a>。</p>
          </div>
	    	</div>
	    </div>
  </div>
</template>

<script>
import Jquery from '../../../assets/jquery-3.3.1.min.js'
export default {
  data(){
    return{
      id:'',
      downloadUrl:''
    }
  },
  mounted() {
    this.getData()
  },
  methods: { 
    getData () { 
      var self = this ;
      $.ajax({ 
        url: this.GLOBAL.globalurl+'/api/manage/conference/getStatusOneHandle', 
        type: 'GET', 
        dataType: 'json', 
        data:{},
        success: function (res) { 
          self.id = res.id;
        },
        error:function(){
          console.log('数据查询失败');
        }
      }) 
    },
    getDownloadUrl(){
      var self=this;
      this.downloadUrl=this.GLOBAL.globalurl+'/api/conferenceInfo/download/'+this.id;
      $("#test").attr("href",self.downloadUrl);
    } 
  } 
}


</script>

<style scoped>
  a {
    color: #0066FF ;
    text-decoration: none;
  }

  a:hover {
    color: #cd0200;
    text-decoration: underline;
  }
  a:visited {
    color: #0066FF;
    text-decoration: none;
  }

  li {
    font-size: 13px;
  }
  .details{
  	padding-left: 50px;
    padding-right: 50px;
    padding-top: 20px;
    overflow: auto;
  }

  .center{
    text-align: center;
  }

  .padding30{
    padding-top: 30px;
  }
  .item{
    font-weight: normal;
    font-size: 15px;
    padding-bottom: 30px;
  }

  .left{
    width:70%; 
    float:left; 
    height:100%; 
  }
  .right{
    width:30%; 
    float:right; 
    height:100%; 
  }
  .daohang{
    padding-left: 100px;
    font-weight: normal;
    font-size: 20px;
  }
</style> -->