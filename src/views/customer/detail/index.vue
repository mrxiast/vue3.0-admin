<template>
  <div class="container">
    <h2 class="page-title">Customer Detail</h2>
    <div class="top-box">
      <el-card>
        <div class="info-box">
          <div class="info-left">
            <img src="@/assets/logo.png" alt="" class="ava" />
            <div class="user-info">
              <div class="info-num">JAY</div>
              <div class="info-text">Register Date: Jan-01 2021 12:00:00</div>
            </div>
          </div>
          <div class="info-right">
            <div class="info-item">
              <div class="info-num">100000</div>
              <div class="info-text">Wallet Balance</div>
            </div>
            <div class="info-item">
              <div class="info-num">100000</div>
              <div class="info-text">Commission Earned</div>
            </div>
            <div class="info-item">
              <div class="info-num">100000</div>
              <div class="info-text">Invited Friends</div>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    <div class="content-box">
      <el-card>
        <div class="tabs">
          <div @click="chnangeTab('1')" :class="tabIndex === '1' ? 'tabs-item is-select' : 'tabs-item'">
            Basic Information
          </div>
          <div @click="chnangeTab('2')" :class="tabIndex === '2' ? 'tabs-item is-select' : 'tabs-item'">
            Address Book
          </div>
          <div @click="chnangeTab('3')" :class="tabIndex === '3' ? 'tabs-item is-select' : 'tabs-item'">
            Verified Information
          </div>
          <div @click="chnangeTab('4')" :class="tabIndex === '4' ? 'tabs-item is-select' : 'tabs-item'">
            Verified Files
          </div>
        </div>
        <div class="tab-content">
          <el-row v-show="tabIndex === '1'">
            <el-col :span="24">
              <div>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">User Name</div></el-col>
                  <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                  <el-col :span="4"><div class="col-title">E-mail</div></el-col>
                  <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">Gender</div></el-col>
                  <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                  <el-col :span="4"><div class="col-title">Transaction PIN</div></el-col>
                  <el-col :span="8">
                    <div class="col-content">
                      <div>* * * * * *</div>
                      <div style="margin-left: 10px">
                        <el-button type="primary" @click="sendEmail">Reset</el-button>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">Birthday</div></el-col>
                  <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                  <el-col :span="4"><div class="col-title">KYC Level</div></el-col>
                  <el-col :span="8">
                    <div class="col-content">
                      <div v-show="!showchangeKyc">
                        {{ userInfo.levelName }}
                        <span class="like-a" @click="changeKyc">change</span>
                      </div>
                      <div v-show="showchangeKyc">
                        <el-select v-model="levelObj" placeholder="Select">
                          <el-option
                            v-for="item in levelList"
                            :key="item.value"
                            :label="item.label"
                            :value="item"
                          ></el-option>
                        </el-select>
                        <span class="like-a" @click="changeKycCancel">cancel</span>
                        <span class="like-a" @click="changeKycSave">save</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">Mobile</div></el-col>
                  <el-col :span="8">
                    <div class="col-content">
                      <div v-show="!showChangeMobile">
                        {{ userInfo.mobile }}
                        <span class="like-a" @click="changeMobile">change</span>
                      </div>
                      <div v-show="showChangeMobile">
                        <el-input v-model="mobile" style="width: 100px" />
                        <span class="like-a" @click="changeMobileCancel">cancel</span>
                        <span class="like-a" @click="changeMobileSave">save</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="4"><div class="col-title">Customer Status</div></el-col>
                  <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">Referral Code</div></el-col>
                  <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                  <el-col :span="4"><div class="col-title">Account Level</div></el-col>
                  <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">Referrer</div></el-col>
                  <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                  <el-col :span="4"><div class="col-title">Registered Date</div></el-col>
                  <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
          <el-row v-show="tabIndex === '2'">
            <el-col :span="20">
              <el-row class="row-box">
                <el-col :span="4"><div class="col-title">Region</div></el-col>
                <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                <el-col :span="4"><div class="col-title">Province</div></el-col>
                <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
              </el-row>
              <el-row class="row-box">
                <el-col :span="4"><div class="col-title">City</div></el-col>
                <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                <el-col :span="4"><div class="col-title">Barangay</div></el-col>
                <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
              </el-row>
              <el-row class="row-box">
                <el-col :span="4"><div class="col-title">Postal code</div></el-col>
                <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                <el-col :span="4"><div class="col-title">Address</div></el-col>
                <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
              </el-row>
              <el-row class="row-box">
                <el-col :span="4"><div class="col-title">Address mark</div></el-col>
                <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
              </el-row>
            </el-col>
            <el-col :span="4" class="default-btn"><span style="cursor: pointer">Default</span></el-col>
          </el-row>
          <div v-show="tabIndex === '3'">
            <el-row class="row-box">
              <el-col :span="4"><div class="col-title">Name</div></el-col>
              <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
              <el-col :span="4"><div class="col-title">Civial Status</div></el-col>
              <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
            </el-row>
            <el-row class="row-box">
              <el-col :span="4"><div class="col-title">Birthdate</div></el-col>
              <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
              <el-col :span="4"><div class="col-title">Place of birth</div></el-col>
              <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
            </el-row>
            <el-row class="row-box">
              <el-col :span="4"><div class="col-title">Nationality</div></el-col>
              <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
              <el-col :span="4"><div class="col-title">Occupation</div></el-col>
              <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
            </el-row>
            <el-row class="row-box">
              <el-col :span="4"><div class="col-title">Source of fund</div></el-col>
              <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
              <el-col :span="4"><div class="col-title">Gender</div></el-col>
              <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
            </el-row>
            <el-row class="row-box">
              <el-col :span="4"><div class="col-title">Birthplace</div></el-col>
              <el-col :span="8"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
              <el-col :span="4"><div class="col-title"></div></el-col>
              <el-col :span="8"><div class="col-content"></div></el-col>
            </el-row>
          </div>
          <div v-show="tabIndex === '4'">
            <el-row class="row-box">
              <el-col :span="8"><div class="col-title">Government ID type</div></el-col>
              <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
            </el-row>
            <el-row class="row-box">
              <el-col :span="8"><div class="col-title">Government ID number</div></el-col>
              <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
            </el-row>
            <el-row class="row-box">
              <el-col :span="8"><div class="col-title">Date Issued</div></el-col>
              <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
            </el-row>
            <el-row class="row-box">
              <el-col :span="8"><div class="col-title">Expiration Date</div></el-col>
              <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
            </el-row>
            <el-row class="row-box">
              <el-col :span="8"><div class="col-title">Nationality</div></el-col>
              <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
            </el-row>
            <el-row class="row-box">
              <el-col :span="8"><div class="col-title">Place of birth</div></el-col>
              <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
            </el-row>
            <el-row class="row-box">
              <el-col :span="8"><div class="col-title">Address</div></el-col>
              <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
            </el-row>
            <el-row class="row-box">
              <el-col :span="8" class="col-title">File</el-col>
              <el-col :span="16" style="padding: 0 20px">
                <el-row class="row-box" style="margin-top: 5px">
                  <el-col :span="8" class="col-title"><div>ID card</div></el-col>
                  <el-col :span="16">
                    <div class="col-content">
                      <el-image
                        style="width: 100px; height: 100px"
                        :src="userInfo.img1"
                        fit="contain"
                        :preview-src-list="cardImgList"
                        :initial-index="1"
                      ></el-image>
                      <div class="icon-box">
                        <!-- <el-icon class="icon-style" @click="lookInfo(userInfo.img1)"><i-zoom-in /></el-icon> -->
                        <el-icon class="icon-style" @click="downFile"><i-download /></el-icon>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="8" class="col-title"><div>Sefie with ID</div></el-col>
                  <el-col :span="16">
                    <div class="col-content">
                      <el-image
                        style="width: 100px; height: 100px"
                        :src="userInfo.sefie"
                        fit="contain"
                        :preview-src-list="sefieList"
                        :initial-index="1"
                      ></el-image>
                      <div class="icon-box">
                        <!-- <el-icon class="icon-style" @click="lookInfo"><i-zoom-in /></el-icon> -->
                        <el-icon class="icon-style" @click="downFile"><i-download /></el-icon>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="8" class="col-title"><div>Video</div></el-col>
                  <el-col :span="16">
                    <div class="col-content">
                      <el-button type="primary" @click="lookVideo">Play Video</el-button>
                      <div class="icon-box">
                        <!-- <el-icon class="icon-style" @click="lookInfo"><i-zoom-in /></el-icon> -->
                        <el-icon class="icon-style" @click="downFile"><i-download /></el-icon>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="8" class="col-title"><div>Proof of legitmate transactions</div></el-col>
                  <el-col :span="16">
                    <div class="col-content">
                      <el-image
                        style="width: 100px; height: 100px"
                        :src="userInfo.proof"
                        fit="contain"
                        :preview-src-list="proofList"
                        :initial-index="1"
                      ></el-image>
                      <div class="icon-box">
                        <!-- <el-icon class="icon-style" @click="lookInfo"><i-zoom-in /></el-icon> -->
                        <el-icon class="icon-style" @click="downFile"><i-download /></el-icon>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-card>
    </div>
  </div>
  <el-dialog v-model="showVideoDia" @close="closeVideoDia">
    <video
      :src="videoUrl"
      :controls="videoOptions.controls"
      class="video-js vjs-big-play-centered vjs-fluid"
      webkit-playsinline="true"
      playsinline="true"
      x-webkit-airplay="allow"
      x5-playsinline
      style="width: 100%"
      @play="onPlayerPlay"
      @pause="onPlayerPause"
      @seeking="seeking"
      autoplay="autoplay"
      ref="video"
    ></video>
  </el-dialog>
</template>
<script>
import { defineComponent, reactive, toRefs, onMounted, ref, nextTick } from 'vue'
import { ElMessage } from 'element-plus'

export default defineComponent({
  setup() {
    const state = reactive({
      tableList: [],
      transactionId: '',
      tabIndex: '1',
      levelList: [
        {
          label: 'Basic',
          value: 'basic'
        },
        {
          label: 'Legitimate',
          value: 'legitimate'
        },
        {
          label: 'Established',
          value: 'established'
        },
        {
          label: 'Established with special approval',
          value: 'established with special approval'
        }
      ],
      userInfo: {
        levelName: 'Basic',
        levelId: 'basic',
        mobile: '9998877445566',
        img1: 'https://pics0.baidu.com/feed/203fb80e7bec54e71b38c8e3e2318a554ec26a01.jpeg?token=3765f086809a5413805f17fbcf789b73&s=2694546C4085294B038818030300E0D8',
        sefie:
          'https://pics0.baidu.com/feed/203fb80e7bec54e71b38c8e3e2318a554ec26a01.jpeg?token=3765f086809a5413805f17fbcf789b73&s=2694546C4085294B038818030300E0D8',
        proof:
          'https://pics0.baidu.com/feed/203fb80e7bec54e71b38c8e3e2318a554ec26a01.jpeg?token=3765f086809a5413805f17fbcf789b73&s=2694546C4085294B038818030300E0D8'
      },
      cardImgList: [
        'https://pics0.baidu.com/feed/203fb80e7bec54e71b38c8e3e2318a554ec26a01.jpeg?token=3765f086809a5413805f17fbcf789b73&s=2694546C4085294B038818030300E0D8'
      ],
      sefieList: [
        'https://pics0.baidu.com/feed/203fb80e7bec54e71b38c8e3e2318a554ec26a01.jpeg?token=3765f086809a5413805f17fbcf789b73&s=2694546C4085294B038818030300E0D8'
      ],
      proofList: [
        'https://pics0.baidu.com/feed/203fb80e7bec54e71b38c8e3e2318a554ec26a01.jpeg?token=3765f086809a5413805f17fbcf789b73&s=2694546C4085294B038818030300E0D8'
      ],
      levelObj: null,
      mobile: '',
      showchangeKyc: false,
      showChangeMobile: false,
      srcList: [], //预览的图片地址
      showVideoDia: false,
      videoOptions: {
        controls: true
      },
      videoUrl: 'https://video.yinyuetai.com/6bd60be8b76e4430a2767f89d51dd52c.mp4',
      player: null,
      playTime: '',
      seekTime: '',
      current: ''
    })
    const downFile = () => {}
    const chnangeTab = (val) => {
      state.tabIndex = val
    }
    const sendEmail = () => {
      ElMessage.success('send E-mail successfully!')
    }
    const changeKyc = () => {
      state.showchangeKyc = true
    }
    const changeKycCancel = () => {
      state.showchangeKyc = false
      state.levelObj = null
    }
    const changeKycSave = () => {
      state.userInfo.levelId = state.levelObj.value
      state.userInfo.levelName = state.levelObj.label
      ElMessage.success('Successfully!')
      state.showchangeKyc = false
    }
    const changeMobileCancel = () => {
      state.showChangeMobile = false
      state.mobile = ''
    }
    const changeMobileSave = () => {
      state.userInfo.mobile = state.mobile
      state.showChangeMobile = false
      ElMessage.success('Successfully!')
    }

    const changeMobile = () => {
      state.showChangeMobile = true
    }
    const lookInfo = () => {}
    onMounted(() => {})
    const lookVideo = async () => {
      state.showVideoDia = true
      await nextTick()
      initVideo()
    }
    let video = ref(null)
    const initVideo = () => {
      //原生初始化视频方法
      let myVideo = video.value
      state.player = myVideo
      //ontimeupdate
      myVideo.ontimeupdate = function () {
        myFunction()
      }

      function myFunction() {
        let playTime = myVideo.currentTime
        setTimeout(function () {
          localStorage.setItem('cacheTime', playTime)
        }, 500)
        let time = localStorage.getItem('cacheTime')
        // 当前播放位置发生变化时触发。
        if (playTime - Number(time) > 2) {
          myVideo.currentTime = Number(time)
        }
      }

      // 播放回调
      function onPlayerPlay(player) {
        // this.globalSetting = true
        console.log('player play!', player)
        // document.getElementsByClassName("vjs-control-bar").style.display = "block";
        // document.getElementsByClassName("vjs-control-bar").style.display = "block";
      }

      // 暂停回调
      function onPlayerPause(player) {
        // this.globalSetting.controls = false;
        // console.log("player pause!", player);
        // var video = document.getElementById("video");
        // video.controls=false;
        // document.getElementsByClassName("vjs-control-bar").style.display = "none";
      }
    }

    const closeVideoDia = () => {
      localStorage.setItem('cacheTime', 0)
      // if (state.player) {
      //   state.player.dispose()
      // }
    }

    return {
      ...toRefs(state),
      downFile,
      chnangeTab,
      sendEmail,
      changeKyc,
      changeKycCancel,
      changeKycSave,
      changeMobile,
      changeMobileSave,
      changeMobileCancel,
      lookInfo,
      video,
      lookVideo,
      closeVideoDia
    }
  }
})
</script>

<style scoped src="./index.scss"></style>
