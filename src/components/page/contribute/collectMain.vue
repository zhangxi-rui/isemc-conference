<template>
  <div class="main-container">
    <div class="about-container">
	    	<div class="title">
	    		Topics 
	    	</div>
	    	<div class="details">
          <div>
            <!-- <p class="center">征集论文[主要会议]：PDF版本可在<a href="#">此处获取</a>。</p> -->
            <p class="padding30"> The symposium on EMC has been an important forum for researchers to share the advancement of  EMC fundamentals, technologies, management, and standards. Each symposium in the past years has attracted hundreds of researchers, engineers, and students engaged in various EMC related fields from all over the world. The wide application of ICT in industry, science, transportation, medical instrument, power electricity, has been putting forward new requirements for the orientations of EMC research, and bringing new challenges and problems in EMC modeling, computation, design, measurement, standardization, management. </p>
            <p class="contentTitle">EMC  Nanjing  2019  will  cover  the  following  topics but not limited to:</p>
            <ul class="padding30">
              <li v-for="item1 in data" class="contentTitle">{{item1.topic}}
                <ul>
                  <li v-for="item2 in item1.content" >{{item2}}</li>
                </ul>
              </li>
              <!-- <li>蜂窝网络</li>
              <li>云计算</li>
              <li>认知无线电网络</li>
              <li>协作网络</li> -->
            </ul>

          </div>
          <!-- <div class="right">
            <ul class="daohang">
              <li><router-link to="/conferenceDate">会议时间</router-link></li>
              <li><router-link to="/collectMain">会议投稿主题</router-link></li>                           
              <li><router-link to="/illustrateMain">会议投稿说明</router-link></li>
              
            </ul>
          </div> -->
	    	</div>
	    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      data:''
    }
  },
  mounted() {
    this.getData()
  },
  methods: { 
    getData () { 
      var self = this ;
      $.ajax({ 
        // url: this.GLOBAL.globalurl+'/api/manage/conference/getStatusOneHandle', 
        url: this.GLOBAL.globalurl+"/api/conferenceInfo/getTopics",
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
    overflow: auto;
    text-align: justify;
  }

  .center{
    text-align: center;
  }

  .padding30{
    padding-top: 30px;
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
  

</style>