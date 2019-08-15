<template>
  <div class="main-container">
    <div class="about-container">
	    	<div class="title">
	    		会议投稿说明
	    	</div>
	    	<div class="details">
          
	    	</div>
	    </div>
  </div>
</template>

<script>
import Jquery from '../../../assets/jquery-3.3.1.min.js'
export default {
  data(){
    return{
      data:''
    }
  },
  mounted() {
    
  },
  methods: { 
    
  } 
}


</script>

<style scoped>
  p{
    display: block;
    font-size: 13px;
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
    font-size: 13px;
  }
  .details{
  	padding-left: 50px;
    padding-right: 50px;
    padding-top: 20px;
    overflow: auto;
  }

  .item{
    font-weight: normal;
    font-size: 15px;
    padding-bottom: 30px;
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
  .list{
    padding-left: 20px;
  }
  .listpoint{
    list-style-type:disc;
  }
  .fontnormal{
    font-weight: normal;
  }
  .left{
    width: 70%;
    float: left;
    height: 100%;
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