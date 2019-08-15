<template>
  <div class="main-container">
    <div class="about-container">
	    	<div class="title">
	    		注册费用
	    	</div>
	    	<div class="details center">
          <div>
            <p class="item">注册费（主要会议）</p>
            <div>
                <el-table class="center"
                  :data="tableMain1"
                  border
                  style="width: 360px"
                  >
                  <el-table-column
                    prop="register"
                    label="全体会议注册（作者）"
                    width="220">
                  </el-table-column>
                  <el-table-column
                    prop="deadline"
                    label="费用"
                   >
                  </el-table-column>
                </el-table>
              
            </div>
            <div class="padding30">
              
                <el-table class="center"
                  :data="tableMain2"
                  border
                  style="width: 400px"
                  >
                  <el-table-column
                    prop="register"
                    label="全体会议注册（非作者）"
                    width="220">
                  </el-table-column>
                  <el-table-column
                    prop="deadline1"
                    label="费用"
                   >
                   </el-table-column>
                   <!-- <el-table-column
                    prop="deadline2"
                    label="9月1日之后"
                   >
                  </el-table-column> -->
                </el-table>             
            </div>             
            
          </div>
          <!-- <div class="right">
            <ul class="daohang">
              <li><router-link to="/registerCost">注册费用</router-link></li>
              
              <li><router-link to="/register">现在注册</router-link></li>
            </ul>
          </div> -->
	    	</div>
	    </div>
  </div>
</template>

<script>
import Jquery from '../../../assets/jquery-3.3.1.min.js'
export default {
  data(){
    return{
      tableMain1: [{
          register:'会员',
          deadline:'1000元'
        },{
          register:'非会员',
          deadline:'1250元'
        } ],
        tableMain2:[{
          register:'会员',
          deadline1:'500元',          
        },{
          register:'非会员',
          deadline1:'600元',

        } ]
    }
  },
  mounted() {
    this.getData()
  },
  methods: { 
    
  } 
}


</script>

<style scoped>
  p{
    display: block;
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


  table, th, td
  {
  border: 1px solid black;
  }

  .details{
  	padding-left: 50px;
    padding-right: 50px;
    padding-top: 20px;
    overflow: auto;
  }

  .center{
    text-align: center;
    margin:auto ;
    font-size: 17px;
  }

  .padding30{
    padding-top: 30px;
  }
  .item{
    padding-top: 40px;
    font-weight: normal;
    padding-bottom: 20px;
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