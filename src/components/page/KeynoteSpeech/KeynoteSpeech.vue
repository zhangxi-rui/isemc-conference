<template>
	<div class="main-container">
		<div class="about-container center">
			
			<div class="card-container" v-for="item in data">
				<el-row >
	  				<el-col :span="24">
	  					<el-card shadow="hover">
	      					<img :src="item.src" class="professorimg">
	      					<p class="professortitle">Speaker: {{item.name}}<span class="openname" @click="opennameup(item)" v-show="item.fold"><i class="el-icon-arrow-down icon"></i></span><span class="openname" @click="opennameup(item)" v-show="!item.fold"><i class="el-icon-arrow-up icon"></i></span></p>
	      					<p class="professorAbstract" v-show="!item.fold">{{item.namedetails}}</p>
	      					<p class="professortitle">Title: {{item.title}}</p>
	      					<!-- <p class="professortitle">Title: {{item.title}}<span class="openname" @click="Abstract1(item)" v-show="item.fold1">details</span><span class="openname" @click="Abstract2(item)" v-show="!item.fold1">pack up</span></p> -->
	      					<div class="professorAbstract">
		      					<p>Abstract: {{item.Abstract}}</p>
		      					
	      				    </div>
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
      	data:[{
      		src:require('../../../assets/img/KeynoteSpeechWangJunHong.jpg'),
      		name:"Junhong Wang",
      		title:"comming soon",
      		Abstract:"comming soon",
      		namedetails:"Junhong Wang received the B.S. degree from the University of Electronic Science and Technology of China, Chengdu, China, in 1988, the M.S. degree from the University of Electronic Science and Technology of China, Chengdu, China, in 1991, and the M.S. degree from the Beijing Jiaotong University, Chengdu, China, in 1994. From 1995 to 1996, he was a Postdoctoral Fellow. He is currently a professor at Beijing Jiaotong University. He is mainly engaged in electromagnetic field and microwave technology research work and has published 20 SCI papers and 40 EI papers. The main honors are national candidate of new century hundred million talent project and distinguished professor of changjiang scholars, ministry of education. And he was awarded the nationalscience fund for distinguished young scholars. Dr. Wang is a senior member of IEEE, executive director of the institute of electromagnetic education and teaching materials, and editorial board member of The Chinese Journal of Radio Science.",
      		fold:true
      		
      	},
      	{
      		src:require('../../../assets/img/KeynoteSpeechJames.png'),
      		name:"James L. Drewniak",
      		title:"EMC for Emerging Technologies",
      		Abstract:"The advent of new technology applications including 5G, IoT, and autonomous vehicles, as well as increasing data rates and design densities, together with emerging enabling technologies present new challenges in all aspects and applications of EMI design and mitigation.  New approaches are necessary in order to achieve design specifications, meet cost pressures, and regulatory requirements.  This presentation will highlight several trends in EMI research with examples in the areas of above 10 GHz emissions, intra-system interference, 5G, IoT, radio-frequency interference, noise source identification and modeling, mitigation techniques with new materials, tools, and design methodologies.",
      		namedetails:"James L. Drewniak is a Curator’s Professor of Electrical and Computer Engineering at Missouri S&T.  He received B.S., M.S., and Ph.D. degrees in electrical engineering from the University of Illinois at Urbana-Champaign.    His research is in electromagnetic compatibility, signal and power integrity, and electronic packaging.  He is with the Missouri Electromagnetic Compatibility Laboratory, a university research laboratory of approximately 70 people that is internationally recognized for research in EMC and signal and power integrity.  A key component of the research sponsorship is the US National Science Foundation Industry/University Cooperative Research Center (I/UCRC) for Electromagnetic Compatibility that is a consortium of over 20 companies.  He is a Fellow of the IEEE, 2013 recipient of the IEEE EMC Society’s Richard R. Stoddart Award, and a past Associate Editor of the IEEE Transactions on EMC.",
      		fold:true
      		
      	},
      	{
      		src:require('../../../assets/img/KeynoteSpeechFangGuangYou.jpg'),
      		name:"Guangyou Fang",
      		title:"comming soon",
      		Abstract:"comming soon",
      		namedetails:"Guangyou Fang received the B.S. degree in electrical engineering from Hunan University, Changsha, China, in 1984, and the M.S. and Ph.D. degrees in electrical engineering from Xi'an Jiaotong University, Xi'an, China, in 1990 and 1996, respectively.,From 1990 to 1999, he was an Engineer, Associate Professor, and Professor with China Research Institute of Radio wave Propagation. From 2000 to 2001, he was a Visiting Scholar with the University of Trieste and International Center for Science and High Technology, Italy. From 2001 to 2003, he was a special foreign Research Fellow of the Japan Society for Promotion of Science, working with the Professor Motoyuki Sato with Tohoku University, Sendai, Japan. He was the PI of CE-3 lunar penetrating radar. Since 2004, he has been a Professor with the Institute of Electronics of Chinese Academy of Sciences (IECAS), the Director of the Key Lab of Electromagnetic Radiation and Sensing Technology of CAS, and the Deputy Director of IECAS from 2013. He has authored or coauthored more than 300 papers in refereed journals and conference proceedings. His research interests include electromagnetic field theory, ultrawideband radar, ground-penetrating radar, lunar and mars exploration radar, geophysical electromagnetic exploration technology, and THz imaging.",
      		fold:true
      		
      	},
      	{
      		src:require('../../../assets/img/KeynoteSpeechYihongQi.png'),
      		name:"Yihong Qi",
      		title:"Over The Air Test Challenges and Solutions",
      		Abstract:"Over The Air (OTA) tests are widely used for IoT, Autonomous cars, Phased array systems and 5G communications. OTA has become an indispensable method for the accurate wireless system evaluations. The rich wireless spectrum, increase communication bandwidth and speed, wide range of the signal coverage, together with emerging technologies and versatile of wireless applications present new challenges for OTA measurements. The traditional antenna and radio measurement concepts, measurement equipment, methodologies, calibration methods are all facing challenges in order to meet the regulatory specifications, research and development requirements and cost-effective mass production needs. This presentation will highlight the OTA measurement challenges and solutions in system calibration, measurement environment requirements, test methodologies for single into single output and multiple input multiple output systems.",
      		namedetails:"Yihong Qi received the academician of the Canadian academy of engineering, in 2018, the B.S. degree in Electronics from the National University of Defense Technologies, Changsha, China, in 1982, the M.S. degree in Electronics from the Chinese Academy of Space Technology, Beijing, China, in 1985, and the Ph.D. degree in Electronics from Xidian University, Xi’an, China, in 1989.From 1989 to 1993, he was a Postdoctoral Fellow and then an Associate Professor with the Southeast University, Nanjing, China. From 1993 to 1995, he was a Postdoctoral Researcher at McMaster University, Hamilton, ON, Canada. From 1995 to 2010, he was with Research in Motion (Blackberry), Waterloo, ON, where he was the Director of Advanced Electromagnetic Research. Currently, he is the President and Chief Scientist with General Test Systems, Inc., Shenzhen, China; he founded DBJ in 2011. He is also an Adjunct Professor in the EMC Laboratory, Missouri University of Science and Technology, Rolla, MO, Honorary Professor and Dean of Behavior Big Data institute in Southwest University Chengdu, China and an Adjunct professor in Hunan University, Changsha, China. He is an inventor of more than 400 published and pending patents. Dr. Qi was a Distinguished Lecturer of IEEE EMC Society for 2014 and 2015 and serves as the Chairman of the IEEE EMC TC-12. He has received an IEEE EMC Society Technical Achievement Award in August 2017. He is a Fellow of Canadian Academy of Engineering.",
      		fold:true
      		
      	}],
        
       
      }
    },
    methods:{
    	opennameup(item){
    		item.fold = !item.fold;
    		
    	}
    	// Abstract1(item){
    	// 	item.fold1 = !item.fold1;
    		
    	// },
    	// Abstract2(item){
    	// 	item.fold1 = !item.fold1;
    		
    	// }
    }
  }
</script>

<style type="text/css">
	.center{
		text-align: center;
	}
	.card-container{
		width: 80%;
		padding-left: 10%;
		padding-bottom: 20px;
	}
	.professorimg{
		width: 150px;
		float: left;
		padding-top: 20px;
		padding-bottom: 40px;
		padding-right: 20px;
	}
	.professortitle{
		text-align: left;
		font-family: "SourceSansPro Semibold";
		padding-top: 10px;
	}
	.professorAbstract{
		text-align: justify;
	}
	
	.openname{
		/*color: #0066CC;*/
		padding-left: 10px;
	}
	.icon:hover{
	    color: #0066CC;
	}
	/*.professorAbstract{
		text-align: justify;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
	}
	.professorAbstract:hover{  
        overflow: visible;  
        white-space:normal;
        display: block;
    }  */
        
</style>