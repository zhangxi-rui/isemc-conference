<template>
  <div class="main-container">
    <div class="about-container">
      <div class="hotal">
        <div class="title">
          Hotel
        </div>
        <div class="details">
          <p class="hotal_title">Hotel Information</p>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530091641677&di=72392681df22b59d17fe70264ae0ca60&imgtype=0&src=http%3A%2F%2Ffile.wisetravel.cn%2Forigin_h%2Fb5160301f861515a660f50f6325fda61e757639e.jpeg" style="float: right; margin-left: 10px; margin-right: 10px;" width="400" >
          <p>{{data.intro}}</p>
          <p><span class="font_normal">Hotel Name：</span>{{data.name}}</p>
          <p><span class="font_normal">Hotel Price：</span>${{data.price}}（单人间和双人间）</p>
          <p><span class="font_normal">Hotel Address：</span>{{data.location}}</p>
          <p><span class="font_normal">Matters Need Attention：</span></p><!-- </span>房价不含销售/房间税（约14％）。此外，所有客房都将收取15美元的度假费，并附地方税。度假费包括以下活动：</p> -->
          <ul>
            <li v-for="item in data.notice">{{item}}</li>
          </ul>
          <p><span class="font_normal"><a href="#">网上预订</a></span>。您也可致电 {{data.phoneNum}} 进行酒店预订。。</p>
          <!-- <p><span class="font_normal">以会议价格（259.00美元）</span>预订<span class="font_normal">酒店房间的截止日期为2018年7月1日。</span>在此日期后作出的预订将按现行价格进行。</p> -->

          <!-- <p class="hotal_title">重要的提醒</p>
          <p>WSN通信协会有合同义务填补有保证的区块。如果未达到预期的客房数量，将会对重大的财务处罚进行评估。通过入住会议酒店，您将享受到在会议场所居住的便利，并且在更大程度上提供有价值的援助以支持WSN的财务义务</p> -->

          <p class="hotal_title"><a :href="data.link">酒店官网 &gt;&gt;</a></p>
        </div>
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
        url: this.GLOBAL.globalurl+'/api/hotel/getHotelData', 
        type: 'GET', 
        dataType: 'json', 
        data:{},
        success: function (res) { 
          self.data = res.data;
          console.log(res);
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
    /*font-size: 17px;*/
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
    /*font-size: 17px;*/
  }
  
  .details{
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 20px;
    overflow: auto;
  }
  .hotal_title{
    font-size: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: normal;
  }
  .font_normal{
    font-weight:normal;
    /*font-size: 17px*/;
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
</style>