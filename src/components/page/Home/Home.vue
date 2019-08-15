<template>
  <div class="main-container">
      <el-carousel :height="bannerHeight">
        <el-carousel-item v-for="item in dataimg" :key="item">
            <img :src="item.src" class="lunboImg">
        </el-carousel-item>
      </el-carousel>
      <!-- <img src="../../../assets/img/lunbo.jpg" class="lunbo"> -->
    <div class="about-container">

      <div class="conference">
        <div class="title">
          Introduction
        </div>
        <div class="details">
          <p class="center contentTitle">{{conference.title}}</p>
          <div>
            <p  class="content" id="introduce"></p>
          </div>
        </div>
      </div>

      <div class="news">
        <div class="title">
          News and Announcement
        </div>
        <div class="details">
          <div class="item" v-for="item in notification">
            <p class="contentTitle">{{item.title}}</p>
            <p class="content">{{item.content}}</p>
          </div>
        </div>
      </div>

      <div class="row-blow">
        <div class="title">
          Sponsors
        </div>
        <div class="center">
          <div class="imageList">
            <ul class="list">
              <!-- <li><img src="../../../assets/img/DianZiXieHui.jpg" class="sponsor"></li>
              <li><img src="../../../assets/img/TongXinXueHui.jpg" class="sponsor"></li> -->
              <li><img src="../../../assets/img/IEEE1.jpg" class="sponsor"></li>
             <!--  <li><img src="../../../assets/img/EMC1.jpg" class="sponsor"></li> -->
              <li><img src="../../../assets/img/beiyou.gif" class="sponsor"></li>
              <!-- <li><img src="../../../assets/img/nanhang.jpg" class="sponsor"></li>
              <li><img src="../../../assets/img/E3OE.jpg" class="sponsor"></li> -->
              
            </ul>
            
          </div>
         
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {transBrP} from '../../../../static/trans.js'
 export default {
  name: 'carrousel',
  data () {
    return {
      dataimg:[
      {
        src:require('../../../assets/img/lunbo1.jpg')
      },
      {
        src:require('../../../assets/img/lunbo2.jpg')
      },
      {
        src:require('../../../assets/img/lunbo3.jpg')
      }],
      conference:{
        title:"The 6th International Symposium on Electromagnetic Compatibility",
        introduce:"The 6th International Symposium on Electromagnetic Compatibility will be held in Nanjing, China during November 1-4, 2019. The Symposium will be focused on the new developed techniques in the fields of EMC. EMC Nanjing invites all the researchers and scientists in EMC-related fields to submit and present the state-of-art research results. This Symposium is sponsored by Chinese Institute of Electronics, Chinese Institute of Communications, IEEE EMC Beijing Chapter, IEEE EMC Society and etc,and hosted by Beijing University of Posts and Telecommunications, Nanjing University of Aeronautics and Astronautics, and National Key Lab of E3OE.<br/><p>Since 1992, the Symposium on EMC has been an important forum for researchers to share the advancement of EMC fundamentals, technologies, management, and standards. Each symposium in the past years has attracted hundreds of researchers, engineers, and students engaged in various EMC related fields from all over the world.</p><p>The wide application of ICT in industry, science, transportation, medical instrument, power electricity, has been putting forward new requirements for the orientations of EMC research, and bringing new challenges and problems in EMC modeling, computation, design, measurement, standardization, management. EMC’ Nanjing 2019 will provide a rich scientific program of high quality and a broad forum for both academia and industry sectors to exchange the latest advancement and progress in meeting the requirements, coping with the challenges, and solving the problems. The scientists and engineers are invited to submit original research results. Meanwhile, an exhibition will be held to demonstrate updated software, instruments, systems and solutions. Excellent papers will be chosen and recommended to be published in related journals.</p>"
      },
      notification:[
      {
        title:"2019 6th International Symposium on Electromagnetic Compatibility",
        content:"The 6th International Symposium on Electromagnetic Compatibility will be held in Nanjing, China during November 1-4, 2019"
      },{
        title:"About EI Index",
        content:"All papers that have been accepted by past conferences have been indexed by EI.  As the same, all papers accepted by ISEMC'2019 will be submitted to the EI Index."
      }
      ],
      bannerHeight:''
    }
  },
  mounted() {
    this.getData();
    this.setSize();
    
  },
  methods: { 
    getData () { 
      document.getElementById("introduce").innerHTML=this.conference.introduce;
      
    } ,
    setSize: function () {
      this.bannerHeight = $(window).width()*0.3 + 'px';;
      // if(this.bannerHeight > 375) this.bannerHeight = 375;
      // if(this.bannerHeight < 360) this.bannerHeight = 360;
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

 /* li {
    font-size: 13px;
  }*/
  
  
  /*.lunbo{
    position: relative;
  	width: 100%;
    height: 0;
    padding-bottom: 100%;
  }*/

  .lunboImg{
    width: 100%;
    
    /*height: inherit;*/
    /*min-height: 450px;*/
  }

  /*.lunbo-box img{
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    margin: auto;
  }*/

  /*.lunboimg{
    width: 100%;
  }*/
  
  .details{
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 20px;
  }
  .conference .details .center{
    text-align: center;
    font-size: 25px;
  }
  .conference .details .content{
    padding-top: 10px;
  }
  .news{
    padding-top: 50px;
  }
  .news .item{
    padding-bottom: 5px;
  }
  .news .content{
    padding-bottom: 10px;
  }
  .row-blow{
    padding-top: 50px;
  }
  .imagesize{
    vertical-align: middle;
  }
  .center{
    text-align: center;
  }
  /*.ui{
    display: table;
    list-style:none;
  }
  li{
    float: left;
    padding-left: 50px;
  }*/
  .sponsor{
    /*height: 80px;
    width: auto;
    padding-bottom: 30px;
    padding-top: 30px;
    float: left;*/
  }

  .imageList{
    /*width: 888px;
    height: 100px;
    border: 1px solid red;
    margin: 50px auto;
    overflow: hidden;*/
    margin: 40px auto 0px;
  }
  .list{
   /* width: 200%;
    height: 100%;
    animation: picmove 10s linear infinite forwards;*/
    display: table;
    list-style:none;
    margin: 0 auto 0;
  }
  li{
    float: left;
    padding-left: 14px;
    padding-right: 14px;
  }
 /* @keyframes picmove {
      from {
          transform: translate(0);
      }
      to {
          transform: translate(-1154px);
      }
  }
  .list:hover {
            animation-play-state: paused;
        }*/

.list img{
        height:52px;
        /*width: 200px;*/
        /*margin-right:10px;*/
        float: left;
      }

</style>