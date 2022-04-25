<template>
  <div class="match">
    <img class="imagess" src="./images/1.png" alt="" />
    <div class="content">
      <div class="con">
        <img class="image1" src="./images/3.jpg" alt="" />
        <div class="center">
          <h2>参加这场 1 小时 30 分的竞赛</h2>
          <h1>第 521 场比赛</h1>
          <h3 class="h3">中国时间：2022-05-01：14:30 ~ 16:00</h3>
          <div class="cen">
            <i class="el-icon-date"></i>
            <h3>添加到日程表</h3>
          </div>
          <div class="bottom">
            <i class="el-icon-time"></i>
            <h4>距离开始还有：</h4>
            <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
          </div>
        </div>
      </div>
      <img class="image2" src="./images/3.png" alt="" />
      <div class="cons">
        <img class="image3" src="./images/4.jpg" alt="" />
        <div class="center">
          <h2>参加这场 2 小时 00 分的竞赛</h2>
          <h1>第 300 场比赛</h1>
          <h3 class="h3">中国时间：2022-05-18：9:30 ~ 11:30</h3>
          <div class="cen">
            <i class="el-icon-date"></i>
            <h3>添加到日程表</h3>
          </div>
          <div class="bottom">
            <i class="el-icon-time"></i>
            <h4>距离开始还有：</h4>
            <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
          </div>
        </div>
      </div>
    </div>
    <div class="cont">
      <el-carousel :interval="4000" type="card" height="500px">
        <el-carousel-item v-for="item in imagebox" :key="item.id">
          <img :src="item.idView" />
        </el-carousel-item>
      </el-carousel>
      <div class="game">
        <div class="top1">
          <h1>往届竞赛回顾</h1>
          <h4>参加虚拟竞赛，为排位赛做好充足准备</h4>
          <h3>竞赛合作</h3>
          <svg
            t="1650860394364"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="9222"
            width="32"
            height="32"
          >
            <path
              d="M469.965 896.102c6.656-8.857 14.131-17.203 19.763-26.624 26.01-43.366 20.02-94.003-17.664-133.222-56.166-58.42-113.1-116.122-170.547-173.312-34.15-33.997-84.122-32.82-119.501 1.229-24.73 23.808-49.152 47.872-74.803 72.857-23.245-8.499-34.202-27.648-34.355-52.53-0.564-88.935-0.717-177.87 0.05-266.753 0.257-32.307 21.249-53.401 52.89-54.17 39.885-0.972 79.872-0.255 121.908-0.255-2.663 4.352-4.352 7.372-6.35 10.188-22.118 31.284-17.151 72.807 13.16 96.717 43.314 34.202 91.8 40.09 143.308 22.323 35.02-12.083 69.888-24.78 104.448-38.092 10.547-4.045 16.538-3.482 23.5 6.656 75.674 109.772 151.962 219.084 227.943 328.601 25.549 36.813 16.999 70.247-23.091 90.163-75.008 37.325-150.118 74.599-225.434 111.36-10.137 4.967-21.862 6.656-32.87 9.882-0.768-1.638-1.536-3.328-2.355-5.018z"
              fill="#007BFF"
              p-id="9223"
            ></path>
            <path
              d="M547.277 261.171c-51.149 23.86-100.762 46.49-149.914 70.144-29.389 14.183-56.985 9.216-83.865-5.171-18.79-10.035-21.504-26.47-6.042-41.216 19.046-18.176 38.86-36.045 60.416-50.995 42.957-29.747 86.784-58.368 131.38-85.658 55.96-34.201 110.796-21.606 164.812 7.117 50.586 26.88 101.632 52.89 152.32 79.462 22.118 11.572 45.517 13.927 70.144 13.466 46.387-0.87 65.946 19.098 65.997 65.075 0.051 82.688 0.102 165.427 0 248.115-0.051 45.364-19.303 64.461-64.717 64.512-23.654 0.052-47.309-0.665-70.86 0.256-11.982 0.461-19.047-3.225-26.01-13.363-77.005-112.179-154.676-223.949-232.141-335.82-3.533-4.967-7.168-9.882-11.52-15.924zM427.93 810.65c-3.943 14.13-6.452 28.876-12.135 42.29-9.677 22.99-34.355 30.465-54.528 15.924-60.723-43.776-121.139-88.115-180.94-133.12-23.86-17.971-25.447-48.18-5.428-71.424 9.267-10.803 19.303-21.043 29.696-30.822 20.173-18.944 50.33-18.176 69.99 1.69 44.545 44.8 88.884 89.855 133.428 134.706 11.161 11.213 19.558 23.501 19.917 40.756z"
              fill="#007BFF"
              p-id="9224"
            ></path>
            <path
              d="M862.515 292.864c0-15.309-0.819-30.413-2.048-45.414-15.206-1.536-29.9-5.12-44.032-12.544-50.739-26.573-101.785-52.583-152.32-79.463-54.016-28.723-108.851-41.37-164.813-7.117a2776.653 2776.653 0 0 0-131.379 85.658c-21.606 14.95-41.37 32.82-60.416 50.995-15.513 14.797-12.749 31.232 6.042 41.216 26.88 14.336 54.477 19.303 83.865 5.171 49.101-23.705 98.765-46.284 149.914-70.144 4.352 6.042 8.038 10.957 11.52 15.975 71.731 103.577 143.514 207.053 214.938 310.835 56.012-84.634 88.73-186.06 88.73-295.168zM274.637 635.136c-19.712-19.814-49.818-20.634-70.042-1.69-10.393 9.728-20.377 20.02-29.696 30.823-20.019 23.245-18.432 53.453 5.427 71.424 40.96 30.822 82.228 61.184 123.648 91.392 7.834 0.358 15.719 0.614 23.655 0.614 33.587 0 66.406-3.225 98.253-9.165 0.665-2.662 1.33-5.324 2.048-7.936-0.359-17.254-8.756-29.542-19.917-40.806-44.493-44.8-88.832-89.805-133.376-134.656z"
              fill="#007BFF"
              p-id="9225"
            ></path>
            <path
              d="M525.824 361.114c-7.014-10.138-12.954-10.701-23.5-6.656a3137.053 3137.053 0 0 1-104.449 38.092c-51.558 17.818-100.045 11.93-143.36-22.272-30.31-23.961-35.277-65.433-13.158-96.716 1.997-2.816 3.686-5.837 6.349-10.19-42.087 0-82.023-0.716-121.908 0.257-31.641 0.768-52.633 21.811-52.89 54.17-0.716 88.934-0.614 177.868-0.05 266.751 0.153 24.884 11.161 44.032 34.355 52.532 25.6-24.986 50.073-49.05 74.803-72.858 35.38-34.048 85.35-35.226 119.5-1.229 57.396 57.19 114.382 114.893 170.548 173.312 17.869 18.586 28.518 39.783 32.102 61.491 86.119-30.105 162.15-81.51 221.799-148.019-66.765-96.205-133.683-192.256-200.141-288.665z"
              fill="#007BFF"
              p-id="9226"
            ></path>
            <path
              d="M710.605 179.814c-15.514-8.09-31.079-16.128-46.541-24.37-54.016-28.724-108.851-41.37-164.813-7.118a2776.653 2776.653 0 0 0-131.379 85.658c-21.606 14.95-41.37 32.82-60.416 50.995-15.514 14.797-12.749 31.232 6.042 41.216 26.88 14.336 54.476 19.303 83.865 5.171 49.101-23.705 98.765-46.284 149.914-70.144 4.352 6.042 8.038 10.957 11.52 15.975l75.878 109.517c38.656-61.696 65.127-131.738 75.93-206.9z"
              fill="#007BFF"
              p-id="9227"
            ></path>
            <path
              d="M525.824 361.114c-7.014-10.138-12.954-10.701-23.5-6.656a3137.053 3137.053 0 0 1-104.449 38.092c-51.558 17.818-100.045 11.93-143.36-22.272-30.31-23.961-35.277-65.433-13.158-96.716 1.997-2.816 3.686-5.837 6.349-10.19-42.087 0-82.023-0.716-121.908 0.257-31.641 0.768-52.633 21.811-52.89 54.17-0.716 88.934-0.614 177.868-0.05 266.751 0.102 20.02 7.424 36.25 22.323 46.285 5.325 0.87 10.7 1.587 16.128 2.304 24.115-23.552 47.309-46.336 70.707-68.864 35.38-34.048 85.35-35.225 119.5-1.229 15.924 15.872 31.694 31.847 47.566 47.821 93.696-30.925 175.872-86.989 238.592-160.307-20.634-29.85-41.319-59.597-61.85-89.446z"
              fill="#007BFF"
              p-id="9228"
            ></path>
            <path
              d="M204.595 633.498c-1.331 1.228-2.56 2.56-3.891 3.788a538.945 538.945 0 0 0 68.506-6.81c-19.508-15.103-46.183-14.284-64.615 3.022z m83.661-242.688c-11.571-5.12-22.784-11.93-33.74-20.532-30.311-23.961-35.278-65.433-13.16-96.716 1.998-2.816 3.687-5.837 6.35-10.19-42.087 0-82.023-0.716-121.908 0.257-31.641 0.768-52.633 21.811-52.89 54.17-0.358 43.366-0.511 86.732-0.511 130.099 77.465-3.738 150.477-23.91 215.859-57.088z m246.477-258.1c-11.776 3.328-23.552 8.397-35.43 15.616a2776.653 2776.653 0 0 0-131.38 85.658c-21.606 14.95-41.37 32.82-60.416 50.995-15.513 14.797-12.749 31.232 6.042 41.216 18.534 9.882 37.478 15.36 57.037 13.107A537.702 537.702 0 0 0 534.733 132.71z"
              fill="#007BFF"
              p-id="9229"
            ></path>
          </svg>
        </div>
        <div class="random">
          <svg
            t="1650868351316"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="16371"
            width="30"
            height="30"
          >
            <path
              d="M752.89 356.741h57.565v97.06L957.44 283.095l-146.939-167.04v110.817h-57.559c-164.813 0-272.317 127.002-354.427 239.053-73.697 100.72-137.492 195.748-240.292 195.748H66.56v129.92h91.617c164.813 0 257.813-135.014 339.968-247.07 73.698-100.773 151.7-187.782 254.746-187.782z m-446.632 74.291l21.335-28.907c17.515-23.803 35.835-49.045 55.777-74.092-59.044-57.267-130.12-99.533-225.193-99.533H66.56v129.874s24.699-1.239 91.617 0c64.784 1.434 105.416 28.954 148.08 72.658zM810.5 666.665h-57.559c-62.766 0-125.42-36.373-170.312-84.629a929.229 929.229 0 0 1-13.557 18.463c-19.702 26.87-40.832 55.824-64.144 84.337 60.585 61.368 148.383 111.703 248.013 111.703h57.56v111.406L957.44 736.947 810.501 570.214v96.451z"
              p-id="16372"
              fill="#CC00FF"
            ></path>
          </svg>
        </div>
        <div class="top2">
          <h2>以往竞赛</h2>
          <i class="el-icon-question"></i>
          <h2>时长</h2>
        </div>
        <ul>
          <li>
            <div class="left">
              <h1>第 350 场竞赛</h1>
              <h2>2022-05-01，10:30</h2>
            </div>
            <img src="./images/10.png" alt="" />
            <h1 class="h1">1 小时 30 分</h1>
            <button><span>虚拟</span></button>
          </li>
          <li>
            <div class="left">
              <h1>第 153 场竞赛</h1>
              <h2>2022-04-28，9:00</h2>
            </div>
            <img src="./images/11.png" alt="" />
            <h1 class="h1">1 小时 00 分</h1>
            <button><span>虚拟</span></button>
          </li>
          <li>
            <div class="left">
              <h1>第 12 场竞赛</h1>
              <h2>2022-04-24，12:30</h2>
            </div>
            <img src="./images/12.png" alt="" />
            <h1 class="h1">2 小时 30 分</h1>
            <button><span>虚拟</span></button>
          </li>
          <li>
            <div class="left">
              <h1>第 247 场竞赛</h1>
              <h2>2022-04-22，14:30</h2>
            </div>
            <img src="./images/13.png" alt="" />
            <h1 class="h1">3 小时 00 分</h1>
            <button><span>虚拟</span></button>
          </li>
          <li>
            <div class="left">
              <h1>第 745 场竞赛</h1>
              <h2>2022-04-21，9:00</h2>
            </div>
            <img src="./images/14.png" alt="" />
            <h1 class="h1">4 小时 00 分</h1>
            <button><span>虚拟</span></button>
          </li>
          <li>
            <div class="left">
              <h1>第 1854 场竞赛</h1>
              <h2>2022-04-17，10:30</h2>
            </div>
            <img src="./images/15.png" alt="" />
            <h1 class="h1">1 小时 30 分</h1>
            <button><span>虚拟</span></button>
          </li>
          <li>
            <div class="left">
              <h1>第 247 场竞赛</h1>
              <h2>2022-04-22，14:30</h2>
            </div>
            <img src="./images/16.png" alt="" />
            <h1 class="h1">3 小时 00 分</h1>
            <button><span>虚拟</span></button>
          </li>
          <li>
            <div class="left">
              <h1>第 745 场竞赛</h1>
              <h2>2022-04-21，9:00</h2>
            </div>
            <img src="./images/17.png" alt="" />
            <h1 class="h1">4 小时 00 分</h1>
            <button><span>虚拟</span></button>
          </li>
          <li>
            <div class="left">
              <h1>第 1854 场竞赛</h1>
              <h2>2022-04-17，10:30</h2>
            </div>
            <img src="./images/18.png" alt="" />
            <h1 class="h1">1 小时 30 分</h1>
            <button><span>虚拟</span></button>
          </li>
          <li>
            <div class="left">
              <h1>第 1854 场竞赛</h1>
              <h2>2022-04-17，10:30</h2>
            </div>
            <img src="./images/19.png" alt="" />
            <h1 class="h1">1 小时 30 分</h1>
            <button><span>虚拟</span></button>
          </li>
        </ul>
      </div>
    </div>
    <div class="top">
      <div class="nav-wrapper">
        <div class="navbar w clearfix">
          <div class="nav">
            <a href="javascript:;">
              <img src="./images/2.jpg" alt="" />
            </a>
          </div>
          <div class="text">
            <a href="#" class="yangshi">免费赛</a>
            <a href="#">优质赛</a>
            <a href="javascript:;" class="hot1">
              <img src="./images/home-tag-hot.png" alt="" />
            </a>
            <a href="#">蓝桥杯</a>
            <a href="javascript:;" class="hot2">
              <img src="./images/home-tag-hot.png" alt="" />
            </a>
            <a href="#">问答库</a>
            <a href="#">论坛</a>
          </div>
          <div class="search-wrapper">
            <form class="search" action="#">
              <input class="search-inp" type="text" />
              <button class="search-btn">
                <img src="./images/search.png" alt="" />
              </button>
            </form>
          </div>
          <div class="login">
            <button class="denglu"><span>报名</span></button>
            <button class="zhuce"><span>咨询</span></button>
          </div>
        </div>
      </div>
      <div class="wenzi">
        <a href="#"
          >你报名的《蓝桥杯大赛培训班》已学至“2-2-8数据结构” 前往学习>></a
        >
      </div>
      <div class="header-wrapper">
        <div class="header w clearfix">
          <div class="javaee">
            <nav class="java">
              <div class="item">
                <a href="javascript:;">
                  JavaEE
                  <i class="el-icon-arrow-right"></i>
                </a>
              </div>
              <div class="item">
                <a href="javascript:;">
                  前端与移动开发
                  <i class="el-icon-arrow-right"></i>
                </a>
              </div>
              <div class="item">
                <a href="javascript:;">
                  云计算大数据
                  <i class="el-icon-arrow-right"></i>
                </a>
              </div>
              <div class="item">
                <a href="javascript:;">
                  蓝桥杯大赛
                  <i class="el-icon-arrow-right"></i>
                </a>
              </div>
              <div class="item">
                <a href="javascript:;">
                  微信小程序
                  <i class="el-icon-arrow-right"></i>
                </a>
              </div>
              <div class="item">
                <a href="javascript:;">
                  计算机设计大赛
                  <i class="el-icon-arrow-right"></i>
                </a>
              </div>
              <div class="item">
                <a href="javascript:;">
                  支付宝前端
                  <i class="el-icon-arrow-right"></i>
                </a>
              </div>
              <div class="item">
                <a href="javascript:;">
                  华北五省
                  <i class="el-icon-arrow-right"></i>
                </a>
              </div>
              <div class="item">
                <a href="javascript:;">
                  双体杯
                  <i class="el-icon-arrow-right"></i>
                </a>
              </div>
            </nav>
            <!-- 设置右拉框 -->
            <div class="javaee-list">
              <a href="javascript:;">Java SE</a>
              <a href="javascript:;">JDBC编程</a>
              <a href="javascript:;">DHTML编程</a>
              <a href="javascript:;">Java WEB编程</a>
              <a href="javascript:;">Android 编程</a>
              <a href="javascript:;">SVN应用</a>
              <a href="javascript:;">CVS应用</a>
              <a href="javascript:;">Java SE</a>
              <a href="javascript:;">Java SE</a>
              <a href="javascript:;">Java SE</a>
              <a href="javascript:;">Java SE</a>
              <a href="javascript:;">Java SE</a>
              <a href="javascript:;">Java SE</a>
              <a href="javascript:;">Java SE</a>
              <a href="javascript:;">Java SE</a>
              <a href="javascript:;">Java SE</a>
            </div>
          </div>
        </div>
        <div id="outer">
          <van-swipe :autoplay="2000" indicator-color="black">
            <van-swipe-item
              ><img class="image" src="./images/banner.jpg" alt=""
            /></van-swipe-item>
            <van-swipe-item
              ><img class="image" src="./images/banner1.jpg" alt=""
            /></van-swipe-item>
            <van-swipe-item
              ><img class="image" src="./images/banner2.jpg" alt=""
            /></van-swipe-item>
            <van-swipe-item
              ><img class="image" src="./images/banner3.jpg" alt=""
            /></van-swipe-item>
            <van-swipe-item
              ><img class="image" src="./images/banner4.jpg" alt=""
            /></van-swipe-item>
            <van-swipe-item
              ><img class="image" src="./images/banner5.jpg" alt=""
            /></van-swipe-item>
            <van-swipe-item
              ><img class="image" src="./images/banner6.jpg" alt=""
            /></van-swipe-item>
            <van-swipe-item
              ><img class="image" src="./images/banner7.jpg" alt=""
            /></van-swipe-item>
          </van-swipe>
          <div class="zhibo-wrapper">
            <h1>直播课</h1>
            <h2>实时直播，随时查看</h2>
            <div class="imgku">
              <a href="javascript:;">
                <h2>竞赛倒计时</h2>
                <van-count-down :time="time">
                  <template #default="timeData">
                    <span class="block">{{ timeData.hours }}</span>
                    <span class="colon">:</span>
                    <span class="block">{{ timeData.minutes }}</span>
                    <span class="colon">:</span>
                    <span class="block">{{ timeData.seconds }}</span>
                  </template>
                </van-count-down>
              </a>
            </div>
            <h3>实战React全栈+服务</h3>
            <img src="./images/myvideo-time.png" alt="" />
            <h4>2022-10-13 18:00:00</h4>
            <button class="baoming"><span>立即报名</span></button>
            <button class="kecheng"><span>往期课程</span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      imagebox: [
        { id: 0, idView: require("./images/4.png") },
        { id: 1, idView: require("./images/5.png") },
        { id: 2, idView: require("./images/6.png") },
        { id: 3, idView: require("./images/7.png") },
        { id: 4, idView: require("./images/8.png") },
        { id: 5, idView: require("./images/9.png") },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.match {
  position: relative;
  width: 80%;
  margin: 0 auto;
  z-index: 0;
  .imagess {
    width: 100%;
    height: 100%;
  }
  .content {
    position: relative;
    top: -6em;
    left: -5em;
    width: 101.5em;
    .con {
      color: white;
      .image1 {
        margin: -7.5em -15.5em;
        transform: scale(0.5);
        border-radius: 20px;
        float: left;
      }
      .center {
        width: 30em;
        position: absolute;
        top: -2em;
        left: 0.5em;
        z-index: 999;
        h2 {
          margin-bottom: -7.5em;
        }
        h1 {
          margin-left: -0.7em;
          font-size: 30px;
          margin-bottom: -4em;
        }
        .h3 {
          margin-left: 2.7em;
        }
        .cen {
          margin: -4em 6.5em;
          .el-icon-date {
            float: left;
            font-size: 20px;
          }
          h3 {
            position: relative;
            top: -5em;
            left: -2.5em;
          }
        }
        .bottom {
          margin: -8em -6.8em;
          .el-icon-time {
            float: left;
            font-size: 20px;
            margin-left: 8em;
          }
          h4 {
            position: absolute;
            top: 13.2em;
            left: 7.5em;
            font-size: 14px;
          }
          .van-count-down {
            font-size: 13px;
            color: white;
          }
        }
      }
    }
    .cons {
      position: relative;
      left: 60em;
      color: black;
      .image3 {
        margin-top: 2.5em;
        width: 32em;
        height: 20em;
        border-radius: 20px;
        margin-left: -111.1em;
      }
      .center {
        width: 30em;
        position: absolute;
        top: -2em;
        left: 0.5em;
        z-index: 999;
        h2 {
          margin-bottom: -7.5em;
        }
        h1 {
          margin-left: -0.7em;
          font-size: 30px;
          margin-bottom: -4em;
        }
        .h3 {
          margin-left: 2.7em;
        }
        .cen {
          margin: -5em 6.5em;
          .el-icon-date {
            float: left;
            font-size: 20px;
          }
          h3 {
            position: relative;
            top: -5em;
            left: -2.5em;
          }
        }
        .bottom {
          margin: -8em -6.8em;
          .el-icon-time {
            float: left;
            font-size: 20px;
            margin-left: 8em;
          }
          h4 {
            position: absolute;
            top: 12.3em;
            left: 7.5em;
            font-size: 14px;
          }
          .van-count-down {
            font-size: 13px;
            color: black;
          }
        }
      }
    }
    .image2 {
      position: absolute;
      left: 44.2em;
      top: 2.6em;
      transform: scale(0.7);
    }
  }
  .cont {
    position: relative;
    top: -9em;
    height: 90em;
    .el-carousel {
      width: 57%;
      float: left;
      /deep/ .el-carousel__arrow i {
        position: absolute;
        margin: -0.5em;
      }
      /deep/ .el-carousel__indicators--outside {
        position: absolute;
        top: 0em;
        display: none;
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
      }
    }
    .game {
      float: right;
      width: 37em;
      height: 80em;
      background-color: #36393f;
      border-radius: 15px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
      color: white;
      .top1 {
        height: 10.2em;
        border-bottom: 1px solid #bfbfbf;
        h1 {
          position: absolute;
          margin: -1em 1em;
          font-size: 30px;
        }
        h4 {
          position: absolute;
          margin: 0.5em 2.7em;
          color: #bfbfbf;
        }
        .icon {
          position: absolute;
          margin: 3em 8.5em;
        }
        h3 {
          width: 10em;
          position: absolute;
          color: #007bff;
          font-size: 15px;
          margin: -1.8em 21em;
        }
      }
      .random {
        width: 3.5em;
        height: 3.5em;
        position: absolute;
        margin: -3.7em 31em;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
        border-radius: 50%;
        .icon {
          position: absolute;
          margin: 0.55em -1.1em;
        }
      }
      .top2 {
        height: 3.5em;
        border-bottom: 1px solid #bfbfbf;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
        h2 {
          float: left;
          margin: -3.7em 8em 0 2em;
        }
        i {
          position: absolute;
          margin: 0.5em -11em;
          float: left;
          font-size: 20px;
        }
      }
      ul {
        position: relative;
        top: -9.5em;
        li {
          height: 10.5em;
          margin-bottom: -9.5em;
          border-bottom: 1px solid #bfbfbf;
          .left {
            position: absolute;
            float: left;
            h1 {
              font-size: 16px;
            }
            h2 {
              margin-top: -10.5em;
              margin-left: 1em;
              font-size: 13px;
              color: #bfbfbf;
            }
          }
          img {
            position: absolute;
            margin-top: 4.5em;
            left: 11em;
            float: left;
            width: 10em;
            height: 6em;
          }
          .h1 {
            position: relative;
            top: 0.4em;
            left: 3em;
            width: 12em;
            margin: 4em 10em;
            font-size: 16px;
            color: #bfbfbf;
          }
          button {
            position: relative;
            top: -18.5em;
            left: 14.5em;
            display: inline-block;
            width: 3.5em;
            height: 2em;
            border: none;
            border-radius: 5px;
            background-color: #cc00ff;
            span {
              width: 2em;
              position: absolute;
              top: -5.65em;
              left: 0.8em;
            }
          }
        }
      }
    }
  }
  .top {
    margin-top: -15em;
    width: 96%;
    height: 44em;
    border-radius: 15px;
    padding: 2em;
    background-color: #36393f;
    .nav-wrapper {
      margin-top: -1em;
      height: 86px;
      border-bottom: 1px solid rgb(190, 190, 190);
      .navbar {
        line-height: 86px;
        position: relative;
        .nav {
          position: absolute;
          top: 13px;
          img {
            margin-left: -13em;
            margin-top: -13.5em;
            transform: scale(0.3);
          }
        }
        .text {
          font-size: 16px;
          position: absolute;
          left: 155px;
          font-size: 18px;
          .yangshi {
            color: #2158e6;
          }
          a {
            color: white;
            margin: auto 10px;
          }
          .hot1 {
            position: absolute;
            top: -16px;
            left: 110px;
          }
          .hot2 {
            position: absolute;
            top: -16px;
            left: 188px;
          }
        }
        .text a:hover {
          color: #2158e6;
        }
        .search-wrapper {
          position: absolute;
          left: 650px;
          float: left;
          .search-inp {
            position: absolute;
            top: 27px;
            width: 144px;
            height: 24px;
            outline: none;
            line-height: 28px;
            padding: 2px 44px 2px 17px;
            border: 1px solid rgb(185, 182, 182);
            border-right: none;
          }
          .search:hover .search-inp,
          .search:hover .search-btn {
            border-color: red;
          }
          .search-btn {
            position: absolute;
            width: 3em;
            height: 30px;
            top: 27px;
            left: 206px;
            border: 1px solid rgb(185, 182, 182);
            border-left: none;
            background-color: white;
            img {
              position: absolute;
              top: 5px;
              left: 4px;
            }
          }
        }
        .login {
          float: right;
          button {
            position: absolute;
            width: 4.5em;
            height: 2em;
            top: 27px;
            font-size: 15px;
            border: none;
            border-radius: 5%;
            border: 1px solid rgb(185, 182, 182);
          }
          .denglu {
            left: 922px;
            color: black;
            background-color: #f8f8fa;
            border: none;
            span {
              position: absolute;
              top: -1.8em;
              left: 1.2em;
            }
          }
          .zhuce {
            left: 990px;
            color: white;
            background-color: rgb(98, 127, 224);
            border: none;
            span {
              position: absolute;
              top: -1.8em;
              left: 1.2em;
            }
          }
        }
      }
    }
    .wenzi {
      position: relative;
      height: 60px;
      line-height: 60px;
      font-size: 17px;
      a {
        position: absolute;
        left: 270px;
        color: rgb(219, 160, 112);
      }
    }
    .header-wrapper {
      height: 387px;
      position: relative;
      .java {
        position: absolute;
        width: 199px;
        height: 357px;
        background-image: -moz-linear-gradient(
          90deg,
          rgb(108, 109, 104),
          rgb(85, 87, 87)
        );

        background-image: -webkit-linear-gradient(
          90deg,
          rgb(108, 109, 104),
          rgb(85, 87, 87)
        );

        background-image: linear-gradient(
          90deg,
          rgb(108, 109, 104),
          rgb(85, 87, 87)
        );
        opacity: 0.95;
        padding: 15px 0;
        font-size: 15px;
        .item {
          text-align: left;
          width: 199px;
          height: 40px;
          line-height: 40px;
          a {
            margin: 0 30px;
            color: white;
            i {
              position: relative;
              line-height: 40px;
              float: right;
              right: 1.5em;
            }
          }
        }
        .item:hover {
          background-color: rgb(44, 160, 196);
        }
      }
      .javaee-list {
        position: absolute;
        display: none;
        left: 199px;
        width: 628px;
        height: 346px;
        background-color: rgb(33, 3, 117);
        opacity: 0.8;
        z-index: 999;
        border-bottom-right-radius: 8px;
        a {
          float: left;
          color: white;
          font-size: 15px;
          display: block;
          width: 100px;
          height: 15px;
          margin: 22px 5px 10px 17px;
        }
      }
      .javaee:hover .javaee-list {
        display: block;
      }
    }
    #outer {
      margin-left: 16.6em;
      .image {
        width: 100%;
        height: 387px;
      }
      .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        text-align: center;
      }
      /deep/ .van-swipe__indicators {
        position: absolute;
        top: 30em;
        height: 1em;
        line-height: 1em;
      }
      /deep/ .van-swipe__indicator {
        width: 10px;
        height: 10px;
        margin-right: 10px;
      }
      .zhibo-wrapper {
        position: absolute;
        top: 20px;
        left: 855.5px;
        z-index: 9;
        width: 206px;
        height: 346px;
        background-color: white;
        h1 {
          font-size: 20px;
          color: rgb(2, 6, 245);
          text-align: center;
          margin-top: -55px;
        }
        h2 {
          position: absolute;
          top: -29px;
          left: 45px;
          font-size: 13px;
          color: black;
          text-align: center;
        }
        .imgku {
          position: absolute;
          top: 68px;
          width: 170px;
          height: 100px;
          left: 20px;
          background-image: url("./images/1.jpg");
          background-size: 100%;
          background-color: hsl(244, 69%, 46%);
          background-blend-mode: overlay;
          h2 {
            position: absolute;
            top: -50px;
            font-size: 14px;
            left: 50px;
            color: white;
          }
          .van-count-down {
            margin-top: 4.5em;
            .colon {
              display: inline-block;
              margin: 0 4px;
              color: #ee0a24;
            }
            .block {
              display: inline-block;
              width: 22px;
              color: #fff;
              font-size: 12px;
              text-align: center;
              background-color: #ee0a24;
            }
          }
        }
        h3 {
          position: absolute;
          top: 110px;
          left: 40px;
          color: black;
        }
        img {
          position: absolute;
          top: 212px;
          left: 34px;
        }
        h4 {
          position: absolute;
          top: 140px;
          left: 53px;
        }
        .baoming {
          position: absolute;
          top: 244px;
          left: 20px;
          width: 170px;
          height: 41px;
          border-radius: 20px;
          color: white;
          border: none;
          background-color: #2158e6;
          span {
            position: absolute;
            font-size: 14px;
            top: -60px;
            left: 58px;
          }
        }
        .kecheng {
          position: absolute;
          top: 294px;
          left: 20px;
          width: 170px;
          height: 41px;
          border-radius: 20px;
          color: white;
          border: none;
          background-color: rgb(194, 192, 192);
          span {
            position: absolute;
            font-size: 14px;
            top: -60px;
            left: 58px;
          }
        }
      }
    }
    /deep/ .el-container .el-main[data-v-1d9b105c] {
      line-height: initial;
    }
  }
}
</style>