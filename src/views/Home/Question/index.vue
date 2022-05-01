<template>
  <div class="text-container">
    <el-row :gutter="20">
      <el-col :span="16"
        ><div class="center">
          <ul>
            <li>
              <h1>推荐</h1>
              <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in imagebox" :key="item.id">
                  <img :src="item.idView" />
                </el-carousel-item>
              </el-carousel>
            </li>
            <li class="li">
              <h1 class="h1">学习计划</h1>
              <div class="img">
                <img class="image" src="./images/1.webp" alt="" />
                <h2>2022编程</h2>
              </div>
              <div class="img">
                <img class="image" src="./images/2.webp" alt="" />
                <h2>专项突破</h2>
              </div>
              <div class="img">
                <img class="image" src="./images/3.webp" alt="" />
                <h2>刷题计划</h2>
              </div>
              <div class="img">
                <img class="image" src="./images/4.webp" alt="" />
                <h2>数据结构</h2>
              </div>
              <div class="img">
                <img class="image" src="./images/5.webp" alt="" />
                <h2>面试宝典</h2>
              </div>
            </li>
          </ul>
          <div class="line"></div>
          <div class="content">
            <div class="status">
              <div v-for="(item, index) in List" :key="index">
                <div
                  class="btn"
                  :class="{
                    c1: Index == index,
                    c2: Index != index,
                  }"
                  @click="Status(item, index)"
                >
                  <img :src="item.src" />
                  <span>{{ item.name }}</span>
                </div>
              </div>
              <div class="top">
                <el-select v-model="value1" clearable placeholder="题单">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <el-select v-model="value2" clearable placeholder="难度">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <el-select v-model="value3" clearable placeholder="状态">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <el-input placeholder="请输入内容" prefix-icon="el-icon-search">
                </el-input>
                <i class="el-icon-setting"></i>
                <svg
                  t="1650617961820"
                  class="icon2"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="59453"
                  width="32"
                  height="32"
                >
                  <path
                    d="M204.8 0h614.4Q1024 0 1024 204.8v614.4q0 204.8-204.8 204.8H204.8Q0 1024 0 819.2V204.8Q0 0 204.8 0z"
                    fill="#24acfb"
                    p-id="59454"
                  ></path>
                  <path
                    d="M701.798 427.182h41.677V496.2L849.92 374.835 743.506 256v78.817H701.86c-119.347 0-197.171 90.317-256.656 170.005-53.35 71.639-99.543 139.223-173.987 139.223H204.8v92.395h66.355c119.347 0 186.696-96.03 246.17-175.718 53.391-71.67 109.875-133.53 184.473-133.53z m-323.46 52.838l15.482-20.561c12.647-16.927 25.938-34.888 40.346-52.695-42.701-40.745-94.147-70.79-163.021-70.79H204.8v92.365s17.869-0.87 66.355 0c46.9 1.014 76.309 20.583 107.213 51.671h-0.03z m365.137 167.558H701.86c-45.445 0-90.829-25.846-123.31-60.17a728.952 728.952 0 0 1-9.83 13.117c-14.265 19.118-29.553 39.71-46.46 59.986 43.869 43.643 107.449 79.431 179.61 79.431h41.677V819.2L849.92 697.58 743.506 579.02v68.568h-0.03z"
                    fill="#FFFFFF"
                    p-id="59455"
                  ></path>
                </svg>
                <h2>随机一题</h2>
              </div>
              <div v-show="Index == 0">
                <el-table
                  :data="
                    tableData.slice(
                      (currPage - 1) * pageSize,
                      currPage * pageSize
                    )
                  "
                  style="width: 95%; color: white"
                  :default-sort="{ prop: 'date', order: 'descending' }"
                  :cell-style="rowClass"
                  :header-cell-style="headClass"
                >
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="src"
                    label="状态"
                  >
                    <template slot-scope="{ row }">
                      <img
                        :src="
                          row.src === 'true'
                            ? require('./images/6.png')
                            : require('./images/7.png')
                        "
                      />
                    </template>
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="title"
                    label="题目"
                    sortable
                    width="200%"
                  >
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="key"
                    label="题解"
                    sortable
                  >
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="rate"
                    label="通过率"
                    sortable
                  ></el-table-column>
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="tough"
                    label="难度"
                    sortable
                  >
                    <template slot-scope="scope">
                      <el-tag
                        :type="
                          scope.row.tough === '中等'
                            ? 'success'
                            : scope.row.tough === '简单'
                            ? 'primary'
                            : 'danger'
                        "
                        >{{ scope.row.tough }}</el-tag
                      >
                    </template>
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="frequency"
                    label="出现频率"
                  >
                  </el-table-column>
                </el-table>
                <el-pagination
                  background
                  style="text-align: center"
                  layout="prev, pager, next, jumper"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currPage"
                  :page-size="pageSize"
                  :total="tableData.length"
                >
                </el-pagination>
              </div>
              <div v-show="Index == 1">
                <el-table
                  :data="
                    tableData1.slice(
                      (currPage - 1) * pageSize,
                      currPage * pageSize
                    )
                  "
                  style="width: 95%; color: white"
                  :default-sort="{ prop: 'date', order: 'descending' }"
                  :cell-style="rowClass"
                  :header-cell-style="headClass"
                >
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="src"
                    label="状态"
                  >
                    <template slot-scope="{ row }">
                      <img
                        :src="
                          row.src === 'true'
                            ? require('./images/6.png')
                            : require('./images/7.png')
                        "
                      />
                    </template>
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="title"
                    label="题目"
                    sortable
                    width="200%"
                  >
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="key"
                    label="题解"
                    sortable
                  >
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="rate"
                    label="通过率"
                    sortable
                  ></el-table-column>
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="tough"
                    label="难度"
                    sortable
                  >
                    <template slot-scope="scope">
                      <el-tag
                        :type="
                          scope.row.tough === '中等'
                            ? 'success'
                            : scope.row.tough === '简单'
                            ? 'primary'
                            : 'danger'
                        "
                        >{{ scope.row.tough }}</el-tag
                      >
                    </template>
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="frequency"
                    label="出现频率"
                  >
                  </el-table-column>
                </el-table>
                <el-pagination
                  background
                  style="text-align: center"
                  layout="prev, pager, next, jumper"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currPage"
                  :page-size="pageSize"
                  :total="tableData1.length"
                >
                </el-pagination>
              </div>
              <div v-show="Index == 2">
                <el-table
                  :data="
                    tableData2.slice(
                      (currPage - 1) * pageSize,
                      currPage * pageSize
                    )
                  "
                  style="width: 95%; color: white"
                  :default-sort="{ prop: 'date', order: 'descending' }"
                  :cell-style="rowClass"
                  :header-cell-style="headClass"
                >
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="src"
                    label="状态"
                  >
                    <template slot-scope="{ row }">
                      <img
                        :src="
                          row.src === 'true'
                            ? require('./images/6.png')
                            : require('./images/7.png')
                        "
                      />
                    </template>
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="title"
                    label="题目"
                    sortable
                    width="200%"
                  >
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="key"
                    label="题解"
                    sortable
                  >
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="rate"
                    label="通过率"
                    sortable
                  ></el-table-column>
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="tough"
                    label="难度"
                    sortable
                  >
                    <template slot-scope="scope">
                      <el-tag
                        :type="
                          scope.row.tough === '中等'
                            ? 'success'
                            : scope.row.tough === '简单'
                            ? 'primary'
                            : 'danger'
                        "
                        >{{ scope.row.tough }}</el-tag
                      >
                    </template>
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="frequency"
                    label="出现频率"
                  >
                  </el-table-column>
                </el-table>
                <el-pagination
                  background
                  style="text-align: center"
                  layout="prev, pager, next, jumper"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currPage"
                  :page-size="pageSize"
                  :total="tableData2.length"
                >
                </el-pagination>
              </div>
              <div v-show="Index == 3">
                <el-table
                  :data="
                    tableData3.slice(
                      (currPage - 1) * pageSize,
                      currPage * pageSize
                    )
                  "
                  style="width: 95%; color: white"
                  :default-sort="{ prop: 'date', order: 'descending' }"
                  :cell-style="rowClass"
                  :header-cell-style="headClass"
                >
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="src"
                    label="状态"
                  >
                    <template slot-scope="{ row }">
                      <img
                        :src="
                          row.src === 'true'
                            ? require('./images/6.png')
                            : require('./images/7.png')
                        "
                      />
                    </template>
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="title"
                    label="题目"
                    sortable
                    width="200%"
                  >
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="key"
                    label="题解"
                    sortable
                  >
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="rate"
                    label="通过率"
                    sortable
                  ></el-table-column>
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="tough"
                    label="难度"
                    sortable
                  >
                    <template slot-scope="scope">
                      <el-tag
                        :type="
                          scope.row.tough === '中等'
                            ? 'success'
                            : scope.row.tough === '简单'
                            ? 'primary'
                            : 'danger'
                        "
                        >{{ scope.row.tough }}</el-tag
                      >
                    </template>
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    align="center"
                    prop="frequency"
                    label="出现频率"
                  >
                  </el-table-column>
                </el-table>
                <el-pagination
                  background
                  style="text-align: center"
                  layout="prev, pager, next, jumper"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currPage"
                  :page-size="pageSize"
                  :total="tableData3.length"
                >
                </el-pagination>
              </div>
            </div>
          </div></div
      ></el-col>
      <el-col :span="8"
        ><div class="right_1">
          <img src="./images/1.png" alt="" />
          <van-calendar
            title="每日学习"
            :poppable="false"
            :show-confirm="false"
            :style="{ height: '370px' }"
          />
        </div>
        <div class="right_2">
          <div class="icons">
            <svg
              t="1650596126959"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="8182"
              width="28"
              height="28"
            >
              <path
                d="M946.83136 536.17664V227.584c0-65.3312-53.03296-118.48704-118.24128-118.48704h-34.816v-34.816A71.41376 71.41376 0 0 0 722.41152 2.9184a71.41376 71.41376 0 0 0-71.3728 71.36256v37.77536H546.33472v-37.7856a71.41376 71.41376 0 0 0-71.3728-71.36256 71.41376 71.41376 0 0 0-71.36256 71.36256v37.77536H298.77248V74.27072a71.41376 71.41376 0 0 0-71.3728-71.36256 71.424 71.424 0 0 0-71.3728 71.36256v34.816h-34.57024C56.1152 109.08672 2.9696 162.24256 2.9696 227.57376v601.93792c0 65.45408 53.1456 118.7328 118.48704 118.7328H537.6c53.1456 47.13472 120.82176 72.83712 192.5632 72.83712 77.63968 0 150.7328-30.26944 205.7216-85.13536 54.87616-55.00928 85.1456-127.96928 85.1456-205.74208 0-72.33536-26.2144-140.62592-74.19904-194.02752zM699.52512 74.27072a22.8352 22.8352 0 0 1 22.8864-22.87616 22.8352 22.8352 0 0 1 22.87616 22.87616v56.59648c-0.12288 0.8704-0.12288 1.59744-0.12288 2.4576s0 1.59744 0.12288 2.4576v79.86176a22.94784 22.94784 0 0 1-22.87616 23.00928 22.8352 22.8352 0 0 1-22.8864-22.8864V74.27072z m-247.4496 0a22.8352 22.8352 0 0 1 22.87616-22.87616 22.8352 22.8352 0 0 1 22.8864 22.87616V215.6544a22.94784 22.94784 0 0 1-22.8864 23.00928 22.8352 22.8352 0 0 1-22.87616-22.8864V74.27072zM227.39968 51.39456a22.8352 22.8352 0 0 1 22.8864 22.87616v141.49632a22.7328 22.7328 0 0 1-6.64576 16.11776c-4.3008 4.31104-10.07616 6.76864-16.24064 6.76864a22.8352 22.8352 0 0 1-22.87616-22.8864V135.7824c0.12288-0.86016 0.12288-1.59744 0.12288-2.4576s0-1.5872-0.12288-2.4576V74.27072a22.8352 22.8352 0 0 1 22.87616-22.87616zM121.45664 157.57312h34.57024v58.20416a71.424 71.424 0 0 0 71.3728 71.3728c19.18976 0 37.16096-7.49568 50.56512-21.0432s20.79744-31.49824 20.79744-50.45248v-55.12192h104.82688v55.2448a71.41376 71.41376 0 0 0 71.36256 71.3728c39.38304 0 71.3728-32.11264 71.3728-71.48544v-55.12192h104.71424v55.2448a71.41376 71.41376 0 0 0 71.3728 71.3728c39.3728 0 71.36256-32.11264 71.36256-71.48544V157.5936h34.816c38.51264 0 69.76512 31.37536 69.76512 70.01088v114.80064H51.44576V227.584a70.05184 70.05184 0 0 1 70.01088-70.01088z m-70.01088 671.9488V390.8608H898.3552v102.00064a289.1776 289.1776 0 0 0-168.20224-53.51424c-77.63968 0-150.7328 30.2592-205.73184 85.13536l-0.36864 0.36864v-73.46176h-96.96256v121.20064h58.44992c-30.14656 46.51008-46.27456 100.77184-46.27456 157.50144 0 61.6448 19.06688 120.45312 54.50752 169.55392H121.4464c-38.61504 0.12288-70.00064-31.37536-70.00064-70.12352z m448.37888-281.15968h-48.47616v-72.72448h48.47616v72.72448z m230.33856 424.2432c-133.632 0-242.40128-108.76928-242.40128-242.40128 0-133.62176 108.76928-242.39104 242.40128-242.39104 133.62176 0 242.39104 108.76928 242.39104 242.39104 0 133.632-108.76928 242.40128-242.39104 242.40128z m0 0"
                fill="#1296db"
                p-id="8183"
              ></path>
              <path
                d="M730.1632 524.12416c-113.57184 0-206.10048 92.40576-206.10048 206.09024 0 113.57184 92.39552 206.10048 206.10048 206.10048 113.57184 0 206.09024-92.39552 206.09024-206.10048 0-113.5616-92.5184-206.09024-206.09024-206.09024z m0 387.82976c-100.28032 0-181.87264-81.57184-181.87264-181.73952 0-100.27008 81.59232-181.85216 181.87264-181.85216s181.72928 81.58208 181.72928 181.85216c0 100.28032-81.44896 181.73952-181.72928 181.73952zM136.09984 572.7232h97.0752V451.52256h-96.95232V572.7232h-0.12288z m24.36096-96.95232h48.4864v72.71424H160.4608v-72.71424z m121.20064 96.95232h96.96256V451.52256h-96.96256V572.7232z m24.23808-96.95232h48.47616v72.71424h-48.47616v-72.71424z m-169.79968 339.3536h97.0752V693.92384h-96.95232v121.20064h-0.12288z m24.36096-96.96256h48.4864v72.72448H160.4608v-72.72448z m121.20064 96.96256h96.96256V693.92384h-96.96256v121.20064z m24.23808-96.96256h48.47616v72.72448h-48.47616v-72.72448z m0 0"
                fill="#1296db"
                p-id="8184"
              ></path>
              <path
                d="M851.36384 705.85344H742.33856V596.8384c0-6.63552-5.41696-12.1856-12.17536-12.1856-6.76864 0-12.1856 5.41696-12.1856 12.1856V730.2144h133.38624c6.63552 0 12.17536-5.40672 12.17536-12.16512 0-6.77888-5.53984-12.19584-12.17536-12.19584z m0 0"
                fill="#1296db"
                p-id="8185"
              ></path>
            </svg>
          </div>
          <div class="con">
            <h1>学习计划广场</h1>
            <h2>学习计划广场</h2>
          </div>
          <i class="el-icon-arrow-right"></i>
        </div>
        <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
          <van-swipe-item><img src="./images/10.jpg" alt="" /></van-swipe-item>
          <van-swipe-item><img src="./images/9.jpg" alt="" /></van-swipe-item>
          <van-swipe-item><img src="./images/8.jpg" alt="" /></van-swipe-item>
          <van-swipe-item><img src="./images/7.jpg" alt="" /></van-swipe-item>
          <van-swipe-item><img src="./images/11.jpg" alt="" /></van-swipe-item>
        </van-swipe>
        <img class="img1" src="./images/6.jpg" alt="" />
        <div class="right_3">
          <svg
            t="1650678353368"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="16093"
            width="45"
            height="45"
          >
            <path
              d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
              fill="#04B8DD"
              p-id="16094"
            ></path>
            <path
              d="M730.666667 712.533333a15.189333 15.189333 0 1 1 0 30.464H335.189333a15.189333 15.189333 0 0 1 0-30.421333h395.477334z m-99.114667-394.368l52.437333 52.437334a42.666667 42.666667 0 0 1 0 60.330666l-244.992 244.949334a21.333333 21.333333 0 0 1-15.061333 6.272H327.594667a7.594667 7.594667 0 0 1-7.594667-7.594667v-96.341333a21.333333 21.333333 0 0 1 6.229333-15.104l244.992-244.906667a42.666667 42.666667 0 0 1 60.330667 0z m-75.818667 58.453334l-199.082666 199.125333a21.333333 21.333333 0 0 0-6.229334 15.061333v39.594667a21.333333 21.333333 0 0 0 21.333334 21.333333h33.194666l-39.338666-39.338666a15.189333 15.189333 0 0 1 21.546666-21.504l46.890667 46.933333 191.445333-191.445333-69.76-69.76z m22.186667-20.906667l68.48 68.565333a42.666667 42.666667 0 0 0-5.418667-53.674666l-9.429333-9.386667a42.666667 42.666667 0 0 0-53.632-5.504z"
              fill="#FFFFFF"
              p-id="16095"
            ></path>
          </svg>
          <h1 class="s1">发起讨论</h1>
          <svg
            t="1650678446147"
            class="icon1"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="26000"
            width="45"
            height="45"
          >
            <path
              d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
              fill="#A08CF6"
              p-id="26001"
            ></path>
            <path
              d="M698.88 427.52h40.96v69.12l104.96-122.88-104.96-117.76v79.36h-40.96c-117.76 0-194.56 89.6-253.44 168.96-53.76 71.68-99.84 138.24-171.52 138.24H204.8v92.16h66.56c117.76 0 184.32-97.28 243.2-176.64 53.76-69.12 110.08-130.56 184.32-130.56z m-322.56 53.76l15.36-20.48c12.8-17.92 25.6-35.84 40.96-53.76-43.52-40.96-94.72-71.68-161.28-71.68H204.8v92.16h66.56c46.08 2.56 74.24 20.48 104.96 53.76z m363.52 166.4h-40.96c-46.08 0-89.6-25.6-122.88-61.44-2.56 5.12-7.68 7.68-10.24 12.8-15.36 17.92-28.16 40.96-46.08 58.88 43.52 43.52 107.52 79.36 179.2 79.36h40.96V819.2l104.96-122.88-104.96-117.76v69.12z"
              fill="#FFFFFF"
              p-id="26002"
            ></path>
          </svg>
          <h1 class="s2">随即面试</h1>
        </div>
        <div class="right_4">
          <h1>精选题单</h1>
          <ul>
            <li>
              <img src="./images/6.webp" alt="" />
              <svg
                t="1650634211422"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="87591"
                width="25"
                height="25"
              >
                <path
                  d="M478.540504 23.235761s34.388927 121.987747-74.122079 217.196279c-52.280463 45.890629-134.941684 121.987747-158.409802 253.211709A366.544134 366.544134 0 0 1 174.732925 351.034264S88.818698 574.097572 161.023826 756.498298c42.056728 105.838893 186.699342 250.481507 384.203313 250.481507 123.61425 0 247.112321-71.391877 327.97277-270.928977 0 0 41.766281-143.655094 0-220.739732C840.03086 453.097345 804.01543 383.390061 854.320853 272.206943c0 0-123.498071 68.13887-115.481733 110.892671 0 0.290447 12.256864-166.48423-260.298616-359.863853z"
                  fill="#FFF100"
                  p-id="87592"
                ></path>
                <path
                  d="M873.490356 516.472884l-0.755162-1.452235c0.98752 12.373043 1.684593 24.804175 1.684593 37.467665a445.661902 445.661902 0 0 1-421.670978 444.964829 397.970501 397.970501 0 0 0 92.943045 10.978897c123.61425 0 247.112321-71.391877 327.914681-270.928977-0.116179 0.232358 41.708192-143.597005-0.116179-221.030179z"
                  fill="#F8B62D"
                  p-id="87593"
                ></path>
                <path
                  d="M169.795326 580.894032a464.715226 464.715226 0 0 1 28.579986-160.907647 348.013615 348.013615 0 0 1-23.642387-66.802813S88.818698 576.24688 161.023826 758.647606c30.555026 76.968459 115.481734 174.26821 235.436351 221.843431A465.29612 465.29612 0 0 1 169.795326 580.894032z"
                  fill="#FFFFFF"
                  p-id="87594"
                ></path>
                <path
                  d="M545.459496 1024c-213.18811 0-355.449058-158.119356-395.007942-257.742682-73.250737-184.491945 9.875199-404.650783 13.418652-413.945087l13.360563-34.853642 8.7715 36.305877a361.838893 361.838893 0 0 0 53.906966 118.095756c30.438847-123.672339 111.822101-195.180395 156.841389-234.681189a224.283186 224.283186 0 0 0 55.126844-71.624234 11.617881 11.617881 0 0 1 20.970274 9.991378 245.776265 245.776265 0 0 1-60.761516 79.059677c-45.832539 40.255956-131.223962 115.249376-154.633991 246.531428l-4.240526 23.642387-15.916497-18.007715A373.74722 373.74722 0 0 1 174.26821 395.356478c-20.157023 68.952122-55.533469 228.117086-2.207398 362.303608 40.081688 100.959383 182.458816 243.104152 373.398684 243.104153 92.943045 0 172.351259-40.662582 236.481961-120.942138A11.617881 11.617881 0 0 1 800.007261 894.57681c-67.674155 84.578171-155.73769 129.42319-254.547765 129.42319zM889.929657 663.613342h-1.161788a11.617881 11.617881 0 0 1-10.398003-12.721579c5.228046-53.55843 0-96.718856-15.161334-124.834127-29.451327-54.48786-65.350579-121.000227-32.18153-220.739733-37.351486 24.107102-76.039029 55.533469-80.511912 75.516225a67.557976 67.557976 0 0 1 0 8.945768l-6.506014 88.992965-16.49739-87.714999a36.712503 36.712503 0 0 1 0-10.107556c-1.742682-32.007261-22.190152-168.459269-232.357613-326.113909a240.025414 240.025414 0 0 1 0 40.662582 11.617881 11.617881 0 1 1-23.235761-1.91695 192.101656 192.101656 0 0 0-4.008169-61.458589L458.44157 0l26.837305 19.053324C679.181302 156.841389 731.694123 281.036533 745.63558 344.760608c30.264579-35.783072 87.831178-68.835943 103.10869-77.316996l30.555027-16.845926-14.406172 31.832992c-48.67892 107.639664-12.837758 173.977763 18.762877 232.357613 17.426821 32.646245 23.642387 79.117767 17.833447 138.136601a11.617881 11.617881 0 0 1-11.559792 10.68845z"
                  fill="#231815"
                  p-id="87595"
                ></path>
                <path
                  d="M843.225777 806.571364a695.911051 695.911051 0 0 0 30.20649-65.118221"
                  fill="#FFF100"
                  p-id="87596"
                ></path>
                <path
                  d="M843.225777 818.131155a11.617881 11.617881 0 0 1-5.402314-1.336056 11.617881 11.617881 0 0 1-4.821421-15.684139 704.275925 704.275925 0 0 0 29.625596-63.898344 11.617881 11.617881 0 1 1 21.551168 8.7715 718.972544 718.972544 0 0 1-30.671204 66.105741 11.617881 11.617881 0 0 1-10.281825 6.041298z"
                  fill="#231815"
                  p-id="87597"
                ></path>
                <path
                  d="M338.661221 839.217608c0-179.031541 153.936919-184.840481 185.88609-324.255048 0 0 200.408441 171.36374 185.88609 324.255048-6.970728 73.483095-92.594509 160.6172-151.729521 167.529839-24.165192 2.788291-44.670751 6.912639-68.255049 0.98752-66.280009-16.613569-151.787611-93.930565-151.78761-168.517359z"
                  fill="#FFFFFF"
                  p-id="87598"
                ></path>
                <path
                  d="M524.547311 512.697073v0.638983c60.529158 61.28432 172.525528 191.695031 161.140005 311.53347-7.435444 78.653052-99.158611 171.944634-162.650329 179.321988-8.539142 0.98752-16.671659 2.091219-24.571818 2.962559 20.215112 3.253007 38.687543 0 60.006354-2.730202 59.135012-6.85455 144.758793-93.988654 151.729521-167.471749 14.754708-152.891309-185.653733-324.255049-185.653733-324.255049z"
                  fill="#DCDDDD"
                  p-id="87599"
                ></path>
                <path
                  d="M515.950079 1022.373497a113.971409 113.971409 0 0 1-28.347628-3.369186c-35.376447-8.887679-75.109598-33.401407-106.245519-65.699115-34.853642-36.305877-54.313592-76.794191-54.313592-114.087588 0-105.548446 51.060585-153.82074 100.378489-200.46653 37.351486-35.318357 72.611754-68.661675 85.798048-126.344452l4.298616-18.646699 14.580441 12.489222a807.442705 807.442705 0 0 1 100.029952 106.361697c65.931473 84.63626 96.196052 161.256183 89.864307 227.710461-7.725891 81.325165-99.27479 170.666667-161.953257 177.927842l-10.223735 1.277967a266.339914 266.339914 0 0 1-33.866122 2.846381z m14.754709-486.150216c-17.426821 53.384162-52.977536 87.134105-87.134105 119.373724-47.865668 45.309735-92.943045 88.121625-92.943045 183.620603 0 65.408668 78.594963 141.15725 142.958021 157.248015 18.065804 4.530973 34.853642 2.439755 53.674609 0l10.456092-1.277967c52.861357-6.157477 134.999773-88.412072 141.505787-156.841389 11.269344-122.394373-124.311323-260.530973-168.517359-302.122986z"
                  fill="#231815"
                  p-id="87600"
                ></path>
              </svg>
              <h2>Now Login 精选热题 HOT 100题</h2>
            </li>
            <li>
              <img src="./images/7.webp" alt="" />
              <svg
                t="1650634142038"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="84828"
                width="25"
                height="25"
              >
                <path
                  d="M509.973333 85.333333L106.666667 316.714667v464.853333L380.501333 938.666667l82.773334-48.832L191.573333 732.757333V365.525333l318.4-182.549333 318.421334 182.549333v367.232l-273.834667 157.077334L639.466667 938.666667l273.834666-157.077334V316.714667z"
                  fill="#FF6A00"
                  p-id="84829"
                ></path>
                <path
                  d="M240.405333 707.285333l269.568 154.965334 269.589334-154.965334v-97.642666l-269.589334 154.965333-269.568-154.965333z"
                  fill="#FF6A00"
                  p-id="84830"
                ></path>
                <path
                  d="M240.405333 550.208l269.568 157.077333 269.589334-157.077333v-97.642667l-269.589334 157.077334-269.568-157.077334z"
                  fill="#FF6A00"
                  p-id="84831"
                ></path>
                <path
                  d="M779.562667 395.242667l-269.589334-157.077334-269.568 157.077334 269.568 154.965333z"
                  fill="#FF6A00"
                  p-id="84832"
                ></path>
              </svg>
              <h2>Now Login 精选数据库 80题</h2>
            </li>
            <li>
              <img src="./images/8.webp" alt="" />
              <svg
                t="1650633823886"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="75282"
                width="25"
                height="25"
              >
                <path
                  d="M511.82 512.5v435L888.54 730l-0.02-435z"
                  fill="#83c5fd"
                  p-id="75283"
                ></path>
                <path
                  d="M135.1 295l376.72 217.5v435L135.1 730z"
                  fill="#1892ff"
                  p-id="75284"
                ></path>
                <path
                  d="M511.82 512.5L888.54 295 511.82 77.5 135.1 295z"
                  fill="#52adff"
                  p-id="75285"
                ></path>
              </svg>
              <h2>Now Login 精选算法 200题</h2>
            </li>
            <li>
              <img src="./images/9.webp" alt="" />
              <svg
                t="1650633863531"
                class="icon"
                viewBox="0 0 1313 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="76279"
                width="25"
                height="25"
              >
                <path
                  d="M0 956.264924a656.802424 67.735076 0 1 0 1313.604847 0 656.802424 67.735076 0 1 0-1313.604847 0Z"
                  fill="#EEF2F5"
                  p-id="76280"
                ></path>
                <path
                  d="M899.096858 113.918466h45.111606a40.916226 40.916226 0 0 1 40.916226 40.916226 40.916226 40.916226 0 0 1-40.916226 40.916227h-45.111606V113.918466z"
                  fill=""
                  p-id="76281"
                ></path>
                <path
                  d="M899.096858 154.812136m-40.916226 0a40.916226 40.916226 0 1 0 81.832453 0 40.916226 40.916226 0 1 0-81.832453 0Z"
                  fill=""
                  p-id="76282"
                ></path>
                <path
                  d="M227.227158 58.927418h631.291811a95.884718 95.884718 0 0 1 95.884718 95.884718 95.884718 95.884718 0 0 1-95.884718 95.884718H227.227158v-191.724324-0.045112z"
                  fill="#FFE400"
                  p-id="76283"
                ></path>
                <path
                  d="M307.706263 154.812136c0 52.961025-14.61616 95.907274-67.667409 95.907274h264.579568V154.812136z"
                  fill="#9E6101"
                  p-id="76284"
                ></path>
                <path
                  d="M240.129077 58.927418A95.907274 95.907274 0 1 0 270.669634 245.689466L215.678587 190.788642l57.855634-57.855634 53.908369 66.74262 2.255581-10.646339a95.681716 95.681716 0 0 0-89.569094-130.101871z"
                  fill="#FFB321"
                  p-id="76285"
                ></path>
                <path
                  d="M315.285013 174.706355l-41.750792-41.773347-57.855634 57.855634L270.669634 245.689466a95.974941 95.974941 0 0 0 48.179195-36.089284 27.337633 27.337633 0 0 0-3.563816-34.893827z"
                  fill="#FFB321"
                  p-id="76286"
                ></path>
                <path
                  d="M323.111876 147.887505h12.901919v704.16961h-12.901919z"
                  fill="#FFB321"
                  p-id="76287"
                ></path>
                <path
                  d="M954.403687 852.057115H336.036351V147.887505l618.367336 4.060044v700.109566z"
                  fill="#FFE400"
                  p-id="76288"
                ></path>
                <path
                  d="M404.718771 493.013845m18.856651 0l443.31175 0q18.856651 0 18.856651 18.856651l0 0q0 18.856651-18.856651 18.856651l-443.31175 0q-18.856651 0-18.856651-18.856651l0 0q0-18.856651 18.856651-18.856651Z"
                  fill="#FFB321"
                  p-id="76289"
                ></path>
                <path
                  d="M404.718771 578.410114m18.856651 0l268.143385 0q18.856651 0 18.856651 18.856652l0 0q0 18.856651-18.856651 18.856651l-268.143385 0q-18.856651 0-18.856651-18.856651l0 0q0-18.856651 18.856651-18.856652Z"
                  fill="#FFB321"
                  p-id="76290"
                ></path>
                <path
                  d="M760.130557 578.410114m18.856651 0l87.877408 0q18.856651 0 18.856651 18.856652l0 0q0 18.856651-18.856651 18.856651l-87.877408 0q-18.856651 0-18.856651-18.856651l0 0q0-18.856651 18.856651-18.856652Z"
                  fill="#FFB321"
                  p-id="76291"
                ></path>
                <path
                  d="M404.718771 663.82894m18.856651 0l109.350532 0q18.856651 0 18.856652 18.856651l0 0q0 18.856651-18.856652 18.856651l-109.350532 0q-18.856651 0-18.856651-18.856651l0 0q0-18.856651 18.856651-18.856651Z"
                  fill="#FFB321"
                  p-id="76292"
                ></path>
                <path
                  d="M592.65372 663.82894m18.856652 0l255.3768 0q18.856651 0 18.856651 18.856651l0 0q0 18.856651-18.856651 18.856651l-255.3768 0q-18.856651 0-18.856652-18.856651l0 0q0-18.856651 18.856652-18.856651Z"
                  fill="#FFB321"
                  p-id="76293"
                ></path>
                <path
                  d="M762.025244 263.959667l-28.172198 18.044642c-1.714241-2.413471-3.202924-4.736719-4.917165-6.902076a22.916696 22.916696 0 0 0-24.811383-7.623861c-13.533482 3.947266-13.533482 19.826551-6.766741 26.051952a36.089285 36.089285 0 0 0 8.368203 5.90962c6.766741 3.315703 13.533482 6.225402 20.435558 9.270435a125.16215 125.16215 0 0 1 28.172197 16.149955 47.367186 47.367186 0 0 1 18.247645 37.014073 51.26934 51.26934 0 0 1-6.022399 28.036863A46.194284 46.194284 0 0 1 739.830334 411.249059c-23.615926 7.646417-46.690512 6.360736-68.637308-5.841953a61.487119 61.487119 0 0 1-24.202377-25.104608c-0.27067-0.473672-0.473672-0.992455-0.812008-1.714241l29.548101-17.097299 1.285681 1.894688a44.051483 44.051483 0 0 0 15.337946 15.360501 38.164418 38.164418 0 0 0 31.127008 2.819476c6.090067-1.962355 10.781674-5.75173 12.247801-12.338024a15.405613 15.405613 0 0 0-4.285603-15.405614 36.089285 36.089285 0 0 0-8.526093-5.999843c-7.984754-3.902154-16.149955-7.398303-24.270044-11.007232a94.734372 94.734372 0 0 1-25.668504-15.631172 47.77319 47.77319 0 0 1-15.789062-33.833704 49.239318 49.239318 0 0 1 5.638951-27.540635 44.592822 44.592822 0 0 1 24.247488-20.706227 66.787732 66.787732 0 0 1 49.239318 0.586451c11.638794 4.533716 19.533325 13.398147 25.713615 24.270044zM517.791011 382.445299l29.50299-17.84164 1.646573 2.729252a43.081583 43.081583 0 0 0 8.390759 11.120011 23.390368 23.390368 0 0 0 24.585825 2.436027c4.826942-2.729252 6.766741-7.30808 7.511083-12.450804a63.90059 63.90059 0 0 0 0.676674-9.518548V237.050594h36.314842v122.681012a68.231304 68.231304 0 0 1-5.458504 29.322543c-6.338181 13.533482-17.232633 21.608459-31.578124 24.811383a69.020757 69.020757 0 0 1-44.344708-3.518705 54.539931 54.539931 0 0 1-27.066964-27.066963 8.548649 8.548649 0 0 1-0.180446-0.834565z"
                  fill="#FFB321"
                  p-id="76294"
                ></path>
                <path
                  d="M1081.618415 811.163444h45.111606a40.916226 40.916226 0 0 1 40.916226 40.916227 40.916226 40.916226 0 0 1-40.916226 40.916226h-45.111606V811.163444z"
                  fill=""
                  p-id="76295"
                ></path>
                <path
                  d="M1081.618415 852.057115m-40.916226 0a40.916226 40.916226 0 1 0 81.832452 0 40.916226 40.916226 0 1 0-81.832452 0Z"
                  fill=""
                  p-id="76296"
                ></path>
                <path
                  d="M419.01915 756.172397h631.291811a95.884718 95.884718 0 0 1 95.884718 95.884718 95.884718 95.884718 0 0 1-95.884718 95.884718H419.01915v-191.724325-0.045111z"
                  fill="#9E6101"
                  p-id="76297"
                ></path>
                <path
                  d="M419.01915 852.057115m-95.884718 0a95.884718 95.884718 0 1 0 191.769436 0 95.884718 95.884718 0 1 0-191.769436 0Z"
                  fill="#FFB321"
                  p-id="76298"
                ></path>
                <path
                  d="M508.92658 886.093821l-56.118837-56.118837-57.833079 57.855634 54.900824 54.92338a96.110276 96.110276 0 0 0 59.051092-56.660177z"
                  fill=""
                  p-id="76299"
                ></path>
                <path
                  d="M383.696763 815.200933h40.600445a36.878738 36.878738 0 0 1 36.878737 36.878738 36.878738 36.878738 0 0 1-36.878737 36.878737h-40.600445v-73.757475z"
                  fill=""
                  p-id="76300"
                ></path>
                <path
                  d="M383.696763 852.057115m-36.878738 0a36.878738 36.878738 0 1 0 73.757475 0 36.878738 36.878738 0 1 0-73.757475 0Z"
                  fill="#383838"
                  p-id="76301"
                ></path>
                <path
                  d="M959.952414 608.770225l12.63125 33.4277a6.044955 6.044955 0 0 0 3.451038 3.451038l33.4277 12.631249a5.932176 5.932176 0 0 1 0 11.074899l-33.4277 12.653806a5.954732 5.954732 0 0 0-3.451038 3.428482l-12.63125 33.4277a5.932176 5.932176 0 0 1-11.074899 0l-12.653805-33.4277a5.841953 5.841953 0 0 0-3.428482-3.428482l-33.4277-12.653806a5.932176 5.932176 0 0 1 0-11.074899l33.4277-12.631249a5.954732 5.954732 0 0 0 3.428482-3.451038l12.653805-33.4277a5.932176 5.932176 0 0 1 11.074899 0zM483.415967 3.891259l12.653805 33.405144a5.887065 5.887065 0 0 0 3.428483 3.360815l33.427699 12.63125a5.932176 5.932176 0 0 1 0 11.097455l-33.427699 12.631249a5.887065 5.887065 0 0 0-3.428483 3.451038l-12.653805 33.495367a5.90962 5.90962 0 0 1-11.074899 0l-12.63125-33.405144a5.90962 5.90962 0 0 0-3.451038-3.451037l-33.427699-12.63125a5.932176 5.932176 0 0 1 0-11.097455L456.25878 40.657218a5.90962 5.90962 0 0 0 3.451038-3.451038l12.63125-33.405144a5.90962 5.90962 0 0 1 11.074899 0.090223zM1087.189698 254.553897l12.63125 33.405144a5.977288 5.977288 0 0 0 3.451038 3.451038l33.4277 12.631249a5.932176 5.932176 0 0 1 0 11.097455l-33.4277 12.63125a5.977288 5.977288 0 0 0-3.451038 3.451038l-12.63125 33.405144a5.90962 5.90962 0 0 1-11.074899 0l-12.653805-33.405144a5.887065 5.887065 0 0 0-3.428482-3.451038l-33.4277-12.63125a5.932176 5.932176 0 0 1 0-11.097455l33.4277-12.631249a5.887065 5.887065 0 0 0 3.428482-3.451038l12.653805-33.405144a5.90962 5.90962 0 0 1 11.074899 0zM278.203273 456.834337l12.631249 33.405144a5.90962 5.90962 0 0 0 3.451038 3.451038l33.405144 12.631249a5.932176 5.932176 0 0 1 0 11.097455L294.28556 530.11814a5.90962 5.90962 0 0 0-3.451038 3.451038l-12.631249 33.405144a5.90962 5.90962 0 0 1-11.0749 0l-12.653805-33.405144a5.864509 5.864509 0 0 0-3.451038-3.451038l-33.405144-12.631249a5.932176 5.932176 0 0 1 0-11.097455l33.405144-12.63125a5.864509 5.864509 0 0 0 3.451038-3.451038l12.653805-33.405144a5.90962 5.90962 0 0 1 11.0749-0.067667z"
                  fill="#FF4585"
                  p-id="76302"
                ></path>
                <path
                  d="M315.194789 174.593576l-41.660568-41.660568-57.855634 57.855634L270.669634 245.689466a95.952385 95.952385 0 0 0 43.036472-29.322544l3.270592-3.947265a28.014307 28.014307 0 0 0-1.781909-37.826081z"
                  fill=""
                  p-id="76303"
                ></path>
                <path
                  d="M206.678822 121.993443h40.600445A36.878738 36.878738 0 0 1 284.203116 158.849625a36.878738 36.878738 0 0 1-36.878738 36.878738h-40.600445V121.993443h-0.045111z"
                  fill=""
                  p-id="76304"
                ></path>
                <path
                  d="M206.678822 158.849625m-36.878738 0a36.878738 36.878738 0 1 0 73.757475 0 36.878738 36.878738 0 1 0-73.757475 0Z"
                  fill="#383838"
                  p-id="76305"
                ></path>
              </svg>
              <h2>Now Login 精选 TOP 面试题</h2>
            </li>
            <li>
              <img src="./images/10.webp" alt="" />
              <svg
                t="1650633978093"
                class="icon"
                viewBox="0 0 1281 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="80658"
                width="25"
                height="25"
              >
                <path
                  d="M649.964072 0c216.732359 0 392.431138 175.698778 392.431138 392.431138 0 216.732359-175.698778 392.431138-392.431138 392.431137-216.732359 0-392.431138-175.698778-392.431138-392.431137 0-216.732359 175.698778-392.431138 392.431138-392.431138z"
                  fill="#14EBD3"
                  p-id="80659"
                ></path>
                <path
                  d="M649.964072 36.790419C453.546156 36.790419 294.323353 196.013222 294.323353 392.431138s159.222802 355.640719 355.640719 355.640718 355.640719-159.222802 355.640718-355.640718-159.222802-355.640719-355.640718-355.640719z"
                  fill="#00CCB5"
                  p-id="80660"
                ></path>
                <path
                  d="M453.748503 408.520814S556.816862 485.964647 567.038467 551.856287c0 0 135.125078-203.267066 285.27291-221.466059 0 0-45.718228-30.591234-30.72-78.98903 0 0-83.250587 7.634012-240.210778 231.503712L507.818156 368.149461 453.748503 408.520814z"
                  fill="#14A793"
                  p-id="80661"
                ></path>
                <path
                  d="M453.748503 396.257341S556.816862 473.701174 567.038467 539.592814c0 0 135.125078-203.267066 285.27291-221.46606 0 0-45.718228-30.591234-30.72-78.989029 0 0-83.250587 7.634012-240.210778 231.503712L507.818156 355.885988 453.748503 396.257341z"
                  fill="#FFFFFF"
                  p-id="80662"
                ></path>
                <path
                  d="M0 1024c40.880287-24.526946 75.622707-40.880287 104.239521-49.053892 42.922156-12.263473 141.02994-30.658683 165.556886-30.658683 4.089868-12.263473 8.173605-30.658683 12.263473-55.185629l-122.63473-177.820359c-73.580838 24.526946-120.592862 44.964024-141.02994 61.317365 20.437078 16.353341 47.012024 36.790419 79.712574 61.317366-20.437078 32.700551-36.790419 59.275497-49.053892 79.712575s-28.616814 57.227497-49.053892 110.371257z"
                  fill="#EB4B4E"
                  p-id="80663"
                ></path>
                <path
                  d="M177.820359 876.838323l103.295234 17.818827c-3.771018 21.767665-7.542036 38.31109-11.319186 49.630275-8.443401 0-25.593868 2.176766-46.214898 5.536958L147.161677 913.628743l30.658682-36.79042z"
                  fill="#D3000C"
                  p-id="80664"
                ></path>
                <path
                  d="M1281.532934 1024c-40.880287-24.526946-75.622707-40.880287-104.239521-49.053892-42.922156-12.263473-141.02994-30.658683-165.556886-30.658683-4.089868-12.263473-8.173605-30.658683-12.263473-55.185629l122.63473-177.820359c73.580838 24.526946 120.592862 44.964024 141.029941 61.317365-20.437078 16.353341-47.012024 36.790419-79.712575 61.317366 20.437078 32.700551 36.790419 59.275497 49.053892 79.712575s28.616814 57.227497 49.053892 110.371257z"
                  fill="#EB4B4E"
                  p-id="80665"
                ></path>
                <path
                  d="M1103.712575 876.838323l-103.295234 17.818827c3.771018 21.767665 7.542036 38.31109 11.319186 49.630275 8.443401 0 25.593868 2.176766 46.214898 5.536958L1134.371257 913.628743l-30.658682-36.79042z"
                  fill="#D3000C"
                  p-id="80666"
                ></path>
                <path
                  d="M147.161677 643.832335h981.077844v269.796408H147.161677z"
                  fill="#FF4E51"
                  p-id="80667"
                ></path>
                <path
                  d="M159.42515 843.113772l-30.352096 8.891018L137.964072 821.652695l-8.891018-30.352096L159.42515 800.191617l30.352096-8.891018L180.886228 821.652695l8.891018 30.352095zM796.49418 642.881916l-36.140455 0.202347 19.327233-30.536047-0.202347-36.146587 30.536048 19.327233 36.146587-0.202347-19.327234 30.536048 0.202347 36.146587z"
                  fill="#FFFFFF"
                  p-id="80668"
                ></path>
                <path
                  d="M419.361725 658.836695l-31.431282 3.482826 14.023282-28.347018-3.482827-31.431281 28.347018 14.023281 31.431282-3.482826-14.023282 28.347018 3.482827 31.431281zM567.062994 251.119138l-26.948982 2.986155 12.018204-24.29394-2.980024-26.94285 24.29394 12.018204 26.94285-2.980024-12.018204 24.29394 2.980024 26.94285z"
                  fill="#FED800"
                  p-id="80669"
                ></path>
                <path
                  d="M258.759281 794.820216c14.127521-6.18079 24.428838-14.029413 30.903953-23.447761h21.093173c6.377006 9.614563 17.070754 17.365078 32.179353 23.251545l3.041342-6.278898c-12.459689-4.120527-21.68182-9.810778-27.764503-16.972647h24.33073v-6.867545h-23.349652v-12.067257h19.229125v-6.377006h-19.229125v-10.693749h-6.867545v10.693749h-25.311809v-10.595641h-6.867545v10.595641h-17.757509v6.377006h17.757509v12.067257h-21.779928v6.867545h24.036407c-6.082683 7.06376-15.206707 12.85212-27.372071 17.463186l3.728095 5.984575z m53.566851-30.315306h-25.311809v-12.067257h25.311809v12.067257z m-22.17236 60.336288c5.101605 0 7.750515-2.943234 7.750515-8.633485v-35.122587h-7.161868v33.258539c0 2.747018-1.079186 4.218635-3.041341 4.218634-2.845126 0-5.788359-0.196216-8.927809-0.490539l1.569725 6.769438h9.810778z m42.578779-5.101605l6.377006-2.943234a180.720671 180.720671 0 0 0-13.048335-26.587209l-6.180791 2.060263c4.611066 7.946731 8.927808 17.070754 12.85212 27.47018z m-18.248048 1.079185l6.475114-2.845125a175.159186 175.159186 0 0 0-10.497533-25.115593l-6.180791 1.962156c3.728096 7.554299 7.06376 16.187784 10.20321 25.998562z m-46.601198-1.864047c4.709174-6.18079 8.731593-13.538874 12.165366-22.074252l-6.180791-3.041341c-3.335665 8.142946-7.259976 15.108599-11.772934 20.995066l5.788359 4.120527z m167.175665-59.551426v-5.690251H401.996647v-6.377006h36.29988v-5.788359h-36.29988v-6.278899h-6.867545v6.278899h-36.201773v5.788359h36.201773v6.377006h-33.062324v5.690251h72.992192z m7.259976 35.907449v-5.886467h-25.311808l4.022419-7.161868h8.241054v-17.659401H367.855138v17.659401h9.320239l3.139449 7.161868h-25.508024v5.886467h87.512144z m-19.817772-18.248047h-47.876599v-7.259976h47.876599v7.259976z m-12.85212 12.36158h-21.976144l-3.139449-7.161868h29.039904l-3.924311 7.161868z m-36.397988 35.90745v-4.02242h50.721724v4.02242h6.769438v-24.330731H366.383521v24.330731h6.867545z m50.721724-9.810779h-50.721724v-8.731593h50.721724V815.520958z m57.491162-49.936862a78.627257 78.627257 0 0 0 12.754012-14.912383h36.201773c-1.079186 3.924311-2.452695 7.456192-4.120527 10.693748l6.377006 1.667832c1.962156-4.709174 3.53188-9.516455 4.807281-14.421844v-4.41485H498.142275c1.177293-2.354587 2.452695-4.905389 3.629988-7.5543l-6.671329-1.471616c-4.611066 10.301317-10.595641 18.640479-17.953724 25.115592l4.316742 5.297821z m-10.105102 24.428838v-37.477174a114.72479 114.72479 0 0 0 8.535378-15.795353l-6.867545-1.471617c-5.690251 12.459689-12.950228 22.56479-21.779929 30.217198l4.414851 5.395928c3.041341-2.747018 5.984575-5.788359 8.8297-9.124024v28.255042h6.867545z m33.356647-0.098108c4.905389 0 7.456192-2.747018 7.456192-8.142946v-26.587209h-7.063761v24.919377c0 2.452695-0.981078 3.728096-2.747018 3.728096a59.539162 59.539162 0 0 1-6.965653-0.490539l1.471617 6.573221h7.848623z m26.783425-2.64891l5.984575-3.041341a110.457102 110.457102 0 0 0-12.459689-19.719665l-5.984574 2.550803a117.974611 117.974611 0 0 1 12.459688 20.210203z m-46.306874-0.392431c4.905389-5.494036 9.222132-12.067257 12.950227-19.621557l-5.690251-2.64891a79.228168 79.228168 0 0 1-12.655904 18.542371l5.395928 3.728096z m17.855617 22.761006l5.494036-3.826204c-2.550802-4.218635-6.278898-9.124024-11.184288-14.716167l-5.494036 3.433772c4.709174 5.494036 8.437269 10.595641 11.184288 15.108599z m33.258539 9.124024l5.788359-4.120527c-3.335665-6.475114-8.044838-14.029413-14.323737-22.662898l-5.788359 3.53188c5.984575 8.437269 10.791856 16.187784 14.323737 23.251545z m-25.213701 5.101605c3.53188 0 6.18079-0.784862 7.848623-2.354587 1.962156-1.864048 3.237557-7.06376 3.924311-15.697246l-6.671329-2.158371c-0.392431 6.475114-1.079186 10.399425-2.256479 11.772934-0.88297 1.177293-2.256479 1.76594-4.218635 1.76594h-21.583713c-2.747018 0-4.022419-1.471617-4.022419-4.218634v-19.229126h-7.161868v20.700742c0 6.278898 2.943234 9.418347 9.025916 9.418348h25.115593z m-51.310371-2.845126c4.218635-6.965653 7.456192-15.206707 9.810778-24.625054l-6.769437-1.373509c-1.962156 8.044838-4.905389 15.50103-9.025916 22.172359l5.984575 3.826204z m97.617245 10.301317a18.928671 18.928671 0 0 0 10.105102-6.377006 18.382946 18.382946 0 0 0 3.826204-11.47861c0-2.845126-0.686754-5.101605-1.962156-6.867545a6.438323 6.438323 0 0 0-5.395928-2.747018c-1.962156 0-3.433772 0.490539-4.611066 1.667832-1.177293 1.079186-1.76594 2.550802-1.76594 4.41485 0 1.667832 0.588647 3.139449 1.76594 4.316743a5.702515 5.702515 0 0 0 4.218635 1.76594c0.981078 0 1.76594-0.196216 2.158371-0.392431 0 2.354587-0.686754 4.512958-2.158371 6.573221a13.367186 13.367186 0 0 1-6.180791 4.316743v4.807281z m148.633294-6.867545c5.592144 0 8.437269-2.64891 8.437269-7.848622v-27.666395h20.896958v-6.278899h-20.896958v-19.03291h-13.146443c1.177293-3.335665 2.354587-6.965653 3.53188-10.693748h30.511521v-6.573222h-28.549365c0.88297-3.139449 1.76594-6.377006 2.64891-9.810778l-6.867545-1.275402c-0.981078 3.826204-1.864048 7.554299-2.845126 11.08618h-21.779928v6.573222h19.817773a457.875162 457.875162 0 0 1-3.53188 10.693748h-12.754012v6.377006h10.203209a142.716168 142.716168 0 0 1-6.377006 12.85212l1.569725 6.082683h20.79885v25.508023c0 2.550802-1.275401 3.826204-3.728096 3.826204l-9.418347-0.294323 1.76594 6.475113h9.712671z m-54.155497-23.545868a137.025916 137.025916 0 0 0 28.156934-7.554299v-6.377006c-6.573222 2.452695-13.146443 4.41485-19.719665 5.788359 5.29782-6.965653 12.165365-18.640479 20.406419-35.024479l-6.475113-2.452695a387.967234 387.967234 0 0 1-5.297821 10.988072c-3.924311 0.784862-7.848623 1.471617-11.772934 2.060264 4.709174-7.554299 9.32024-17.561293 14.029413-30.11909l-6.769437-2.64891c-3.53188 11.576719-7.652407 21.779928-12.557796 30.707736a8.032575 8.032575 0 0 1-3.041342 2.747018l1.76594 6.475114c5.101605-0.88297 10.105102-1.864048 15.108599-2.845126-4.905389 9.222132-9.124024 15.697246-12.557796 19.621557-0.88297 0.784862-1.962156 1.471617-3.139449 2.060264l1.864048 6.573221z m55.823329-18.248048h-14.519952c1.962156-3.924311 3.826204-8.142946 5.690251-12.655904h8.829701v12.655904z m24.723162 38.948791l5.984575-2.64891a171.136766 171.136766 0 0 0-10.497533-24.428839l-6.278899 2.060264c3.924311 7.259976 7.554299 15.599138 10.791857 25.017485z m-47.582276 0.098108c4.709174-6.769437 8.829701-14.912383 12.459689-24.526947l-6.180791-2.550802c-2.845126 8.044838-6.965653 15.893461-12.36158 23.643976l6.082682 3.433773z m-36.005557-0.294324c11.380503-2.354587 21.583713-5.29782 30.413414-9.025916v-6.965653c-8.829701 3.728096-19.327234 6.769437-31.296384 8.927809l0.88297 7.06376z m145.788168 3.335665a516.445509 516.445509 0 0 1 15.697246-0.294324c5.29782 0 8.829701-1.76594 10.693748-5.29782 1.962156-3.53188 3.139449-10.105102 3.53188-19.817772 0.392431-6.278898 0.784862-25.508024 1.275401-57.883593h-71.226251v6.769437h64.064383c-0.196216 24.036407-0.294323 39.439329-0.490539 46.306874-0.294323 10.301317-1.177293 16.874539-2.64891 19.621557-1.471617 2.64891-3.728096 4.022419-6.671329 4.022419-5.395928 0-10.791856-0.098108-16.187785-0.196215l1.962156 6.769437z m-13.048335-43.461749l4.807281-4.905389c-5.592144-6.18079-12.459689-12.361581-20.602635-18.444263l-4.905389 4.709173c8.731593 6.573222 15.599138 12.754012 20.700743 18.640479z m-26.58721 29.530443c20.602635-6.671329 37.771497-14.421844 51.604695-23.055329l-1.76594-6.377006c-14.716168 9.025916-32.277461 16.678323-52.683881 22.957222l2.845126 6.475113z m99.579401-42.971209v-15.108599H923.439521v15.108599h7.161868v-21.976144h-37.575281c-1.177293-3.924311-2.452695-7.358084-3.728096-10.497533l-7.946731 1.373509c1.373509 2.747018 2.550802 5.788359 3.728096 9.124024H847.405988v21.976144h7.161868z m61.807904 3.139449v-6.867545h-54.940359v6.867545h54.940359z m-67.498155 54.842251c10.988072-3.041341 18.934802-7.259976 23.840191-12.557796 4.905389-5.886467 7.554299-13.636982 7.848623-23.251545v-0.686754h16.482108v24.723161c0 6.475114 2.943234 9.810778 9.025916 9.810779h16.580216c3.335665 0 5.690251-0.981078 7.259976-2.747018 1.76594-1.962156 2.943234-7.750515 3.53188-17.168862l-6.671329-2.158372c-0.392431 7.456192-0.981078 11.871042-1.76594 13.342659-0.686754 1.275401-1.864048 1.962156-3.629989 1.962156h-13.048335c-2.845126 0-4.218635-1.569725-4.218635-4.512958v-23.251545h27.764503v-6.769437H846.42491v6.769437h27.175856v0.686754c-0.294323 7.652407-2.354587 13.833198-6.278898 18.542371-4.316743 4.611066-11.772934 8.241054-22.466682 10.988072l4.022419 6.278898z m99.088862-0.490538c7.259976-10.595641 11.184287-24.723162 11.576719-42.284456v-2.943233h16.972646c-0.196216 10.791856-0.490539 17.855617-1.079185 21.191281-0.588647 2.747018-1.962156 4.218635-4.120527 4.316743-2.64891 0-5.886467-0.098108-9.712671-0.294323l2.158371 6.377005c3.139449 0.196216 5.984575 0.392431 8.339162 0.392432 4.905389-0.196216 7.946731-2.354587 9.222132-6.573222 1.275401-4.807281 2.060263-15.50103 2.256479-32.081245h-24.036407v-16.285893h33.65097c0.784862 12.263473 2.158371 22.56479 4.316742 30.805845 1.079186 4.218635 2.354587 8.142946 3.728096 11.772934a65.95909 65.95909 0 0 1-24.919377 19.425341l3.924311 5.886467a67.626922 67.626922 0 0 0 24.134515-18.14994c1.471617 3.041341 3.139449 5.788359 4.905389 8.142946 4.709174 5.886467 9.124024 8.829701 13.244551 8.829701 4.41485 0 7.750515-6.573222 10.105102-19.621557l-6.377006-3.53188c-1.471617 10.105102-3.139449 15.206707-4.905389 15.304814-1.962156 0-4.611066-2.354587-7.848623-7.06376a48.16479 48.16479 0 0 1-4.41485-8.142947c6.278898-8.829701 11.380503-19.817772 15.304814-32.768l-6.377006-2.747018c-3.041341 10.497533-6.965653 19.719665-11.871042 27.568288-0.686754-2.158371-1.373509-4.41485-1.962155-6.867545-1.76594-7.06376-3.041341-16.678323-3.728096-28.843689h30.217197v-6.769437h-11.969149l4.512958-4.512958a88.370587 88.370587 0 0 0-12.067258-10.791856l-4.512958 4.316742c5.003497 3.826204 8.927808 7.456192 11.871042 10.988072h-18.346156a364.317126 364.317126 0 0 1-0.294323-15.206706h-7.259976c0 5.29782 0.098108 10.301317 0.294323 15.206706h-40.518515v32.669892c-0.294323 15.991569-3.53188 28.451257-9.810778 37.477174l5.395928 4.807282z"
                  fill="#FFFFFF"
                  p-id="80670"
                ></path>
              </svg>
              <h2>Now Login 精选练习 50题</h2>
            </li>
            <li>
              <img src="./images/11.webp" alt="" />
              <svg
                t="1650635310817"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="92184"
                width="25"
                height="25"
              >
                <path
                  d="M89.088 59.392l62.464 803.84c1.024 12.288 9.216 22.528 20.48 25.6L502.784 993.28c6.144 2.048 12.288 2.048 18.432 0l330.752-104.448c11.264-4.096 19.456-14.336 20.48-25.6l62.464-803.84c1.024-17.408-12.288-31.744-29.696-31.744H118.784c-17.408 0-31.744 14.336-29.696 31.744z"
                  fill="#FC490B"
                  p-id="92185"
                ></path>
                <path
                  d="M774.144 309.248h-409.6l12.288 113.664h388.096l-25.6 325.632-227.328 71.68-227.328-71.68-13.312-169.984h118.784v82.944l124.928 33.792 123.904-33.792 10.24-132.096H267.264L241.664 204.8h540.672z"
                  fill="#FFFFFF"
                  p-id="92186"
                ></path>
              </svg>
              <h2>Now Login 精选HTML 180题</h2>
            </li>
            <li>
              <img src="./images/12.webp" alt="" />
              <svg
                t="1650635350998"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="93957"
                width="25"
                height="25"
              >
                <path
                  d="M221.866667 405.333333c-14.933333 36.266667-23.466667 76.8-23.466667 117.333334 0 34.133333 6.4 68.266667 17.066667 98.133333 19.2-32 44.8-68.266667 76.8-106.666667-4.266667-8.533333-8.533333-19.2-8.533334-29.866666 0-8.533333 2.133333-14.933333 4.266667-21.333334-29.866667-21.333333-51.2-40.533333-66.133333-57.6zM332.8 778.666667c10.666667-8.533333 19.2-17.066667 29.866667-23.466667 87.466667-66.133333 166.4-104.533333 228.266666-125.866667 0-4.266667-2.133333-8.533333-2.133333-12.8v-6.4c-21.333333-6.4-44.8-12.8-66.133333-21.333333-55.466667-19.2-102.4-42.666667-142.933334-64-10.666667 10.666667-25.6 17.066667-40.533333 17.066667-8.533333 0-14.933333-2.133333-21.333333-4.266667-40.533333 46.933333-68.266667 91.733333-87.466667 125.866667 25.6 46.933333 59.733333 85.333333 102.4 115.2zM535.466667 556.8c23.466667 8.533333 46.933333 14.933333 70.4 21.333333 6.4-6.4 12.8-10.666667 19.2-12.8-6.4-23.466667-14.933333-46.933333-25.6-70.4-14.933333-34.133333-32-66.133333-49.066667-93.866666-6.4 2.133333-10.666667 2.133333-17.066667 2.133333-12.8 0-25.6-4.266667-36.266666-12.8-23.466667 14.933333-46.933333 29.866667-72.533334 49.066667l-32 25.6c2.133333 6.4 4.266667 14.933333 4.266667 21.333333v8.533333c38.4 19.2 85.333333 42.666667 138.666667 61.866667zM834.133333 522.666667c0-89.6-38.4-172.8-102.4-228.266667-32 6.4-81.066667 19.2-140.8 44.8v6.4c0 12.8-4.266667 23.466667-10.666666 34.133333 19.2 29.866667 36.266667 64 53.333333 102.4 10.666667 27.733333 21.333333 55.466667 29.866667 81.066667 17.066667 4.266667 32 17.066667 40.533333 34.133333 12.8 2.133333 25.6 2.133333 38.4 2.133334 32 2.133333 61.866667 0 85.333333 0 2.133333-27.733333 6.4-51.2 6.4-76.8zM516.266667 290.133333c6.4-2.133333 10.666667-2.133333 17.066666-2.133333 17.066667 0 32 6.4 42.666667 19.2 46.933333-21.333333 87.466667-34.133333 119.466667-42.666667-51.2-34.133333-113.066667-55.466667-179.2-55.466666-23.466667 0-49.066667 2.133333-70.4 8.533333 19.2 19.2 44.8 42.666667 70.4 72.533333zM661.333333 800c2.133333-32 0-74.666667-10.666666-128h-4.266667c-14.933333 0-27.733333-4.266667-36.266667-12.8-59.733333 21.333333-138.666667 57.6-224 123.733333-6.4 4.266667-12.8 10.666667-21.333333 14.933334 44.8 23.466667 96 36.266667 149.333333 36.266666 53.333333 2.133333 104.533333-10.666667 147.2-34.133333zM238.933333 371.2c14.933333 17.066667 38.4 40.533333 72.533334 66.133333 8.533333-4.266667 19.2-8.533333 29.866666-8.533333 10.666667 0 21.333333 2.133333 29.866667 8.533333l32-25.6c25.6-19.2 51.2-36.266667 74.666667-51.2-2.133333-4.266667-2.133333-8.533333-2.133334-14.933333 0-12.8 4.266667-23.466667 10.666667-34.133333-32-36.266667-59.733333-64-83.2-81.066667-70.4 25.6-128 76.8-164.266667 140.8zM733.866667 633.6c-6.4 0-17.066667 0-32 4.266667-4.266667 8.533333-8.533333 14.933333-14.933334 21.333333 8.533333 46.933333 12.8 87.466667 12.8 119.466667 51.2-36.266667 91.733333-85.333333 115.2-145.066667h-81.066666z"
                  fill="#00C1DE"
                  p-id="93958"
                ></path>
                <path
                  d="M661.333333 87.466667C652.8 61.866667 629.333333 42.666667 599.466667 42.666667c-34.133333 0-64 27.733333-64 61.866666s27.733333 61.866667 64 61.866667c17.066667 0 34.133333-6.4 44.8-19.2C804.266667 202.666667 917.333333 349.866667 917.333333 522.666667c0 42.666667-6.4 83.2-19.2 121.6l55.466667 32c17.066667-46.933333 27.733333-100.266667 27.733333-153.6C981.333333 320 846.933333 147.2 661.333333 87.466667zM842.666667 740.266667c-34.133333 0-64 27.733333-64 61.866666 0 6.4 2.133333 10.666667 2.133333 17.066667-70.4 61.866667-164.266667 100.266667-266.666667 100.266667-117.333333 0-224-51.2-298.666666-130.133334l-57.6 32c85.333333 98.133333 213.333333 160 354.133333 160 119.466667 0 230.4-44.8 311.466667-119.466666 4.266667 2.133333 8.533333 2.133333 14.933333 2.133333 34.133333 0 64-27.733333 64-61.866667s-25.6-61.866667-59.733333-61.866666zM121.6 599.466667c-4.266667-25.6-8.533333-49.066667-8.533333-76.8 0-189.866667 136.533333-347.733333 317.866666-386.133334v-64C213.333333 110.933333 49.066667 298.666667 49.066667 522.666667c0 32 4.266667 64 10.666666 93.866666-10.666667 10.666667-17.066667 25.6-17.066666 42.666667 0 34.133333 27.733333 61.866667 64 61.866667 34.133333 0 64-27.733333 64-61.866667 0-29.866667-21.333333-53.333333-49.066667-59.733333z"
                  fill="#00C1DE"
                  p-id="93959"
                ></path>
              </svg>
              <h2>Now Login 精选Web 120题</h2>
            </li>
          </ul>
        </div>
        <img class="img2" src="./images/8.jpg" alt="" />
        <div class="right_5">
          <h1>热门讨论</h1>
          <ul class="content">
            <li>
              <svg
                t="1651026926089"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4051"
                width="25"
                height="25"
              >
                <path
                  d="M440.773441 324.922866v-50.217829c81.177807-71.13716 154.842462-124.298462 220.975719-159.455928 21.756153 34.331592 32.643352 66.134474 32.643352 95.418375 0 16.755899-3.355802 35.783867-10.043079 57.127691-6.710387 21.342608-29.72299 72.196567-69.054836 152.553365-45.200546 93.753246-82.04382 182.487992-110.487252 266.172616-28.465324 83.70895-41.022518 133.086308-37.669149 148.155184 5.848023 26.801411 8.791495 45.19933 8.791496 55.243626 0 10.884766-3.357018 17.167012-10.044296 18.830925-15.068876 0-36.843274-9.196527-65.290354-27.617555-28.465324-18.407649-42.686432-44.360076-42.686432-77.843899 0-53.561468 21.53965-133.503503 64.659089-239.81151 43.103626-106.286113 97.718419-211.346185 163.849244-315.141294-46.044666 18.421029-94.598582 43.942881-145.643502 76.586233z"
                  p-id="4052"
                  fill="#FFA116"
                ></path>
              </svg>
              <img src="./images/8.jpg" alt="" />
              <h1>论如何高效备考竞赛</h1>
              <svg
                t="1651027932307"
                class="icon1"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="17896"
                width="22"
                height="22"
              >
                <path
                  d="M1022.787502 510.828259c0 281.360557-228.087085 509.452736-509.452736 509.452736s-509.452736-228.092179-509.452736-509.452736c0-281.370746 228.087085-509.452736 509.452736-509.452737s509.452736 228.08199 509.452736 509.452737"
                  fill="#B6ECFF"
                  p-id="17897"
                ></path>
                <path
                  d="M405.004736 471.518886l-96.592238 227.21592H152.229572l6.658547-15.665672 220.368876-258.114229zM316.726766 311.83602l1.701572 3.087283-2.088756-2.180457z"
                  fill="#A03EC3"
                  p-id="17898"
                ></path>
                <path
                  d="M717.98193 312.406607l-15.818507 191.824239-76.137712 84.569154-22.41592-40.542249z"
                  fill="#3B9FE6"
                  p-id="17899"
                ></path>
                <path
                  d="M873.344637 314.082706l-186.531025 384.647005-0.601154-1.080039 15.94587-193.418826z"
                  fill="#20ADEC"
                  p-id="17900"
                ></path>
                <path
                  d="M686.212458 697.649672l0.596059 1.080039h-0.687761z"
                  fill="#A03EC3"
                  p-id="17901"
                ></path>
                <path
                  d="M874.429771 311.83602l-1.090229 2.241592-171.176119 190.158328 15.818507-191.829333 0.005095-0.015284 0.27001-0.550209z"
                  fill="#3AB6ED"
                  p-id="17902"
                ></path>
                <path
                  d="M472.894408 311.83602l-2.919164 6.872517L400.22607 400.399284 318.428338 314.923303l-1.706666-3.082189z"
                  fill="#7C58B8"
                  p-id="17903"
                ></path>
                <path
                  d="M474.045771 313.934965l-4.075622 4.773572 2.919164-6.867423z"
                  fill="#A03EC3"
                  p-id="17904"
                ></path>
                <path
                  d="M603.609791 548.257751l-20.816239 42.926488-81.002985-84.650667-27.357612-191.921035z"
                  fill="#5E88DE"
                  p-id="17905"
                ></path>
                <path
                  d="M528.674388 695.18392L405.004736 471.518886l19.461095-45.779423 77.319642 80.794109z"
                  fill="#7876D7"
                  p-id="17906"
                ></path>
                <path
                  d="M685.713194 698.729711h-155.077413l4.167323-8.589373 69.163304-76.825472z"
                  fill="#0447C1"
                  p-id="17907"
                ></path>
                <path
                  d="M529.280637 696.279244l5.522467-6.133811-4.162228 8.584278z"
                  fill="#A03EC3"
                  p-id="17908"
                ></path>
                <path
                  d="M626.025711 588.8l-22.059303 24.514866-21.172856-22.130627 20.816239-42.926488z"
                  fill="#3C67CA"
                  p-id="17909"
                ></path>
                <path
                  d="M686.808517 698.729711h-0.687761l0.091702-1.080039z"
                  fill="#A03EC3"
                  p-id="17910"
                ></path>
                <path
                  d="M379.26209 424.954905L158.898308 683.069134l157.441274-370.326288 2.088756 2.180457z"
                  fill="#B64AC6"
                  p-id="17911"
                ></path>
                <path
                  d="M424.470925 425.739463l-19.461094 45.774328-25.747741-46.558886 20.969074-24.555621z"
                  fill="#572FAA"
                  p-id="17912"
                ></path>
                <path
                  d="M400.22607 400.399284l-20.96398 24.555621-60.828657-110.026507z"
                  fill="#7241AE"
                  p-id="17913"
                ></path>
                <path
                  d="M469.970149 318.703443l-45.499224 107.03602-24.239761-25.345274z"
                  fill="#6249B6"
                  p-id="17914"
                ></path>
                <path
                  d="M501.785473 506.533572L424.470925 425.744557l45.504319-107.03602 4.075622-4.773572 0.3719 0.662289v0.015283z"
                  fill="#8E7FDA"
                  p-id="17915"
                ></path>
                <path
                  d="M702.163423 504.230846l-15.950965 193.418826-60.186747-108.849672z"
                  fill="#2890E2"
                  p-id="17916"
                ></path>
                <path
                  d="M582.793552 591.184239l-47.990448 98.956099-5.522467 6.138906-0.611343-1.095324-26.883821-188.650348z"
                  fill="#5375D8"
                  p-id="17917"
                ></path>
                <path
                  d="M603.966408 613.314866l-69.163304 76.825472 47.990448-98.956099z"
                  fill="#2B4FC0"
                  p-id="17918"
                ></path>
                <path
                  d="M686.212458 697.649672l-0.091702 1.080039h-0.407562l-81.746786-85.41994 22.059303-24.504676z"
                  fill="#205DC9"
                  p-id="17919"
                ></path>
              </svg>
              <h2>高效刷满 100 题并形成长期记忆</h2>
            </li>
            <li>
              <svg
                t="1651028892768"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="29842"
                width="30"
                height="30"
              >
                <path
                  d="M394.863177 364.42378c31.277435 0.656808 54.567357 2.61142 69.885576 5.865051 15.302408 3.268227 22.968815 9.132062 22.968816 17.592721 0 3.909223-3.421483 7.177451-10.263232 9.774275-6.841749 2.61142-27.366996 7.330706-61.576956 14.172455-34.209961 6.841749-54.247467 10.263232-60.111302 10.263231-10.431082 0-15.638109-7.819663-15.63811-23.457772 0-13.683498 2.763458-30.941733 8.30862-51.802682 5.528133-20.846353 13.02669-40.716008 22.479859-59.622345 9.438573-18.891741 19.868439-33.064196 31.277435-42.517365 11.393184-9.438573 32.74309-19.211631 64.020525-29.322823 31.277435-10.094164 63.852674-18.234933 97.740313-24.43447 33.874259-6.184941 62.219169-9.285318 85.034729-9.285318 14.982518 0 25.73349 1.466871 32.256566 4.39818 6.504831 2.932526 14.980085 17.440682 25.412384 43.495279 10.41527 26.069192 15.638109 52.45949 15.638109 79.170894 0 33.232047-7.986297 61.576957-23.946729 85.034729-15.975028 23.457772-37.310337 44.639827-64.020526 63.531568-26.727216 18.906337-67.442008 45.296635-122.177215 79.169678-133.583779 82.759011-204.613904 132.928188-213.07578 150.520909 30.620627-2.595608 72.481184-8.948399 125.597482-19.059592 53.101702-10.094164 98.872698-19.868439 137.326368-29.321608 38.44029-9.438573 57.988839-14.172455 58.645648-14.172455 5.863835 0 8.796361 3.91044 8.79636 11.730103 0 20.204141-8.476471 43.174172-25.4136 68.907662-16.952942 25.748086-47.083396 45.128784-90.410823 58.155474-43.342023 13.042502-99.863992 19.547333-169.581718 19.547333-20.205357 0-36.820164-2.275718-49.84807-6.841749-13.042502-4.551435-23.457772-18.891741-31.277436-43.005105-7.819663-24.099985-11.728886-40.073796-11.728886-47.893459 0-14.982518 7.651812-34.209961 22.968816-57.667733 15.302408-23.457772 37.630227-48.534455 66.953051-75.260454 29.321607-26.711404 63.195866-51.145874 101.650752-73.305843l101.650753-58.644431a33442.938227 33442.938227 0 0 1 56.689819-33.232047c7.818447-4.551435 18.72389-13.195757 32.74309-25.901341 14.004604-12.7068 24.435686-24.267835 31.277435-34.697702 6.841749-10.41527 10.263232-19.211631 10.263232-26.390298 0-9.774275-4.39818-16.93713-13.194541-21.503161-8.796361-4.551435-18.082894-6.841749-27.855953-6.841748-31.93546 0-71.351231 8.476471-118.266776 25.4136-46.914328 16.949293-87.323826 39.429151-121.198085 67.438359z"
                  fill="#FFA116"
                  p-id="29843"
                ></path>
              </svg>
              <img src="../images/1.jpg" alt="" />
              <h1>竞赛和项目双重打击</h1>
              <svg
                t="1651027932307"
                class="icon1"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="17896"
                width="22"
                height="22"
              >
                <path
                  d="M1022.787502 510.828259c0 281.360557-228.087085 509.452736-509.452736 509.452736s-509.452736-228.092179-509.452736-509.452736c0-281.370746 228.087085-509.452736 509.452736-509.452737s509.452736 228.08199 509.452736 509.452737"
                  fill="#B6ECFF"
                  p-id="17897"
                ></path>
                <path
                  d="M405.004736 471.518886l-96.592238 227.21592H152.229572l6.658547-15.665672 220.368876-258.114229zM316.726766 311.83602l1.701572 3.087283-2.088756-2.180457z"
                  fill="#A03EC3"
                  p-id="17898"
                ></path>
                <path
                  d="M717.98193 312.406607l-15.818507 191.824239-76.137712 84.569154-22.41592-40.542249z"
                  fill="#3B9FE6"
                  p-id="17899"
                ></path>
                <path
                  d="M873.344637 314.082706l-186.531025 384.647005-0.601154-1.080039 15.94587-193.418826z"
                  fill="#20ADEC"
                  p-id="17900"
                ></path>
                <path
                  d="M686.212458 697.649672l0.596059 1.080039h-0.687761z"
                  fill="#A03EC3"
                  p-id="17901"
                ></path>
                <path
                  d="M874.429771 311.83602l-1.090229 2.241592-171.176119 190.158328 15.818507-191.829333 0.005095-0.015284 0.27001-0.550209z"
                  fill="#3AB6ED"
                  p-id="17902"
                ></path>
                <path
                  d="M472.894408 311.83602l-2.919164 6.872517L400.22607 400.399284 318.428338 314.923303l-1.706666-3.082189z"
                  fill="#7C58B8"
                  p-id="17903"
                ></path>
                <path
                  d="M474.045771 313.934965l-4.075622 4.773572 2.919164-6.867423z"
                  fill="#A03EC3"
                  p-id="17904"
                ></path>
                <path
                  d="M603.609791 548.257751l-20.816239 42.926488-81.002985-84.650667-27.357612-191.921035z"
                  fill="#5E88DE"
                  p-id="17905"
                ></path>
                <path
                  d="M528.674388 695.18392L405.004736 471.518886l19.461095-45.779423 77.319642 80.794109z"
                  fill="#7876D7"
                  p-id="17906"
                ></path>
                <path
                  d="M685.713194 698.729711h-155.077413l4.167323-8.589373 69.163304-76.825472z"
                  fill="#0447C1"
                  p-id="17907"
                ></path>
                <path
                  d="M529.280637 696.279244l5.522467-6.133811-4.162228 8.584278z"
                  fill="#A03EC3"
                  p-id="17908"
                ></path>
                <path
                  d="M626.025711 588.8l-22.059303 24.514866-21.172856-22.130627 20.816239-42.926488z"
                  fill="#3C67CA"
                  p-id="17909"
                ></path>
                <path
                  d="M686.808517 698.729711h-0.687761l0.091702-1.080039z"
                  fill="#A03EC3"
                  p-id="17910"
                ></path>
                <path
                  d="M379.26209 424.954905L158.898308 683.069134l157.441274-370.326288 2.088756 2.180457z"
                  fill="#B64AC6"
                  p-id="17911"
                ></path>
                <path
                  d="M424.470925 425.739463l-19.461094 45.774328-25.747741-46.558886 20.969074-24.555621z"
                  fill="#572FAA"
                  p-id="17912"
                ></path>
                <path
                  d="M400.22607 400.399284l-20.96398 24.555621-60.828657-110.026507z"
                  fill="#7241AE"
                  p-id="17913"
                ></path>
                <path
                  d="M469.970149 318.703443l-45.499224 107.03602-24.239761-25.345274z"
                  fill="#6249B6"
                  p-id="17914"
                ></path>
                <path
                  d="M501.785473 506.533572L424.470925 425.744557l45.504319-107.03602 4.075622-4.773572 0.3719 0.662289v0.015283z"
                  fill="#8E7FDA"
                  p-id="17915"
                ></path>
                <path
                  d="M702.163423 504.230846l-15.950965 193.418826-60.186747-108.849672z"
                  fill="#2890E2"
                  p-id="17916"
                ></path>
                <path
                  d="M582.793552 591.184239l-47.990448 98.956099-5.522467 6.138906-0.611343-1.095324-26.883821-188.650348z"
                  fill="#5375D8"
                  p-id="17917"
                ></path>
                <path
                  d="M603.966408 613.314866l-69.163304 76.825472 47.990448-98.956099z"
                  fill="#2B4FC0"
                  p-id="17918"
                ></path>
                <path
                  d="M686.212458 697.649672l-0.091702 1.080039h-0.407562l-81.746786-85.41994 22.059303-24.504676z"
                  fill="#205DC9"
                  p-id="17919"
                ></path>
              </svg>
              <h2>又出事，即将面临竞赛和项目打击</h2>
            </li>
            <li>
              <svg
                t="1651028975763"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="31213"
                width="30"
                height="30"
              >
                <path
                  d="M392.920728 349.593301c-17.593937-8.460659-26.390298-23.457772-26.390298-44.960933 0-34.529851 24.098768-61.898063 72.327929-82.102204 48.214565-20.189545 108.492501-30.299521 180.821647-30.299521 102.949773 0 154.431349 37.142487 154.431348 111.425027 0 16.951725-2.61142 31.765176-7.819663 44.471976-5.222839 12.7068-13.042502 24.11458-23.457772 34.208745-10.429866 10.111193-21.012987 18.418596-31.765176 24.924643-10.752189 6.520643-36.501491 15.31822-77.216282 26.390298-40.729387 11.08789-98.22927 24.435686-172.513027 40.073796 85.357051 7.819663 141.06774 22.32782 167.138149 43.495278 26.054596 21.182055 39.097098 46.427804 39.097098 75.749412 0 28.680611-12.553545 59.622345-37.630227 92.854392-25.092494 33.232047-64.508266 60.111302-118.266776 80.636549s-106.705741 30.788478-158.829529 30.788478c-42.365326 0-75.596156-6.842965-99.696141-20.526463s-36.164573-30.620627-36.164573-50.824768c0-16.93713 7.987514-35.507765 23.94673-55.713122 15.959216-20.190761 29.810564-30.299521 41.53945-30.299521 4.551435 0 6.841749 2.290313 6.841749 6.841749 0 3.268227-1.633506 6.841749-4.887137 10.752188-3.268227 3.909223-4.887137 7.498557-4.887137 10.750972 0 7.819663 7.482745 14.340306 22.479858 19.548549 14.981302 5.222839 35.186659 7.819663 60.600259 7.819663 58.644431 0 114.357553-12.7068 167.136932-38.119184 52.781812-25.4136 79.17211-50.825984 79.172111-76.239585 0-19.547333-13.684714-33.384086-41.052926-41.53945-27.366996-8.139553-65.48618-12.217843-114.357553-12.217843-39.097098 0-71.351231 3.269444-96.763615 9.774274-4.566031 0-6.841749-4.887137-6.841749-14.661412 0-14.324494 3.741372-30.788478 11.239929-49.360329 7.482745-18.570635 15.959216-30.13167 25.4136-34.697702 9.437356-4.551435 30.788478-9.438573 64.020526-14.661412 97.084721-14.981302 166.649192-32.407388 208.678815-52.291639 42.028408-19.868439 63.042611-40.227051 63.042611-61.087999 0-11.728886-7.987514-21.014204-23.946729-27.855953-15.973811-6.841749-38.606925-10.263232-67.930965-10.263232-48.227944 0-89.921866 3.755968-125.108525 11.23993-35.186659 7.498557-52.780596 15.150369-52.780596 22.968815 0 3.909223 1.786761 7.330706 5.374878 10.263232 3.573521 2.932526 12.217843 6.68971 25.901341 11.239929 1.954612 0 3.909223 1.145765 5.863835 3.421482 1.954612 2.29153 2.932526 4.735098 2.932526 7.330706 0.001216 7.819663-33.230831 11.408996-99.694925 10.752189z"
                  fill="#FFA116"
                  p-id="31214"
                ></path>
              </svg>
              <img src="./images/5.jpg" alt="" />
              <h1>第357场竞赛 | 日赛</h1>
              <svg
                t="1651027932307"
                class="icon1"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="17896"
                width="22"
                height="22"
              >
                <path
                  d="M1022.787502 510.828259c0 281.360557-228.087085 509.452736-509.452736 509.452736s-509.452736-228.092179-509.452736-509.452736c0-281.370746 228.087085-509.452736 509.452736-509.452737s509.452736 228.08199 509.452736 509.452737"
                  fill="#B6ECFF"
                  p-id="17897"
                ></path>
                <path
                  d="M405.004736 471.518886l-96.592238 227.21592H152.229572l6.658547-15.665672 220.368876-258.114229zM316.726766 311.83602l1.701572 3.087283-2.088756-2.180457z"
                  fill="#A03EC3"
                  p-id="17898"
                ></path>
                <path
                  d="M717.98193 312.406607l-15.818507 191.824239-76.137712 84.569154-22.41592-40.542249z"
                  fill="#3B9FE6"
                  p-id="17899"
                ></path>
                <path
                  d="M873.344637 314.082706l-186.531025 384.647005-0.601154-1.080039 15.94587-193.418826z"
                  fill="#20ADEC"
                  p-id="17900"
                ></path>
                <path
                  d="M686.212458 697.649672l0.596059 1.080039h-0.687761z"
                  fill="#A03EC3"
                  p-id="17901"
                ></path>
                <path
                  d="M874.429771 311.83602l-1.090229 2.241592-171.176119 190.158328 15.818507-191.829333 0.005095-0.015284 0.27001-0.550209z"
                  fill="#3AB6ED"
                  p-id="17902"
                ></path>
                <path
                  d="M472.894408 311.83602l-2.919164 6.872517L400.22607 400.399284 318.428338 314.923303l-1.706666-3.082189z"
                  fill="#7C58B8"
                  p-id="17903"
                ></path>
                <path
                  d="M474.045771 313.934965l-4.075622 4.773572 2.919164-6.867423z"
                  fill="#A03EC3"
                  p-id="17904"
                ></path>
                <path
                  d="M603.609791 548.257751l-20.816239 42.926488-81.002985-84.650667-27.357612-191.921035z"
                  fill="#5E88DE"
                  p-id="17905"
                ></path>
                <path
                  d="M528.674388 695.18392L405.004736 471.518886l19.461095-45.779423 77.319642 80.794109z"
                  fill="#7876D7"
                  p-id="17906"
                ></path>
                <path
                  d="M685.713194 698.729711h-155.077413l4.167323-8.589373 69.163304-76.825472z"
                  fill="#0447C1"
                  p-id="17907"
                ></path>
                <path
                  d="M529.280637 696.279244l5.522467-6.133811-4.162228 8.584278z"
                  fill="#A03EC3"
                  p-id="17908"
                ></path>
                <path
                  d="M626.025711 588.8l-22.059303 24.514866-21.172856-22.130627 20.816239-42.926488z"
                  fill="#3C67CA"
                  p-id="17909"
                ></path>
                <path
                  d="M686.808517 698.729711h-0.687761l0.091702-1.080039z"
                  fill="#A03EC3"
                  p-id="17910"
                ></path>
                <path
                  d="M379.26209 424.954905L158.898308 683.069134l157.441274-370.326288 2.088756 2.180457z"
                  fill="#B64AC6"
                  p-id="17911"
                ></path>
                <path
                  d="M424.470925 425.739463l-19.461094 45.774328-25.747741-46.558886 20.969074-24.555621z"
                  fill="#572FAA"
                  p-id="17912"
                ></path>
                <path
                  d="M400.22607 400.399284l-20.96398 24.555621-60.828657-110.026507z"
                  fill="#7241AE"
                  p-id="17913"
                ></path>
                <path
                  d="M469.970149 318.703443l-45.499224 107.03602-24.239761-25.345274z"
                  fill="#6249B6"
                  p-id="17914"
                ></path>
                <path
                  d="M501.785473 506.533572L424.470925 425.744557l45.504319-107.03602 4.075622-4.773572 0.3719 0.662289v0.015283z"
                  fill="#8E7FDA"
                  p-id="17915"
                ></path>
                <path
                  d="M702.163423 504.230846l-15.950965 193.418826-60.186747-108.849672z"
                  fill="#2890E2"
                  p-id="17916"
                ></path>
                <path
                  d="M582.793552 591.184239l-47.990448 98.956099-5.522467 6.138906-0.611343-1.095324-26.883821-188.650348z"
                  fill="#5375D8"
                  p-id="17917"
                ></path>
                <path
                  d="M603.966408 613.314866l-69.163304 76.825472 47.990448-98.956099z"
                  fill="#2B4FC0"
                  p-id="17918"
                ></path>
                <path
                  d="M686.212458 697.649672l-0.091702 1.080039h-0.407562l-81.746786-85.41994 22.059303-24.504676z"
                  fill="#205DC9"
                  p-id="17919"
                ></path>
              </svg>
              <h2>欢迎小伙伴们在这里交流分享经验</h2>
            </li>
            <li>
              <svg
                t="1651030081498"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="32604"
                width="30"
                height="30"
              >
                <path
                  d="M639.293019 611.984407l-100.674055 21.504377c-9.773058 26.726-15.973811 54.092996-18.570635 82.102203 8.460659 7.177451 12.705584 15.31822 12.705584 24.435686 0 6.520643-11.239929 17.593937-33.721004 33.232047s-37.630227 23.457772-45.44989 23.457773c-14.997114 0-22.479858-11.408996-22.479858-34.209961 0-38.44029 4.887137-76.238368 14.661412-113.379639-51.481576 5.222839-87.646149 7.819663-108.492502 7.819663-16.951725 0-31.12418-2.275718-42.517364-6.842965-11.40778-4.550219-20.860949-17.745976-28.34491-39.584839-7.498557-21.823051-11.239929-37.951333-11.239929-48.3812 0-22.145373 13.347796-53.268337 40.073796-93.343348 26.710188-40.073796 64.829372-80.147592 114.357552-120.221388 49.512369-40.073796 106.691145-77.704023 171.536329-112.890682 64.829372-35.186659 102.459599-52.780596 112.890682-52.780596 15.638109 0 23.456556 8.796361 23.456556 26.390298 0 3.268227-3.268227 12.385694-9.773058 27.366996 10.41527 9.132062 15.638109 18.249529 15.638109 27.366996 0 13.042502-2.61142 25.260345-7.820879 36.652313-5.221623 11.40778-20.204141 36.011317-44.960933 73.7948-44.960933 67.77771-75.260454 119.24469-90.898564 154.431348 48.214565-8.460659 75.90145-12.705584 83.081334-12.705584 14.324494 0 21.501944 5.543945 21.501944 16.614807 0.001216 14.99833-14.994681 41.388628-44.959717 79.170895z m-152.47552-67.440792c24.756792-50.825984 47.725608-91.708627 68.906446-122.664956 21.167459-30.940517 51.957154-69.885577 92.365435-116.801122 26.711404-30.620627 40.073796-48.534455 40.073796-53.757293 0-5.865051-3.589334-8.796361-10.752189-8.796361-10.429866 0-63.210462 32.255349-158.340572 96.763615-95.145922 64.509482-161.610016 137.815325-199.392281 219.917529 61.899279-3.909223 117.611184-8.797577 167.139365-14.661412z"
                  fill="#dbdbdb"
                  p-id="32605"
                ></path>
              </svg>
              <img src="./images/7.jpg" alt="" />
              <h1>经验分享 | 八股文 的 学习</h1>
              <h2>学习路线、做笔记、方法要点、步骤</h2>
            </li>
            <li>
              <svg
                t="1651030250159"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="34056"
                width="30"
                height="30"
              >
                <path
                  d="M478.581857 130.343527c48.870156 2.61142 90.89978 3.909223 126.087656 3.909223 43.005105 0 84.055599-0.977914 123.153913-2.932525-28.680611 60.599043-50.825984 96.122619-66.46531 106.537889-13.042502 2.61142-43.983019 3.909223-92.854392 3.909224-59.958047 0-95.465811-0.321106-106.53789-0.976698-35.186659 29.978415-63.86727 67.77771-86.012643 113.379639 61.241255-20.189545 105.881082-30.300738 133.906102-30.300738 37.783482 0 67.595263 10.752189 89.434125 32.255349 21.823051 21.503161 32.74309 53.437404 32.74309 95.786918 0 75.596156-35.187875 139.616682-105.559975 192.061576-70.374533 52.45949-149.881129 78.680721-238.48938 78.68072-33.888855 0-56.843075-5.222839-68.907663-15.638109-12.049992-10.41527-18.082894-28.007992-18.082894-52.780596 0-16.93713 4.735098-31.766392 14.172455-44.471976 9.453168-12.705584 26.390298-24.587725 50.825984-35.675616 24.43447-11.073295 49.359113-16.616023 74.771497-16.616023 3.909223 0 5.865051 0.977914 5.865052 2.932525 0 2.610203-2.61142 4.887137-7.819663 6.841749-18.249529 6.520643-32.910941 13.042502-43.984236 19.548549-11.08789 6.520643-16.616023 11.728886-16.616023 15.63811 0 8.475254 13.347796 12.705584 40.073796 12.705584 42.349514 0 86.164682-11.239929 131.462533-33.721004 45.282039-22.479858 80.148808-46.427804 104.583278-71.840188 24.435686-25.412384 36.652313-44.960933 36.652313-58.644431 0-12.371098-6.032902-22.313224-18.081678-29.811781-12.065804-7.482745-29.169568-11.239929-51.313725-11.239929-29.978415 0-64.509482 5.543945-103.605364 16.616023-28.681828 8.476471-47.572353 12.705584-56.689819 12.705584-7.819663 0-16.294917-7.482745-25.412385-22.479858-9.133279-14.982518-15.975028-34.209961-20.525246-57.667734 19.546116-69.057269 73.945622-145.295637 163.226492-228.711456z"
                  fill="#dbdbdb"
                  p-id="34057"
                ></path>
              </svg>
              <img src="../images/1.jpg" alt="" />
              <h1>前辈帮帮团 | 作为..</h1>
              <h2>作为监考官，我给竞赛大学生一些建议</h2>
            </li>
            <li>
              <svg
                t="1651030365089"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="35390"
                width="30"
                height="30"
              >
                <path
                  d="M637.100011 147.45094l49.84807 2.932526c20.846353 1.313616 34.697702 2.61142 41.539451 3.909223 6.841749 1.313616 10.263232 3.909223 10.263231 7.819663 0 4.566031-14.661412 14.661412-43.983019 30.299521-54.094212 28.02502-103.942282 60.279153-149.544211 96.763615-46.915545 37.142487-87.647365 77.871874-122.177216 122.177216-18.249529 22.816777-27.366996 35.186659-27.366995 37.142487h0.977914c1.297804 0 5.208243-3.573521 11.728886-10.752189 30.620627-31.277435 58.155474-53.910549 82.59116-67.930965 24.43447-14.004604 49.68022-21.014204 75.749412-21.014204 30.620627 0 54.888463 9.132062 72.818102 27.366996 17.913827 18.249529 26.878039 43.984235 26.878038 77.215066 0 34.545663-12.552329 74.451608-37.630227 119.732431-25.092494 45.296635-56.85767 82.928078-95.29796 112.890682-38.456102 29.978415-74.283757 44.960933-107.51702 44.960933-36.500274 0-68.418706-18.402784-95.785702-55.222949-27.366996-36.805568-41.05171-77.048432-41.05171-120.710344 0-62.554871 31.766392-133.417145 95.297961-212.588039 63.532785-79.168461 147.742855-144.166901 252.661835-194.991669zM369.289024 599.014883c0 20.205357 2.596824 34.377812 7.819662 42.517365 5.208243 8.155365 14.004604 12.217843 26.390298 12.217843 18.234933 0 43.647317-12.705584 76.238369-38.119184 32.575239-25.412384 59.286643-54.0784 80.147592-86.012643 20.847569-31.918431 31.277435-62.217952 31.277435-90.898564 0-24.756792-10.109976-37.142487-30.299521-37.142487-13.042502 0-32.255349 7.987514-57.667734 23.94673-25.4136 15.975028-50.672729 36.163356-75.749411 60.599042-25.091278 24.435686-41.050494 44.962149-47.893459 61.576957-6.841749 16.61724-10.263232 33.72222-10.263231 51.314941z"
                  fill="#dbdbdb"
                  p-id="35391"
                ></path>
              </svg>
              <img src="./images/6.jpg" alt="" />
              <h1>问问大家刷多少题才拿上..</h1>
              <h2>刷多少题才能拿到竞赛奖状成功上岸</h2>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagebox: [
        { id: 0, idView: require("./images/1.jpg") },
        { id: 1, idView: require("./images/2.jpg") },
        { id: 2, idView: require("./images/3.jpg") },
        { id: 3, idView: require("./images/4.jpg") },
        { id: 4, idView: require("./images/5.jpg") },
      ],
      List: [
        {
          src: require("./images/2.png"),
          name: "全部",
        },
        {
          src: require("./images/3.png"),
          name: "前端",
        },
        {
          src: require("./images/4.png"),
          name: "后端",
        },
        {
          src: require("./images/5.png"),
          name: "大数据",
        },
      ],
      Item: "",
      Index: 0,
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value1: "",
      value2: "",
      value3: "",
      tableData: [
        {
          src: "true",
          title: "1.深度遍历二叉树",
          key: "2428",
          rate: "75.2%",
          tough: "中等",
          frequency: "70%",
        },
        {
          src: "true",
          title: "2.闭包",
          key: "417",
          rate: "12.5%",
          tough: "困难",
          frequency: "49%",
        },
        {
          src: "false",
          title: "3.display,float,position的关系",
          key: "154",
          rate: "45.2%",
          tough: "中等",
          frequency: "92%",
        },
        {
          src: "true",
          title: "4.attribute和property的区别是什么？",
          key: "13",
          rate: "77.5%",
          tough: "简单",
          frequency: "88%",
        },
        {
          src: "false",
          title: "5.事件委托",
          key: "5718",
          rate: "52.3%",
          tough: "简单",
          frequency: "70%",
        },
        {
          src: "true",
          title: "6.类加载过程",
          key: "541",
          rate: "78.5%",
          tough: "中等",
          frequency: "70%",
        },
        {
          src: "false",
          title: "7.JDK 动态代理与 CGLIB 区别",
          key: "351",
          rate: "45.2%",
          tough: "困难",
          frequency: "65%",
        },
        {
          src: "false",
          title: "8.JavaScript优化",
          key: "154",
          rate: "45.2%",
          tough: "中等",
          frequency: "70%",
        },
        {
          src: "true",
          title: "9.行内元素、块级元素",
          key: "13",
          rate: "77.5%",
          tough: "简单",
          frequency: "88%",
        },
        {
          src: "false",
          title: "10.wxml与标准的html的异同",
          key: "24",
          rate: "32.5%",
          tough: "困难",
          frequency: "48%",
        },
        {
          src: "true",
          title: "11. v-show与v-if区别",
          key: "1",
          rate: "65.7%",
          tough: "简单",
          frequency: "66%",
        },
        {
          src: "false",
          title: "12.块级格式化上下文BFC",
          key: "45",
          rate: "65.4%",
          tough: "中等",
          frequency: "40%",
        },
        {
          src: "false",
          title: "13.数据产生方式的改变",
          key: "234",
          rate: "42.5%",
          tough: "困难",
          frequency: "45%",
        },
        {
          src: "false",
          title: "14.新摩尔定律的含义",
          key: "150",
          rate: "53.2%",
          tough: "中等",
          frequency: "54%",
        },
        {
          src: "true",
          title: "15.云计算按照服务类型",
          key: "14",
          rate: "74.5%",
          tough: "简单",
          frequency: "76%",
        },
        {
          src: "false",
          title: "16.新摩尔定律的含义",
          key: "150",
          rate: "53.2%",
          tough: "中等",
          frequency: "54%",
        },
        {
          src: "true",
          title: "17.云计算技术体系结构",
          key: "14",
          rate: "74.5%",
          tough: "简单",
          frequency: "76%",
        },
        {
          src: "true",
          title: "18.简述Hadoop1.0与Hadoop2.0的优缺点",
          key: "14",
          rate: "74.5%",
          tough: "困难",
          frequency: "76%",
        },
        {
          src: "true",
          title: "19.如何设计HashMap",
          key: "541",
          rate: "78.5%",
          tough: "简单",
          frequency: "70%",
        },
        {
          src: "false",
          title: "20.并发类库提供的线程池实现",
          key: "351",
          rate: "45.2%",
          tough: "困难",
          frequency: "65%",
        },
        {
          src: "true",
          title: "21.GC调优",
          key: "541",
          rate: "78.5%",
          tough: "简单",
          frequency: "70%",
        },
      ],
      tableData1: [
        {
          src: "false",
          title: "1.JavaScript优化",
          key: "154",
          rate: "45.2%",
          tough: "中等",
          frequency: "70%",
        },
        {
          src: "true",
          title: "2.行内元素、块级元素",
          key: "13",
          rate: "77.5%",
          tough: "简单",
          frequency: "88%",
        },
        {
          src: "false",
          title: "3.wxml与标准的html的异同",
          key: "24",
          rate: "32.5%",
          tough: "困难",
          frequency: "48%",
        },
        {
          src: "true",
          title: "4. v-show与v-if区别",
          key: "1",
          rate: "65.7%",
          tough: "简单",
          frequency: "66%",
        },
        {
          src: "false",
          title: "5.块级格式化上下文BFC",
          key: "45",
          rate: "65.4%",
          tough: "中等",
          frequency: "40%",
        },
        {
          src: "false",
          title: "6.display,float,position的关系",
          key: "154",
          rate: "45.2%",
          tough: "中等",
          frequency: "70%",
        },
        {
          src: "true",
          title: "7.attribute和property的区别是什么？",
          key: "13",
          rate: "77.5%",
          tough: "简单",
          frequency: "88%",
        },
        {
          src: "false",
          title: "3.wxml与标准的html的异同",
          key: "24",
          rate: "32.5%",
          tough: "困难",
          frequency: "48%",
        },
        {
          src: "true",
          title: "4. v-show与v-if区别",
          key: "1",
          rate: "65.7%",
          tough: "简单",
          frequency: "66%",
        },
        {
          src: "false",
          title: "5.块级格式化上下文BFC",
          key: "45",
          rate: "65.4%",
          tough: "中等",
          frequency: "40%",
        },
        {
          src: "false",
          title: "1.JavaScript优化",
          key: "154",
          rate: "45.2%",
          tough: "中等",
          frequency: "70%",
        },
        {
          src: "true",
          title: "2.行内元素、块级元素",
          key: "13",
          rate: "77.5%",
          tough: "简单",
          frequency: "88%",
        },
        {
          src: "false",
          title: "3.wxml与标准的html的异同",
          key: "24",
          rate: "32.5%",
          tough: "困难",
          frequency: "48%",
        },
        {
          src: "true",
          title: "4. v-show与v-if区别",
          key: "1",
          rate: "65.7%",
          tough: "简单",
          frequency: "66%",
        },
        {
          src: "false",
          title: "5.块级格式化上下文BFC",
          key: "45",
          rate: "65.4%",
          tough: "中等",
          frequency: "40%",
        },
        {
          src: "false",
          title: "1.JavaScript优化",
          key: "154",
          rate: "45.2%",
          tough: "中等",
          frequency: "70%",
        },
        {
          src: "true",
          title: "2.行内元素、块级元素",
          key: "13",
          rate: "77.5%",
          tough: "简单",
          frequency: "88%",
        },
        {
          src: "false",
          title: "3.wxml与标准的html的异同",
          key: "24",
          rate: "32.5%",
          tough: "困难",
          frequency: "48%",
        },
        {
          src: "true",
          title: "4. v-show与v-if区别",
          key: "1",
          rate: "65.7%",
          tough: "简单",
          frequency: "66%",
        },
        {
          src: "false",
          title: "5.块级格式化上下文BFC",
          key: "45",
          rate: "65.4%",
          tough: "中等",
          frequency: "40%",
        },
        {
          src: "false",
          title: "1.JavaScript优化",
          key: "154",
          rate: "45.2%",
          tough: "中等",
          frequency: "70%",
        },
        {
          src: "true",
          title: "2.行内元素、块级元素",
          key: "13",
          rate: "77.5%",
          tough: "简单",
          frequency: "88%",
        },
        {
          src: "false",
          title: "3.wxml与标准的html的异同",
          key: "24",
          rate: "32.5%",
          tough: "困难",
          frequency: "48%",
        },
        {
          src: "true",
          title: "4. v-show与v-if区别",
          key: "1",
          rate: "65.7%",
          tough: "简单",
          frequency: "66%",
        },
        {
          src: "false",
          title: "5.块级格式化上下文BFC",
          key: "45",
          rate: "65.4%",
          tough: "中等",
          frequency: "40%",
        },
        {
          src: "false",
          title: "1.JavaScript优化",
          key: "154",
          rate: "45.2%",
          tough: "中等",
          frequency: "70%",
        },
        {
          src: "true",
          title: "2.行内元素、块级元素",
          key: "13",
          rate: "77.5%",
          tough: "简单",
          frequency: "88%",
        },
        {
          src: "false",
          title: "3.wxml与标准的html的异同",
          key: "24",
          rate: "32.5%",
          tough: "困难",
          frequency: "48%",
        },
        {
          src: "true",
          title: "4. v-show与v-if区别",
          key: "1",
          rate: "65.7%",
          tough: "简单",
          frequency: "66%",
        },
        {
          src: "false",
          title: "5.块级格式化上下文BFC",
          key: "45",
          rate: "65.4%",
          tough: "中等",
          frequency: "40%",
        },
      ],
      tableData2: [
        {
          src: "true",
          title: "1.如何设计HashMap",
          key: "541",
          rate: "78.5%",
          tough: "简单",
          frequency: "70%",
        },
        {
          src: "false",
          title: "2.并发类库提供的线程池实现",
          key: "351",
          rate: "45.2%",
          tough: "困难",
          frequency: "65%",
        },
        {
          src: "true",
          title: "3.GC调优",
          key: "541",
          rate: "78.5%",
          tough: "简单",
          frequency: "70%",
        },
        {
          src: "true",
          title: "4.类加载过程",
          key: "541",
          rate: "78.5%",
          tough: "中等",
          frequency: "70%",
        },
        {
          src: "false",
          title: "5.JDK 动态代理与 CGLIB 区别",
          key: "351",
          rate: "45.2%",
          tough: "困难",
          frequency: "65%",
        },
        {
          src: "true",
          title: "6.双亲委派",
          key: "541",
          rate: "78.5%",
          tough: "中等",
          frequency: "70%",
        },
        {
          src: "false",
          title: "7.JDK 和 JRE 的区别",
          key: "351",
          rate: "45.2%",
          tough: "困难",
          frequency: "65%",
        },
        {
          src: "false",
          title: "8.序列化和反序列化",
          key: "351",
          rate: "45.2%",
          tough: "困难",
          frequency: "65%",
        },
        {
          src: "true",
          title: "1.如何设计如何设计",
          key: "541",
          rate: "78.5%",
          tough: "简单",
          frequency: "70%",
        },
        {
          src: "false",
          title: "2.并发类库提供的线程池实现",
          key: "351",
          rate: "45.2%",
          tough: "困难",
          frequency: "65%",
        },
        {
          src: "true",
          title: "3.GC调优",
          key: "541",
          rate: "78.5%",
          tough: "简单",
          frequency: "70%",
        },
        {
          src: "true",
          title: "4.类加载过程",
          key: "541",
          rate: "78.5%",
          tough: "中等",
          frequency: "70%",
        },
        {
          src: "false",
          title: "5.JDK 动态代理与 CGLIB 区别",
          key: "351",
          rate: "45.2%",
          tough: "困难",
          frequency: "65%",
        },
        {
          src: "true",
          title: "6.双亲委派",
          key: "541",
          rate: "78.5%",
          tough: "中等",
          frequency: "70%",
        },
        {
          src: "false",
          title: "7.JDK 和 JRE 的区别",
          key: "351",
          rate: "45.2%",
          tough: "困难",
          frequency: "65%",
        },
        {
          src: "false",
          title: "8.序列化和反序列化",
          key: "351",
          rate: "45.2%",
          tough: "困难",
          frequency: "65%",
        },
        {
          src: "true",
          title: "1.如何设计如何设计",
          key: "541",
          rate: "78.5%",
          tough: "简单",
          frequency: "70%",
        },
        {
          src: "false",
          title: "2.并发类库提供的线程池实现",
          key: "351",
          rate: "45.2%",
          tough: "困难",
          frequency: "65%",
        },
        {
          src: "true",
          title: "3.GC调优",
          key: "541",
          rate: "78.5%",
          tough: "简单",
          frequency: "70%",
        },
        {
          src: "true",
          title: "4.类加载过程",
          key: "541",
          rate: "78.5%",
          tough: "中等",
          frequency: "70%",
        },
        {
          src: "false",
          title: "5.JDK 动态代理与 CGLIB 区别",
          key: "351",
          rate: "45.2%",
          tough: "困难",
          frequency: "65%",
        },
        {
          src: "true",
          title: "6.双亲委派",
          key: "541",
          rate: "78.5%",
          tough: "中等",
          frequency: "70%",
        },
        {
          src: "false",
          title: "7.JDK 和 JRE 的区别",
          key: "351",
          rate: "45.2%",
          tough: "困难",
          frequency: "65%",
        },
        {
          src: "false",
          title: "8.序列化和反序列化",
          key: "351",
          rate: "45.2%",
          tough: "困难",
          frequency: "65%",
        },
      ],
      tableData3: [
        {
          src: "false",
          title: "1.数据产生方式的改变",
          key: "234",
          rate: "42.5%",
          tough: "困难",
          frequency: "45%",
        },
        {
          src: "false",
          title: "2.新摩尔定律的含义",
          key: "150",
          rate: "53.2%",
          tough: "中等",
          frequency: "54%",
        },
        {
          src: "true",
          title: "3.云计算按照服务类型",
          key: "14",
          rate: "74.5%",
          tough: "简单",
          frequency: "76%",
        },
        {
          src: "false",
          title: "4.新摩尔定律的含义",
          key: "150",
          rate: "53.2%",
          tough: "中等",
          frequency: "54%",
        },
        {
          src: "true",
          title: "5.云计算技术体系结构",
          key: "14",
          rate: "74.5%",
          tough: "简单",
          frequency: "76%",
        },
        {
          src: "true",
          title: "6.简述Hadoop1.0与Hadoop2.0的优缺点",
          key: "14",
          rate: "74.5%",
          tough: "困难",
          frequency: "76%",
        },
        {
          src: "false",
          title: "1.数据产生方式的改变",
          key: "234",
          rate: "42.5%",
          tough: "困难",
          frequency: "45%",
        },
        {
          src: "false",
          title: "2.新摩尔定律的含义",
          key: "150",
          rate: "53.2%",
          tough: "中等",
          frequency: "54%",
        },
        {
          src: "true",
          title: "3.云计算按照服务类型",
          key: "14",
          rate: "74.5%",
          tough: "简单",
          frequency: "76%",
        },
        {
          src: "false",
          title: "4.新摩尔定律的含义",
          key: "150",
          rate: "53.2%",
          tough: "中等",
          frequency: "54%",
        },
        {
          src: "true",
          title: "5.云计算技术体系结构",
          key: "14",
          rate: "74.5%",
          tough: "简单",
          frequency: "76%",
        },
        {
          src: "true",
          title: "6.简述Hadoop1.0与Hadoop2.0的优缺点",
          key: "14",
          rate: "74.5%",
          tough: "困难",
          frequency: "76%",
        },
        {
          src: "false",
          title: "1.数据产生方式的改变",
          key: "234",
          rate: "42.5%",
          tough: "困难",
          frequency: "45%",
        },
        {
          src: "false",
          title: "2.新摩尔定律的含义",
          key: "150",
          rate: "53.2%",
          tough: "中等",
          frequency: "54%",
        },
        {
          src: "true",
          title: "3.云计算按照服务类型",
          key: "14",
          rate: "74.5%",
          tough: "简单",
          frequency: "76%",
        },
        {
          src: "false",
          title: "4.新摩尔定律的含义",
          key: "150",
          rate: "53.2%",
          tough: "中等",
          frequency: "54%",
        },
        {
          src: "true",
          title: "5.云计算技术体系结构",
          key: "14",
          rate: "74.5%",
          tough: "简单",
          frequency: "76%",
        },
        {
          src: "true",
          title: "6.简述Hadoop1.0与Hadoop2.0的优缺点",
          key: "14",
          rate: "74.5%",
          tough: "困难",
          frequency: "76%",
        },
        {
          src: "false",
          title: "1.数据产生方式的改变",
          key: "234",
          rate: "42.5%",
          tough: "困难",
          frequency: "45%",
        },
        {
          src: "false",
          title: "2.新摩尔定律的含义",
          key: "150",
          rate: "53.2%",
          tough: "中等",
          frequency: "54%",
        },
        {
          src: "true",
          title: "3.云计算按照服务类型",
          key: "14",
          rate: "74.5%",
          tough: "简单",
          frequency: "76%",
        },
        {
          src: "false",
          title: "4.新摩尔定律的含义",
          key: "150",
          rate: "53.2%",
          tough: "中等",
          frequency: "54%",
        },
        {
          src: "true",
          title: "5.云计算技术体系结构",
          key: "14",
          rate: "74.5%",
          tough: "简单",
          frequency: "76%",
        },
        {
          src: "true",
          title: "6.简述Hadoop1.0与Hadoop2.0的优缺点",
          key: "14",
          rate: "74.5%",
          tough: "困难",
          frequency: "76%",
        },
        {
          src: "false",
          title: "1.数据产生方式的改变",
          key: "234",
          rate: "42.5%",
          tough: "困难",
          frequency: "45%",
        },
        {
          src: "false",
          title: "2.新摩尔定律的含义",
          key: "150",
          rate: "53.2%",
          tough: "中等",
          frequency: "54%",
        },
        {
          src: "true",
          title: "3.云计算按照服务类型",
          key: "14",
          rate: "74.5%",
          tough: "简单",
          frequency: "76%",
        },
        {
          src: "false",
          title: "4.新摩尔定律的含义",
          key: "150",
          rate: "53.2%",
          tough: "中等",
          frequency: "54%",
        },
        {
          src: "true",
          title: "5.云计算技术体系结构",
          key: "14",
          rate: "74.5%",
          tough: "简单",
          frequency: "76%",
        },
        {
          src: "true",
          title: "6.简述Hadoop1.0与Hadoop2.0的优缺点",
          key: "14",
          rate: "74.5%",
          tough: "困难",
          frequency: "76%",
        },
        {
          src: "false",
          title: "1.数据产生方式的改变",
          key: "234",
          rate: "42.5%",
          tough: "困难",
          frequency: "45%",
        },
        {
          src: "false",
          title: "2.新摩尔定律的含义",
          key: "150",
          rate: "53.2%",
          tough: "中等",
          frequency: "54%",
        },
        {
          src: "true",
          title: "3.云计算按照服务类型",
          key: "14",
          rate: "74.5%",
          tough: "简单",
          frequency: "76%",
        },
      ],
      pageSize: 21,
      currPage: 1,
    };
  },
  methods: {
    Status(item, index) {
      this.Item = item;
      this.Index = index;
    },
    headClass() {
      return "background:#36393f;color:white";
    },
    // 表格样式设置
    rowClass() {
      return "background:#36393f";
    },
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currPage = val;
    },
  },
};
</script>

<style lang="less" scoped>
.text-container {
  position: relative;
  width: 80%;
  height: 100%;
  margin: 2em auto;
  z-index: 0;
  .center {
    height: 175em;
    background-color: #36393f;
    border-radius: 15px;
    ul {
      position: relative;
      li {
        width: 100%;
        height: 23.5em;
        color: white;
        overflow: hidden;
        h1 {
          position: absolute;
          top: -3em;
          left: 1em;
        }
        .el-carousel {
          width: 90%;
          margin: 3.5em auto;
          /deep/ .el-carousel__arrow i {
            position: absolute;
            margin: -0.5em;
          }
          img {
            margin-top: 0;
            width: 100%;
            height: 100%;
            border-radius: 20px;
          }
        }
        .h1 {
          top: 10.5em;
        }
        .img {
          margin: 1.5em 1.15em;
          width: 10em;
          float: left;
          margin-right: 1em;
          h2 {
            position: relative;
            top: -10em;
            left: 0;
            font-size: 13px;
          }
          .image {
            width: 8em;
            height: 8em;
            border-radius: 20px;
          }
        }
      }
      .li {
        height: 14em;
      }
    }
    .line {
      margin: 0 auto;
      width: 95%;
      height: 0.5px;
      background: linear-gradient(
        135deg,
        rgb(100, 100, 100),
        rgb(300, 300, 300),
        rgb(100, 100, 100)
      );
    }
    .content {
      position: relative;
      .status {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        align-content: space-between;
        margin-left: 1em;
        .btn {
          display: inline-block;
          width: 8.5em;
          border-radius: 20px;
          margin: 2em 0.5em;
          height: 3.3em;
          img {
            position: absolute;
            top: 2.6em;
            margin-left: -3em;
            width: 2em;
            height: 2em;
          }
          span {
            position: absolute;
            font-size: 14px;
            top: -2.6em;
            margin-left: -0.3em;
          }
        }
        .c1 {
          background-color: white;
          color: black;
        }
        .c2 {
          color: white;
          background-color: #202225;
        }
        .top {
          position: absolute;
          top: 7.5em;
          left: 1.5em;
          line-height: 3em;
          .el-select {
            position: relative;
            float: left;
            margin-right: 1.5em;
            line-height: 10px;
            /deep/ .el-input__inner {
              background-color: transparent;
              border-radius: 20px;
              width: 5.5em;
              height: 2.5em;
              line-height: 2.5em;
            }
            //聚焦时的样式
            /deep/ .el-input.is-focus .el-input__inner {
              border-color: whitesmoke;
              background-color: #202225;
            }
          }
          .el-input {
            width: 15em;
            /deep/ .el-input__inner {
              background-color: transparent;
              height: 2.5em;
              line-height: 2.5em;
            }
          }
          i {
            position: absolute;
            top: 0.2em;
            margin-left: 0.5em;
            color: white;
            font-size: 25px;
          }
          .icon2 {
            position: absolute;
            top: 0.4em;
            margin-left: 8em;
          }
          h2 {
            position: absolute;
            top: 0.1em;
            width: 4em;
            left: 45.3em;
            font-size: 14px;
            color: #1296db;
          }
        }
        /deep/ .el-container .el-main[data-v-1d9b105c] {
          line-height: initial;
        }
        .el-table {
          position: absolute;
          top: 10em;
          left: 1.2em;
          /deep/ .el-table__header-wrapper {
            height: 59px;
            line-height: 3px;
          }
        }
        .el-pagination {
          position: absolute;
          top: 132em;
          left: 17em;
          /deep/ .el-pagination__jump {
            color: white;
          }
        }
      }
    }
  }
  .right_1 {
    height: 30.9em;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background-color: #36393f;
    border-radius: 15px;
    img {
      position: absolute;
      top: -3.5em;
      left: 82em;
      width: 10em;
      height: 10em;
    }
    .van-calendar {
      color: white;
      background-color: transparent;
      border-radius: 15px;
      overflow: hidden;
      /deep/ .van-calendar__day {
        height: 50px;
      }
    }
  }
  .right_2 {
    margin-top: 1em;
    height: 6em;
    background-color: #36393f;
    border-radius: 15px;
    color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    .icons {
      position: relative;
      top: 1em;
      left: 2em;
      width: 4em;
      background-color: white;
      border-radius: 50%;
      height: 4em;
      .icon {
        position: absolute;
        top: 0.9em;
        left: 0.9em;
      }
    }
    .con {
      position: absolute;
      margin: -8.5em 7.5em;
      h1 {
        font-size: 16px;
      }
      h2 {
        font-size: 12px;
        color: #bfbfbf;
        margin-top: -11em;
        margin-left: -1.5em;
      }
    }
    i {
      float: right;
      font-size: 20px;
      margin: -1em 0.7em;
    }
  }
  .my-swipe {
    margin-top: 1em;
    border-radius: 15px;
    height: 14em;
    img {
      width: 100%;
      height: 100%;
    }
    .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
      background-color: #39a9ed;
    }
  }
  .img1 {
    margin-top: 1em;
    width: 100%;
    height: 14em;
    border-radius: 15px;
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
  }
  .right_3 {
    position: relative;
    top: -5em;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background-color: #36393f;
    border-radius: 15px;
    height: 6em;
    color: white;
    h1 {
      font-size: 16px;
    }
    .s1 {
      position: absolute;
      top: -2.6em;
      left: 5.5em;
      color: rgb(4, 184, 221);
    }
    .s2 {
      position: absolute;
      top: -2.6em;
      left: 16em;
      color: rgb(160, 140, 246);
    }
    .icon {
      position: absolute;
      top: 1.2em;
      left: 2em;
    }
    .icon1 {
      position: absolute;
      top: 1.2em;
      left: 16em;
    }
  }
  .right_4 {
    position: relative;
    top: -3.5em;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background-color: #36393f;
    border-radius: 15px;
    height: 37em;
    color: white;
    h1 {
      position: absolute;
      margin: -3em 1em;
    }
    ul {
      position: relative;
      top: 0.5em;
      left: -9.5em;
      li {
        position: relative;
        margin-bottom: -22em;
        img {
          width: 3em;
          height: 3em;
          border-radius: 5px;
        }
        .icon {
          margin: 0.5em 1em;
        }
        h2 {
          font-size: 15px;
          width: 100%;
          position: relative;
          top: -11.5em;
          left: 14.5em;
          text-align: left;
        }
      }
    }
  }
  .img2 {
    margin-top: -2em;
    width: 100%;
    height: 14em;
    border-radius: 15px;
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
  }
  .right_5 {
    position: relative;
    top: -5em;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background-color: #36393f;
    border-radius: 15px;
    height: 37em;
    color: white;
    h1 {
      position: absolute;
      margin: -3em 1em;
    }
    .content {
      color: white;
      width: 100%;
      text-align: left;
      li {
        height: 5.5em;
        width: 100%;
        padding: 0 1em;
        .icon {
          position: relative;
          top: 0.3em;
        }
        img {
          position: relative;
          width: 3em;
          height: 3em;
          border-radius: 50%;
          top: 0.5em;
          left: 0.5em;
        }
        h1 {
          position: relative;
          font-size: 15px;
          top: -8.5em;
          left: 4.5em;
        }
        .icon1 {
          float: right;
          margin-top: -14.2em;
          margin-right: 2.5em;
        }
        h2 {
          position: relative;
          font-size: 12px;
          top: -18.5em;
          left: 6.9em;
          color: #cdcdcd;
        }
      }
    }
  }
}
</style>