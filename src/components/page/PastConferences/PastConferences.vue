
<template>
  <div class="main-container">
    <div class="about-container ">
      <div class="card-container" v-for="item in past">
        <el-row >
            <el-col :span="24">
              <el-card shadow="hover">
                  <div class="titlepast">{{item.title}}</div>
                  <img :src="item.img" class="pastimg">
                  <p>{{item.abstract}}<i class="el-icon-arrow-down icon" @click="downup(item)" v-show="item.fold"></i></p>
                  <div v-html="item.more" v-show="!item.fold"></div>
                  <div class="iconright"><i class="el-icon-arrow-up iconup" @click="downup(item)" v-show="!item.fold"></i></div>
                                  
              </el-card>
            </el-col>
        </el-row>
      </div>
      
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        past:[{
          img:require('../../../assets/img/lunbo.jpg'),
          title:"The 5th International Symposium on Electromagnetic Compatibility",
          abstract:"The 5th International Symposium on Electromagnetic Compatibility (EMC' Beijing 2017), co-organized by the Chinese Institute of Electronics and the IEEE EMC Society, was successfully held at the China National Convention Center from October 28th to 31st, 2017.",
          more:'<p>The General Chair of the event was Yuanan Liu and it was sponsored by Chinese Institute of Electronics, co-sponsored by the IEEE Beijing Chapter and Section and the National Key Laboratory of E3OE. We appreciated the commercial support from Huawei, Rohde & Schwarz and Shenzhen Yangzheng Technology Corporation. The local host was the Beijing University of Post and Telecommunications (BUPT) with Professor Liu Shufang serving as Master of Ceremonies. Zeng Qingsheng, Professor Wang Jianqing and Dr. William Radasky served as General co-Chairs and Shi Dan was technical program chair. </p><p>Professor Yuichi Hayashi from Nara Institute of Science and Technology in Japan, Professor Liu Yuanan from Beijing University of Posts and Telecommunications, Professor Sergio A. Pignari from Politecnico di Milano, Mr. Mike Violette from Washington Laboratory, and Professor Ming Yu from the Chinese University of Hong Kong were invited at the meeting. They made wonderful reports on the topics such as the current development and application of electromagnetic compatibility technology etc.</p><p>The three sub-meetings invited 157 authors to make wonderful reports on topics such as “electromagnetic compatibility measurement”, “electromagnetic biological effect”, “electromagnetic environment”, “antenna”, “electromagnetic standard” and “electromagnetic calculation”. It was rich in content and comprehensively displayed the latest achievements of electromagnetic compatibility technology in China and the world, and was highly praised by the participants.</p>',
          fold:true
        }]
      };
    },
    methods:{
      downup(item){
        item.fold = !item.fold;    
      }
    }
  }
</script>
<style type="text/css">
  .collapse{
    width: 90%;
  }
  .center1{
    padding-left: 10%;
  }
  .titlepast{
    font-size: 25px;
    font-family: 'SourceSansPro Semibold';
    font-weight: bold;
    text-align:center;
  }

  .card-container{
    width: 80%;
    padding-left: 10%;
    padding-bottom: 20px;
  }

  .icon:hover{
    color: #0066CC;
  }
  .iconright{
    /*position: relative;*/
    float: right;
    padding-bottom: 10px;
  }
  
  .iconup:hover{
    color: #0066CC;
  }
  .pastimg{
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;  
  }
</style>