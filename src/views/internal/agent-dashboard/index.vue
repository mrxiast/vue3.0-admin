<template>
  <div class="base-container">
    <div class="title">Agent Dashboard</div>
    <el-card>
      <div class="user-box">
        <div class="user-left">
          <div
            :style="{
              width: '200px',
              height: '100px',
              background: `url(${imgUrl}) no-repeat top center`,
              backgroundSize: 'contain',
              backgroundColor: '#f00'
            }"
          ></div>
          <div class="user-con">
            <div class="user-name">Good Day:{{ username }}</div>
            <div class="agent-box">
              <div class="agent-style">Agent Name:Test</div>
              <div class="agent-style">Agent Level:Test1</div>
            </div>
          </div>
        </div>
        <div class="link-box">
          <div class="link-title">
            Please take note of your referral link below, All customers that will register under this link will
            automatically be under your account.
          </div>
          <div class="link-middle">
            <div class="ref-title">My referral link</div>
            <div class="link-style">
              <span>
                <a href="https://distribution.live/register?refid=5678402" target="_blank">
                  https://distribution.live/register?refid=5678402
                </a>
              </span>
              <span class="tag-read" data-clipboard-text="https://distribution.live/register?refid=5678402">
                <el-icon @click="copyLink" style="cursor: pointer"><i-document-copy /></el-icon>
              </span>
            </div>
          </div>
          <div class="bottom-link">
            <div>Invited Customers</div>
            <div class="num-box">100</div>
          </div>
        </div>
      </div>
    </el-card>
    <div class="three-box">
      <el-card>
        <div class="card-item">
          <div class="card-title">Today's Revenue</div>
          <div class="card-num">1000000PHP</div>
        </div>
      </el-card>
      <el-card>
        <div class="card-item">
          <div class="card-title">Wallet balance</div>
          <div class="card-num">1000000PHP</div>
          <div class="btn-style">
            <el-button type="primary" @click="goWithdraw">Withdraw</el-button>
          </div>
          <div class="link">
            <span @click="goCashInHistory">Cash in history</span>
            <span @click="goWithdrawHistory">Withdraw history</span>
          </div>
        </div>
      </el-card>
      <el-card>
        <div class="card-item">
          <div class="card-title">Pre-deposite amount</div>
          <div class="card-num">1000000PHP</div>
          <div class="con-style">
            Contact our customer service to cash in
            <br />
            Phone number: 093844939393
          </div>
        </div>
      </el-card>
    </div>
    <div class="two-box">
      <el-card>
        <div class="title">Notice Board</div>
        <div class="bottom-card-one" v-for="i in 5" :key="i">
          <div class="card-style">
            <div>
              <div class="title weight">Cooperated with BPI to provide xxxx payments</div>
              <div class="notic-style">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin ..999
              </div>
              <div class="not-bottom">
                <span>
                  <el-icon><i-e-timer /></el-icon>
                  <span>Jan-01 2001 12:00:00</span>
                </span>
                <span class="not-read">Read More</span>
              </div>
            </div>
          </div>
        </div>
      </el-card>
      <el-card>
        <div class="bottom-card-two">
          <div>
            <el-select v-model="selectValue" placeholder="Select" size="large">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </div>
        </div>
        <div class="selcet-time">
          <div :class="day == '1' ? 'isSelect time-span' : 'time-span'" @click="changeTime('1')">7d</div>
          <div :class="day == '2' ? 'isSelect time-span' : 'time-span'" @click="changeTime('2')">15d</div>
          <div :class="day == '3' ? 'isSelect time-span' : 'time-span'" @click="changeTime('3')">1m</div>
          <div :class="day == '4' ? 'isSelect time-span' : 'time-span'" @click="changeTime('4')">1y</div>
        </div>
        <div ref="myChart" id="myChart" :style="{ width: '800px', height: '400px', marginTop: '20px' }"></div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Clipboard from 'clipboard'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import * as echarts from 'echarts'
export default {
  name: 'agent-dashboard',
  setup() {
    onMounted(() => {
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: { text: 'Revenue' },
        tooltip: {},
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['12-3', '12-4', '12-5', '12-6', '12-7', '12-8']
        },
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value} k'
            }
          }
        ],
        series: [
          {
            name: '',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20],
            smooth: true,
            itemStyle: {
              normal: {
                color: '#67c23a', //折点颜色
                lineStyle: {
                  color: '#67c23a' //折线颜色
                }
              }
            }
          }
        ]
      })
      window.onresize = function () {
        //自适应大小
        myChart.resize()
      }
    })
    let store = useStore()
    const username = computed(() => {
      return store.state.user.username
    })
    let imgUrl =
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_360_360%2Fa3%2Fb9%2F3b%2Fa3b93b276749f00014b2ac3fcaa2115a.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639730146&t=893da926912d982f53a58c21f3a1dadf'
    //复制
    const copyLink = () => {
      var clipboard = new Clipboard('.tag-read')
      clipboard.on('success', (e) => {
        ElMessage({ message: 'Copy success', type: 'success' })

        // 释放内存
        clipboard.destroy()
      })
      clipboard.on('error', (e) => {
        // 不支持复制
        ElMessage({ message: 'Copy Error', type: 'success' })
        // 释放内存
        clipboard.destroy()
      })
    }
    const goWithdraw = () => {
      console.log('go')
    }
    const goCashInHistory = () => {
      console.log('go')
    }
    const goWithdrawHistory = () => {
      console.log('go')
    }

    const options = [
      { label: 'Court Fee', value: '1' },
      { label: 'Cash In', value: '2' },
      { label: 'Cash Out', value: '3' },
      { label: 'Bill Payments', value: '4' }
    ]
    let selectValue = ref('1')

    let day = ref('1')
    const changeTime = (value) => {
      day.value = value
      console.log(day)
    }
    return {
      imgUrl,
      username,
      copyLink,
      goWithdraw,
      goCashInHistory,
      goWithdrawHistory,
      options,
      selectValue,
      day,
      changeTime
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
