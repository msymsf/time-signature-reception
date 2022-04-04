<template>
  <div class="studyway">
    <el-row :gutter="25">
      <el-col :span="16">
        <div class="slideshow">轮播图</div>
        <div class="way">
          <h1>方向</h1>
          <div class="b" v-for="(item, index) in List" :key="index">
            <el-button
              :class="{ b1: Index == index, b2: Index != index }"
              @click="Status(item, index)"
              ><span>{{ item.name }}</span></el-button
            >
          </div>
          <svg
            t="1648825089896"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5930"
            width="36"
            height="36"
          >
            <path
              d="M512 492.8m-96 0a1.5 1.5 0 1 0 192 0 1.5 1.5 0 1 0-192 0Z"
              p-id="5931"
              fill="#e6e2dd"
            ></path>
            <path
              d="M224 492.8m-96 0a1.5 1.5 0 1 0 192 0 1.5 1.5 0 1 0-192 0Z"
              p-id="5932"
              fill="#e6e2dd"
            ></path>
            <path
              d="M800 492.8m-96 0a1.5 1.5 0 1 0 192 0 1.5 1.5 0 1 0-192 0Z"
              p-id="5933"
              fill="#e6e2dd"
            ></path>
          </svg>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="progress">
          <h1>我的进度（50%）</h1>
          <el-progress
            :text-inside="true"
            :stroke-width="15"
            :percentage="50"
            style="width: 230px; margin: -1em 2em"
          ></el-progress>
        </div>
        <div class="course">
          <h1>我的课程</h1>
          <div class="courses">
            <div class="c">
              <div class="image"></div>
              <h2 class="h1">JavaSE(50%)</h2>
              <el-progress
                :text-inside="true"
                :stroke-width="15"
                :percentage="50"
                style="width: 120px"
                class="p1"
              ></el-progress>
            </div>
            <div class="c">
              <div class="image">
                <h2 class="h2">MySQL(50%)</h2>
                <el-progress
                  :text-inside="true"
                  :stroke-width="15"
                  :percentage="50"
                  style="width: 120px"
                  class="p2"
                ></el-progress>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "StudyWay",
  data() {
    return {
      List: [
        {
          name: "全部",
        },
        {
          name: "前端",
        },
        {
          name: "后端",
        },
        {
          name: "大数据",
        },
      ],
      Item: "",
      Index: 0,
    };
  },
  methods: {
    Status(item, index) {
      this.Item = item.name;
      this.Index = index;
    },
  },
};
</script>

<style lang="less" scoped>
.studyway {
  position: relative;
  padding: 1em;
  margin: 0em auto;
  width: 65%;
  color: white;
  .el-row {
    height: 50em;
    .slideshow {
      border-radius: 16px;
      background-color: #36393f;
      height: 19em;
    }
    .way {
      margin-top: 1.5em;
      height: 5.5em;
      background-color: #36393f;
      border-radius: 16px;
      h1 {
        position: absolute;
        margin: -3em 2em;
        font-size: 15px;
        color: #e2e3e7;
      }
      .b {
        position: relative;
        left: 6.5em;
        float: left;
        margin: -3.7em 0em;
        .el-button {
          display: inline-block;
          margin: 0 0.5em;
          background-color: #292c32;
          border: none;
          width: 90px;
          height: 37px;
          border-radius: 20px;
        }
        .b1 {
          background-color: white;
          color: #292c32;
        }
        .b2 {
          color: #e2e3e7;
          background-color: #292c32;
        }
      }
      .icon {
        position: absolute;
        margin: 1.3em 1.5em;
      }
      ul {
        float: left;
        margin: 7em -35em;
        width: 109%;
        li {
          float: left;
          width: 9.5em;
          height: 12em;
          margin: 0 3.8em 2em 0;
          background-color: #36393f;
          border-radius: 15px;
        }
      }
    }
    .progress {
      position: absolute;
      border-radius: 16px;
      background-color: #36393f;
      height: 19em;
      h1 {
        margin: -3.7em 0;
        font-size: 15px;
        color: #e2e3e7;
      }
    }
    .course {
      margin: 20.5em 0;
      border-radius: 16px;
      width: 23.2em;
      height: 23em;
      background-color: #36393f;
      h1 {
        position: absolute;
        margin: -3.5em 1.5em;
        font-size: 15px;
        color: #e2e3e7;
      }
      .courses {
        position: absolute;
        margin-top: 2.5em;
        .c {
          border-radius: 16px;
          width: 20em;
          height: 7.5em;
          margin: 2em 1.5em;
          background-color: #292c32;
          .image {
            position: absolute;
            border-radius: 16px;
            width: 5em;
            height: 6em;
            margin: 0.75em 1em;
            background-color: #36393f;
          }
          .h1 {
            position: absolute;
            margin: -3em 6em;
          }
          .p1 {
            position: absolute;
            margin: 4.5em 7.5em;
          }
          .h2 {
            position: absolute;
            margin: -3.5em 5.5em;
          }
          .p2 {
            position: absolute;
            margin: 4em 6.5em;
          }
        }
      }
    }
  }
}
</style>