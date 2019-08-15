<template>
  <div class="main-container">
    <div class="about-container">
	    	<div class="title">
	    		Important Dates
	    	</div>
	    	<div class="details center">
          <div>
            <!-- <p class="padding30">本次会议需要注意的时间节点：</p> -->
            <!-- <p>会议开始时间：{{data.conferenceStartTime}}</p>
            <p>会议结束时间：{{data.conferenceEndTime}}</p>
            <p>Paper Submission Deadline：{{data.submissionDeadline}}</p> -->
            <p>Paper Submission Deadline: May 31, 2019 </p>
            <p>Notification of Acceptance: June 30, 2019 </p>
            <p>Camera-Ready Manuscript Deadline: August 15, 2019</p>
            <p class="contentTitle">All submissions must be in electronic, PDF or WORD style. </p>
           
            
          </div>

        
	    	</div>
        <div class="title">
            Schedule
        </div>
        <div class="details">
          <div>
            <p class="padding20 center">Schedule for Symposium： <a href="" id="test" title="日程获取" v-on:click="getDownloadUrl">click here</a>。</p>
          </div>
        </div>

	    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      data:'',
       id:'',
      downloadUrl:''
    }
  },
  mounted() {
    this.getData1(),
    this.getData2()
  },
  methods: { 
    getData1 () { 
      var self = this ;
      $.ajax({ 
        // url: this.GLOBAL.globalurl+'/api/manage/conference/getStatusOneHandle', 
        url: this.GLOBAL.globalurl+"/api/conferenceInfo/getConferenceInfo",
        type: 'post', 
        dataType: 'json', 
        data:{"data":""},
        success: function (res) { 
          self.data = res.data;
          console.log(self.data);
        },
        error:function(){
          console.log('数据查询失败');
        }
      }) 
    },
     getData2 () { 
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
  p{
    display: block;
    /*font-size: 13px;*/
  }
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
    /*font-size: 13px;*/
  }
  .details{
  	padding-left: 50px;
    padding-right: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
    overflow: auto;
  }

  .center{
    text-align: center;
  }

  .padding20{
    padding-top: 20px;
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
</style>