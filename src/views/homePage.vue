<template>
    <div>
        <div class="row margin-top-50">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <div class="container">
                    <ul class="nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="aboutMe">首页</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="aboutMe">服务范围</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="aboutMe">客户案例</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="aboutMe">新闻资讯</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="aboutMe">关于我们</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-2"></div>
        </div>
        <div class="row" id="carousel-home">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <div class="carousel slide" data-ride="carousel">
                    <!-- 指示符 -->
                    <ul class="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                    <!-- 轮播图片 -->
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://static.runoob.com/images/mix/img_fjords_wide.jpg">
                        </div>
                        <div class="carousel-item">
                            <img src="https://static.runoob.com/images/mix/img_nature_wide.jpg">
                        </div>
                        <div class="carousel-item">
                            <img src="https://static.runoob.com/images/mix/img_mountains_wide.jpg">
                        </div>
                    </div>

                    <!-- 左右切换按钮 -->
                    <a class="carousel-control-prev" href="#carousel-home" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-home" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>

                </div>
            </div>
            <div class="col-md-2"></div>
        </div>
        <div class="row" id="business">
            <div class="col-md-2" ></div>
            <div class="col-md-2">
                <div class="vessel">
                    <img src="../assets/images/module-1.png" alt="ERP">
                    <span class="margin-top-20">ERP管理系统系列</span>
                </div>
                <div class="margin-top-20 font-color-grey">
                    <span>包含CRM、项目管理系统、进销存系统的所有功能，数据实时共享，各个环节的运转和写作</span>
                </div>
            </div>
            <div class="col-md-2">
                <div class="vessel">
                    <img src="../assets/images/module-2.png" alt="CRM">
                    <span class="margin-top-20">CRM管理系统</span>
                </div>
                <div class="margin-top-20 font-color-grey">
                    <span>侧重客户关系和团队管理,互联网、局域网均可使用</span>
                </div>
            </div>
            <div class="col-md-2">
                <div class="vessel">
                    <img src="../assets/images/module-3.png" alt="Project Manager">
                    <span class="margin-top-20">项目管理系统</span>
                </div>
                <div class="margin-top-20 font-color-grey">
                    <span>侧重客户关系和项目管理，互联网、局域网均可使用，团队管理等功能模块</span>
                </div>
            </div>
            <div class="col-md-2">
                <div class="vessel">
                    <img src="../assets/images/module-4.png" alt="Supply Chain">
                    <span class="margin-top-20">供应链系统</span>
                </div>
                <div class="margin-top-20 font-color-grey">
                    <span>侧重进货、库存和账务管理</span>
                </div>
            </div>
            <div class="col-md-2"></div>
        </div>

        <div class="row margin-top-50">
            <div class="col-md-2"></div>
            <div class="col-md-3">
                <img src="../assets/images/about-me.png" alt="">
            </div>
            <div class="col-md-5 font-color-white background-color-dodgerblue">
               <span class="abstract1">关于我们</span>
               <span class="abstract2">我们关注用户，细致分析产品架构，创立至今百家企业提供信息化解决方案与产品输出</span>
               <span class="abstract3" @click="gotoDetail">点击查看</span>
               <span @click="testFun">test</span>
            </div>
            <div class="col-md-2"></div>
        </div>

        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8" style="padding-right: 0">
                <div class="abstract4 background-color-246">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="vessel">
                                <span class="margin-top-20 percentage font-color-grey">75%</span>
                                <span class="margin-top-20 font-color-grey">降低风险</span>
                            </div>
                            <div class="margin-top-20 font-color-grey percentage-padding">
                                <span>包含CRM、项目管理系统、进销存系统的所有功能，数据实时共享，各个环节的运转和写作</span>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="vessel">
                                <span class="margin-top-20 percentage font-color-grey">75%</span>
                                <span class="margin-top-20 font-color-grey">战略伙伴</span>
                            </div>
                            <div class="margin-top-20 font-color-grey percentage-padding">
                                <span>包含CRM、项目管理系统、进销存系统的所有功能，数据实时共享，各个环节的运转和写作</span>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="vessel">
                                <span class="margin-top-20 percentage font-color-grey">75%</span>
                                <span class="margin-top-20 font-color-grey">经典案例</span>
                            </div>
                            <div class="margin-top-20 font-color-grey percentage-padding">
                                <span>包含CRM、项目管理系统、进销存系统的所有功能，数据实时共享，各个环节的运转和写作</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-md-2"></div>
        </div>

        <div class="row abstract5"></div>

    </div>
</template>

<script>
    export default {
      methods: {
        gotoDetail: function () {
          let _self = this
          _self.$router.push({
            path: '/aboutMe'
          })
        },
        testFun: function () {
          let _self = this
          _self.$axios.post('/api/getCustomer', {state: 1}).then(res => {
            console.log(res.data)
          })
        }
      }
    }
</script>
<style scoped>
    .nav-link{
        color: black;
        font-size: 18px;
    }
    #carousel-home{
        margin-top: 30px;
    }
    #carousel-home img{
        width: 100%;
    }
    #nav-home{
        margin-top: 50px;
    }
    #business{
        margin-top: 30px;
    }
    #business span{
        display: block;
    }
    .vessel{
        text-align: center;
    }
    .abstract1{
        font-size: 30px;
        position: relative;
        left: 30px;
        top:25px;
    }
    .abstract2{
        display: block;
        width: 85%;
        position: relative;
        left:30px;
        top:40px;
    }
    .abstract3{
        display: block;
        position:relative;
        top: 110px;
        left: 30px;
        width: 150px;
        height: 50px;
        border: 1px solid;
        text-align: center;
        line-height: 50px;
        cursor:pointer
    }
    .abstract4{
        height:270px;
    }
    .percentage{
        display: block;
        font-size:40px;
    }
    .percentage-padding{
        padding: 40px;
    }
    .abstract5{
        height:150px;
    }
</style>


