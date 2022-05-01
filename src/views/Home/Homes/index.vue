<template>
  <div class="homes">
    <img class="img_1" src="./images/1.gif" alt="" />
    <div class="content">
      <lottie
        :options="defaultOptions1"
        :width="150"
        :height="150"
        style="position: absolute; margin: 3.9em 4em; z-index: 999"
        v-on:animCreated="handleAnimation"
      />
      <lottie
        :options="defaultOptions2"
        :width="250"
        :height="250"
        style="position: absolute; margin: -8em 47.5em"
        v-on:animCreated="handleAnimation"
      />
      <div class="content_1">
        <img class="img_2" src="./images/1.png" alt="" />
        <h1>时签教育先行者</h1>
        <h2>-- 基于数据分析的学习状态管理系统</h2>
        <h3>
          &nbsp;&nbsp;&nbsp;基于当代学习趋势上升的背景下所研发，通过数据分析对用户进行365°全面了解，通过取长补短、巩固强项、弥补弱项，多角度为用户制定学习方案。运用用户学习的初衷，顺应用户使用频率，制定不同的方案
        </h3>
      </div>
      <img class="img_4" src="./images/6.png" alt="" />
      <h1 class="h1_1">创新平台赋予教育更多可能</h1>
      <div class="content_2">
        <li>
          <div class="con">
            <h1>21天习惯养成计划</h1>
            <img class="img_3" src="./images/4.png" alt="" />
          </div>
          <h2>前期：提供实用性干货</h2>
          <h3>中期：比赛、小游戏提升用户新鲜感以及成就感</h3>
          <h4>后期：由易到难加强学习任务，用户成绩提升后给予一定奖励来激励</h4>
        </li>
        <li>
          <div class="con con_1">
            <h1>推动平台功能多样化</h1>
            <img class="img_3" src="./images/5.png" alt="" />
          </div>
          <h2 class="h2">
            &nbsp;&nbsp;&nbsp;前后端我们将不断测试，改良，定期让用户进行反馈，根据到大部分用户的意见不断去调试，增加平台功能，可以为每一个用户打造他们中意的个人线上自习室！
          </h2>
        </li>
        <img src="./images/1.jpg" alt="" />
        <img class="img_2" src="./images/3.png" alt="" />
      </div>
      <lottie
        :options="defaultOptions3"
        :width="250"
        :height="250"
        style="position: absolute; margin: 2em 47.5em"
        v-on:animCreated="handleAnimation"
      />
      <h1 class="h1_2">花最少的精力&nbsp;&nbsp;学同样的干货</h1>
      <div class="content_3">
        <li>
          <img src="./images/7.png" alt="" />
          <h1>针对性方案全覆盖</h1>
          <h2>
            通过数据分析对用户进行365°全面了解，通过取长补短，巩固强项，弥补弱项进而多角度为用户制定学习方案，根据21天习惯养成法对用户进行有简到繁的训练，培养用户的学习持久性！
          </h2>
        </li>
        <li>
          <img src="./images/2.png" alt="" />
          <h1>多模块互联成系统</h1>
          <h2>
            通过多模块的数据、功能连接为用户提供实用性干货、针对性制定学习方案、提升用户新鲜感，模块化的显示让用户更清晰了然，拥有更有效果的学习，花费最少的精力去学习到一样的干货！
          </h2>
        </li>
        <li>
          <img src="./images/8.png" alt="" />
          <h1>全局Dark主题</h1>
          <h2>
            前后台主题都以Dark为主，因为人们很容易就能感知到较深的颜色，它们通常对我们的眼睛更容易，而且不会给眼睛造成太大的压力，而且独具风格和优雅，具有视觉吸引力，增强页面可读性！
          </h2>
        </li>
      </div>
      <lottie
        :options="defaultOptions4"
        :width="250"
        :height="250"
        style="position: absolute; margin: -5em 47.5em"
        v-on:animCreated="handleAnimation"
      />
      <h1 class="h1_3">开启提效大作战</h1>
      <div class="content_4">
        <li>
          <img src="./images/2.jpg" alt="" />
          <h1>学习模块</h1>
          <h2>
            展示用户课程的学习进度,对用户学习状态数据分析，为用户制定学习方案，使用户取长补短，巩固强项，弥补弱项。用户每日了解自己学习状况，可以培养用户学习持久性。
          </h2>
        </li>
        <li>
          <img src="./images/3.jpg" alt="" />
          <h1>题库模块</h1>
          <h2>
            用户学习达到一定程度进入题库页面对不同级别难度的题库进行刷题，运用了用户学习的初衷，用户可以选择不同方向的题型进行训练，从而达到针对性的练习。
          </h2>
        </li>
        <li>
          <img src="./images/4.jpg" alt="" />
          <h1>竞赛模块</h1>
          <h2>
            用户学习视频、刷题等达到疲惫期时，可以进入竞赛页面报名参加各类计算机大赛，提升用户的新鲜感以及比赛获奖后的成就感，可以培养他们的实践能力，激发潜能。
          </h2>
        </li>
        <li>
          <img src="./images/5.jpg" alt="" />
          <h1>讨论模块</h1>
          <h2>
            用户在学习过程中有疑惑，可以进入讨论页面咨询大佬，相比于网站，论坛更能聚集人气，给用户发表观点的机会。做论坛是为了增加网站的粘度，毕竟人才是真正的资源。
          </h2>
        </li>
      </div>
      <button @click="change1"><span>了解更多</span></button>
      <img class="img_5" src="./images/9.png" alt="" />
      <img class="img_8" src="./images/10.png" alt="" />
      <div class="content_5">
        <img src="./images/8.png" alt="" />
        <h1>立即注册免费试用</h1>
        <h2>体验完整学习状态管理解决教育方案，及团队技术的协作</h2>
        <button @click="change2"><span>立即注册</span></button>
      </div>
      <div class="content_6">
        <div class="top">
          <img class="img_6" src="../images/2.png" alt="" />
          <ul>
            <li>
              <h1>产品方案</h1>
              <h2>时签管理系统</h2>
              <h2>PC端</h2>
              <h2>试用服务</h2>
            </li>
            <li>
              <h1>课程类别</h1>
              <h2>前端</h2>
              <h2>后端</h2>
              <h2>大数据</h2>
            </li>
            <li>
              <h1>关于我们</h1>
              <h2>联系我们</h2>
              <h2>邮箱Email</h2>
              <h2>电话</h2>
            </li>
          </ul>
          <img class="img_7" src="./images/6.jpg" alt="" />
        </div>
        <div class="line"></div>
        <h3>地址：晋中信息学院</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Anim1 from "./images/1.json";
import Anim2 from "./images/2.json";
import Anim3 from "./images/3.json";
import Anim4 from "./images/4.json";

export default {
  data() {
    return {
      defaultOptions1: { animationData: Anim1, loop: true, autoplay: true },
      defaultOptions2: { animationData: Anim2, loop: true, autoplay: true },
      defaultOptions3: { animationData: Anim3, loop: true, autoplay: true },
      defaultOptions4: { animationData: Anim4, loop: true, autoplay: true },
      defaultAnim1: "",
      defaultAnim2: "",
      defaultAnim3: "",
      defaultAnim4: "",
    };
  },
  methods: {
    handleAnimation(anim) {
      this.defaultAnim1 = anim;
      this.defaultAnim2 = anim;
    },
    change1() {
      this.$emit("change1", { scene: 0 });
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    change2() {
      this.$emit("change1", { show1: true, scene: 5 });
    },
  },
};
</script>

<style lang="less" scoped>
.homes {
  z-index: 0;
  .img_1 {
    margin-top: 1.1em;
    margin-left: 0.2em;
    transform: scale(1.2);
  }
  .content {
    .content_1 {
      position: relative;
      top: 11.5em;
      width: 93em;
      height: 18em;
      margin: 0 auto;
      background-color: #36393f;
      color: white;
      text-align: left;
      .img_2 {
        position: absolute;
        top: -11em;
        left: 34em;
        transform: scale(0.6);
      }
      h1 {
        position: relative;
        top: -1.5em;
        left: 2em;
        font-size: 25.5px;
        font-family: "华文行楷", serif;
      }
      h2 {
        position: relative;
        top: -10em;
        left: 12em;
        font-size: 16px;
        font-family: "楷体", serif;
      }
      h3 {
        position: relative;
        top: -15em;
        width: 36em;
        line-height: 2em;
        left: 2em;
        font-size: 14px;
        font-family: "楷体", serif;
      }
    }
    .img_4 {
      position: absolute;
      margin: 19em -11.5em;
      transform: scale(0.9);
    }
    .h1_1 {
      color: white;
      margin-top: 6em;
      font-size: 35px;
      font-family: "华文行楷", serif;
    }
    .content_2 {
      position: relative;
      top: 1em;
      color: white;
      display: flex;
      justify-content: center;
      li {
        list-style: none;
        width: 33.5em;
        height: 17em;
        margin: 0 10em;
        background-color: #36393f;
        color: white;
        text-align: left;
        padding: 0 1.5em;
        .con {
          position: absolute;
          top: -2.5em;
          margin-left: -1.5em;
          width: 18em;
          height: 4.5em;
          background-image: -moz-linear-gradient(
            90deg,
            rgb(145, 223, 96),
            rgb(25, 227, 164)
          );

          background-image: -webkit-linear-gradient(
            90deg,
            rgb(145, 223, 96),
            rgb(25, 227, 164)
          );

          background-image: linear-gradient(
            90deg,
            rgb(145, 223, 96),
            rgb(25, 227, 164)
          );
          line-height: 4.5em;
          h1 {
            margin-left: 2em;
            font-family: "楷体", serif;
          }
          .img_3 {
            position: absolute;
            top: -3em;
            left: -10.58em;
            transform: scale(0.1);
          }
        }

        .con_1 {
          right: 11.1em;
          h1 {
            margin-left: 1.5em;
          }
          .img_3 {
            top: -3.09em;
            left: 5.23em;
          }
        }
        h2 {
          position: relative;
          top: 2.9em;
          width: 15em;
          line-height: 2em;
          font-size: 15px;
          font-family: "楷体", serif;
        }
        .h2 {
          left: 12em;
        }
        h3 {
          position: relative;
          top: 2.9em;
          width: 15em;
          line-height: 2em;
          font-size: 15px;
          font-family: "楷体", serif;
        }
        h4 {
          width: 15em;
          line-height: 2em;
          position: relative;
          top: 2.9em;
          font-size: 15px;
          font-family: "楷体", serif;
        }
      }
      img {
        position: absolute;
        top: 5em;
        left: 32.5em;
        width: 23.4em;
        height: 16.5em;
      }
      .img_2 {
        left: 59em;
      }
    }
    .h1_2 {
      color: white;
      margin-top: 4.5em;
      font-size: 35px;
      font-family: "华文行楷", serif;
    }
    .content_3 {
      position: relative;
      top: -1em;
      display: flex;
      justify-content: center;
      color: white;
      li {
        list-style: none;
        width: 28em;
        height: 38em;
        margin: 0 2em;
        background-color: #36393f;
        color: white;
        text-align: left;
        img {
          position: relative;
          top: -12.7em;
          left: -19em;
          transform: scale(0.424);
        }
        h1 {
          font-size: 23px;
          margin: -18.5em 0.5em;
          font-family: "楷体", serif;
        }
        h2 {
          line-height: 2em;
          margin: 23em 1em;
          font-family: "楷体", serif;
        }
      }
    }
    .h1_3 {
      color: white;
      margin-top: 2em;
      font-size: 35px;
      font-family: "华文行楷", serif;
    }
    .content_4 {
      position: relative;
      top: -1em;
      list-style: none;
      text-align: left;
      width: 85%;
      margin: 0 11em;
      color: white;
      li {
        float: left;
        width: 45em;
        height: 22em;
        background-color: #36393f;
        margin: 0 3em 3em 0;
        img {
          position: relative;
          width: 24em;
          height: 22em;
        }
        h1 {
          width: 20em;
          font-size: 25px;
          margin: -15.5em 12.5em;
          font-family: "楷体", serif;
        }
        h2 {
          width: 13em;
          line-height: 2em;
          margin: 21em 19.5em;
          font-family: "楷体", serif;
        }
      }
    }
    button {
      position: relative;
      top: -2em;
      color: white;
      border: none;
      width: 13em;
      height: 5em;
      line-height: 5em;
      background-image: -moz-linear-gradient(
        90deg,
        rgb(145, 223, 96),
        rgb(25, 227, 164)
      );

      background-image: -webkit-linear-gradient(
        90deg,
        rgb(145, 223, 96),
        rgb(25, 227, 164)
      );

      background-image: linear-gradient(
        90deg,
        rgb(145, 223, 96),
        rgb(25, 227, 164)
      );
      span {
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 3px;
      }
    }
    .img_5 {
      position: absolute;
      margin: 4em -26.5em;
    }
    .img_8 {
      position: absolute;
      margin: 6em 10em;
    }
    .content_5 {
      position: relative;
      top: 11.7em;
      color: white;
      img {
        margin-left: -1.5em;
        width: 103%;
        height: 28em;
        opacity: 0.4;
      }
      h1 {
        position: absolute;
        top: 0;
        left: 13.5em;
        display: block;
        margin: 0 auto;
        font-size: 40px;
        font-family: "华文行楷", serif;
      }
      h2 {
        position: absolute;
        top: 3em;
        left: 14.5em;
        display: block;
        margin: 0 auto;
        font-size: 25px;
        font-family: "华文行楷", serif;
      }
      button {
        position: absolute;
        top: 18em;
        margin-left: -5.8em;
      }
    }
    .content_6 {
      position: relative;
      color: white;
      height: 33em;
      text-align: left;
      .top {
        .img_6 {
          position: absolute;
          top: 6em;
          left: 0;
          transform: scale(0.5);
        }
        ul {
          position: relative;
          top: 3em;
          left: 30em;
          float: left;
          li {
            margin-right: 8em;
            float: left;
            list-style: none;
            h1 {
              font-size: 20px;
              font-family: "楷体", serif;
            }
            h2 {
              position: relative;
              top: -2em;
              font-size: 18px;
              font-family: "楷体", serif;
              line-height: 2.5em;
              color: #cdcdcd;
            }
          }
        }
        .img_7 {
          position: absolute;
          margin-top: -20em;
          right: -20em;
          transform: scale(0.15);
        }
      }
      .line {
        position: absolute;
        top: 27em;
        left: 4.5em;
        width: 90%;
        height: 1px;
        background: linear-gradient(
          135deg,
          rgb(100, 100, 100),
          rgb(300, 300, 300),
          rgb(100, 100, 100)
        );
      }
      h3 {
        position: absolute;
        top: 14.5em;
        left: 41%;
        font-size: 20px;
        font-family: "楷体", serif;
      }
    }
  }
}
</style>