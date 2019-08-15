<template>
  <div class="main-container">
    <div class="about-container">
	    	<div class="title">
	    		Important Dates
	    	</div>
	    	<div class="details">
          <div class="left">
            <p class="padding20">Paper Submission Deadline: {{SubmissionDeadline}} </p>
            <p>Notification of Acceptance: {{Acceptance}} </p>
            <p>Camera-Ready Manuscript Deadline: {{ManuscriptDeadline}} </p>
            <p class="contentTitle paddingbot">All submissions must be in electronic, PDF or WORD style. </p>   
            <p>Please click here to download the <a href="" id="paperTemplate" title="paper template" v-on:click="getDownloadUrl">paper template.</a></p>               
          </div> 
          <div class="right">
              <p class="contribute">submission</p>
              <a href="http://submission.isemc.cn" target="_blank"><img src="../../../assets/img/submit.jpg"></a>
          </div>       
	    	</div>
        <div class="title">
            Topics
        </div>
        <div class="details">
          <div>
            <!-- <p class="center">征集论文[主要会议]：PDF版本可在<a href="#">此处获取</a>。</p> -->
            <p class="padding20">The symposium on EMC has been an important forum for researchers to share the advancement of EMC fundamentals, technologies, management, and standards. Each symposium in the past years has attracted hundreds of researchers, engineers, and students engaged in various EMC related fields from all over the world. The wide application of ICT in industry, science, transportation, medical instrument, power electricity, has been putting forward new requirements for the orientations of EMC research, and bringing new challenges and problems in EMC modeling, computation, design, measurement, standardization, management.</p>
            <p class="contentTitle">ISEMC  Nanjing  2019  will  cover  the  following  topics but not limited to:</p>
            <ul class="padding20 paddingLeft20">
              <li v-for="item1 in data" class="contentTitle">{{item1.topic}}
                <ul class="marginLeft20">
                  <li v-for="item2 in item1.content" class="list2">{{item2}}</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
	    
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      SubmissionDeadline:'July 30, 2019',
      Acceptance:'August 15, 2019',
      ManuscriptDeadline:'September 15, 2019',
      data:[{
        topic:"EMC Fundamentals",
        content:["Transmission lines","Coupling","Shielding","Gasketing & Filtering","Grounding","Nano for EMC","EMC material","Hybrid and electric vehicles"]
      },
      {
        topic:"Electromagnetic Environment",
        content:["Intentional EMI & EMP","Radiation of base stations, etc","Electromagnetic scanning technology","Electromagnetic map","Electromagnetic multi-physics-interaction","Urban and suburban electromagnetic environments"]
      },
      {
        topic:"Electromagnetic Computation in Complex Environment",
        content:["Modelling","Fast computational methods","Propagation and prediction","Hybrid method computation"]
      },
      {
        topic:"EMC Measurement",
        content:["Emission & Irradiation","Immunity& Sensitivity","Open sites, chambers and cells","Virtual test technology","Alignment method for labs"]
      },
      {
        topic:"PCB/IC/SOC Modelling & Design",
        content:["Topologies and construction","Signal integrity","Passive/active units","Layout and wiring","Low-loss inter-connection","Passive intermodulation"]
      },
      {
        topic:"Electromagnetic Biological Effect",
        content:["Modelling","Exposure and healthcare","Radiation hazards","SAR and improvement approaches","Medical devices & hospital instruments"]
      },
      {
        topic:"EMC Standards and Regulations",
        content:["Terms and concepts","Limits and thresholds","Test methods and evaluation","Standards, policies and regulations"]
      },
      {
        topic:"EMC Management",
        content:["Suggestions and regulation","Government management","Spectrum resource management","EMC education"]
      },
      {
        topic:"Antenna",
        content:["Microwave/millimeter/terahertz antenna","Antenna array","Near-field antenna","Systematic design"]
      },
      {
        topic:"Safety",
        content:["ESD","EMP/NEMP","Lightning"]
      },
      {
        topic:"Security",
        content:["TEMPEST","Antenna fingerprint","System and IC emission"]
      },
      {
        topic:"EMC+AI and Big data",
        content:["Data acquisition, features, mining","EMC design and diagnostics with artificial intelligence","Data management and utilities for governments, companies, and institutes","Application of big data to EMC"]
      },
      {
        topic:"EMC Applications",
        content:["EMC in industry","EMC in transportation","EMC in medical instrument","EMC in communications","EMC in aircraft & space systems","EMC in radar","EMC in military applications","EMC in power systems","Any other relevant topics"]
      }]
    }
  },
  mounted() {
    
  },
  methods: { 
    getDownloadUrl(){
      var self=this;
      this.downloadUrl=this.GLOBAL.globalurl+'/api/paper/template';
      $("#paperTemplate").attr("href",self.downloadUrl);
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
  .welcome{
    font-size: 24px;
    font-weight: bold;
    text-align: left;
  }

  .padding20{
    padding-top: 20px;
  }
  .paddingLeft20{
    padding-left: 20px;
  }
  .marginLeft20{
    margin-left: 20px;
  }
  .paddingbot{
    padding-bottom: 20px;
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
  .contribute{
    padding-top: 10px;
    padding-left: 120px;
    font-weight: bold;
  }
  .list2{
    padding-left: 20px;
  }
  img{
    width: 100px;
    padding-left: 150px;
    
  }
</style>