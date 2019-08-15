<template>
  <div class="main-container">
    <div class="about-container">
    	<div class="hotal">
	    	<div class="title">
	    		往期会议
	    	</div>
	    	<div class="details">
	    		<p></p>
          <div class="lists">
            <p class="normal">往期会议</p>
            <ul>
              <li class="items" v-for="data in conference">
                <p>{{data.title}} -- {{data.conferenceStartTime}}</p>
                <!-- <a href="http://www.ieee-infocom.org/2017">http://www.ieee-infocom.org/2017</a> -->
              </li>
            </ul>
          </div>
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
      conference:''
    }
  },
  mounted() {
    this.getData()
  },
  methods: { 
    getData () { 
      var self = this ;
      $.ajax({ 
        url: this.GLOBAL.globalurl+'/api/manage/conference/selectAllHandle', 
        type: 'GET', 
        dataType: 'json', 
        conference:{},
        success: function (res) { 
          self.conference = res.data;
          console.log(res);
        },
        error:function(){
          console.log('数据查询失败');
        }
      });
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
  }
  .lists{
    padding-top: 25px;
  }
  .normal{
    font-weight: normal;
    font-size: 15px;
  }
  .items{
    padding-top: 20px;
  }
  .hotal_title{
    font-size: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: normal;
  }
  .font_normal{
    font-weight:normal;
    font-size: 15px;
  }
</style>

