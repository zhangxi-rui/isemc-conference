<template>
  <div class="main-container">
    <div class="about-container">
      
        <div class="details">
          <div>
            <!-- <el-table :data="tabledata" style="width: 700px">
              <el-table-column fixed label="Role" width="500">
                <p>{{tableData.committeeType}}</p>
              </el-table-column>
              <el-table-column fixed label="Name">
                <p>{{tableData.username}}</p>
              </el-table-column>
            </el-table> -->
            <el-table
              :data="tableData"
              :span-method="objectSpanMethod"
              border
              style="width:900px; margin-top: 20px; margin:auto; font-size:20px;">
              <el-table-column
                prop="committeeType"
                label="Role"
                align="left"
                width="400">
              </el-table-column>
              <el-table-column
                prop="username"
                label="Name"
                align="left">
              </el-table-column>
             
            </el-table>
          </div>
        </div>
       <!--  <div class="right">
          <ul class="daohang">
            <li><router-link to="/committee">主办单位</router-link></li>
            <li><router-link to="/editor">编辑人员</router-link></li>
          </ul>
        </div> -->
      </div>
  </div>
</template>

<script>
import Jquery from '../../../assets/jquery-3.3.1.min.js'
export default {
  data(){
    return{
      data:'',
      // tableData:[],
      tableData: [{
          committeeType:'Honor Conference Chair',
          username:'Shanghe Liu'
        },{
          committeeType:'Conference Chairs',
          username:'Yuanan Liu, Lihua Shi, Wenyan Yin'
        },{
          committeeType:'Executive Chair',
          username:'Qingsheng Zeng'
        },{
          committeeType:'Technical Program Committee Chairs',
          username:'Shufang Li , Hongxin Zhang , Ming Su'
        },{
          committeeType:'Technical Organizing Committee Chairs',
          username:'Dan Shi, Wenhao Fan'
        },{
          committeeType:'Technical Program Committee Memebers',
          username:'Dan Shi , Dongmei Mu , Shulan Li , Wenhao Fan , Yong Li , Shanghe Liu , Qun Wu , Yuanan Liu , Donglin Su , Zhenghui Xue , Lihua Shi , Yazhou Chen , Hua Zhang , Wenyan Yin , Quanyuan Feng , XiaoFeng Hu , Yerong Zhang , Tong Wu , Haijing Zhou , Changjun Liu , Anping Li , Liang Chang , Guizhen Lu , Hongxin Zhang , Zhengwei Du , Guohui Yang , Jinling Zhang , Xiuyin Zhang , Rui Zhang , Sheng Sun , Shiwei Qu , Tangming Chun , Fangming Chen , Yang Qiu , Xiaofei Zhang , Hongbo Wang , Hongbo Tao , Jingjing Shi , Qingshen Zeng , Shufang Li , Yumao Wu , Qi Wu , Guozhen Guo , Xiaojia Qian , Lijun Yao , Zhongyuan Zhou , Wenli Zhu , Qiang Cui , Qifeng Liu , Yiming Zhen , Wei Xu , Wanquan Qi , Jingyuan Li , Xuemei Huang'
        } ],
        
      spanArr: []
    }
  },
  mounted(){
    
  },
  methods:{

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

  li{
    font-size: 20px;
  }
  .about-container{
    min-height: 300px;
    background-color: #FCFCFC;
    text-align: left;
    padding-bottom: 50px;
    padding-top: 50px;
    overflow: auto;
  }

  .image{
    width: 150px;
    height: 200px;
    float: left;
    padding-right: 20px;
  }
  .details{
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 20px;
    overflow: auto;
  }

  .item{
    font-weight: normal;
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
  
  
</style>