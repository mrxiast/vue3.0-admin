<template>
  <div class="container">
    <h2 class="page-title">Merchant Management</h2>
    <div class="top-box">
      <el-card>
        <div class="info-box">
          <div class="info-left">
            <img src="@/assets/logo.png" alt="" class="ava" />
            <div class="user-info">
              <div class="info-num">Merchant Name: JAY</div>
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
              <div class="info-text">Pre-funded</div>
            </div>
            <div class="info-item">
              <div class="info-num">100000</div>
              <div class="info-text">Commission</div>
            </div>
            <div class="info-item">
              <div class="info-num">100000</div>
              <div class="info-text">Branch</div>
            </div>
            <div class="info-item">
              <div class="info-num">100000</div>
              <div class="info-text">Referral</div>
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
            ID verification
          </div>
          <div @click="chnangeTab('3')" :class="tabIndex === '3' ? 'tabs-item is-select' : 'tabs-item'">
            Bank details
          </div>
          <div @click="chnangeTab('4')" :class="tabIndex === '4' ? 'tabs-item is-select' : 'tabs-item'">Files</div>
          <div @click="chnangeTab('5')" :class="tabIndex === '5' ? 'tabs-item is-select' : 'tabs-item'">
            Merchant QR
          </div>
        </div>
        <div class="tab-content">
          <el-row v-if="tabIndex === '1'">
            <el-col :span="24">
              <div>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">Merchangt Qualification</div></el-col>
                  <el-col :span="20"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">Merchant Industry</div></el-col>
                  <el-col :span="20"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">MCC</div></el-col>
                  <el-col :span="20"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">Business Discription</div></el-col>
                  <el-col :span="20"><div class="col-content">123456</div></el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">Referral</div></el-col>
                  <el-col :span="20"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">Mobile Number</div></el-col>
                  <el-col :span="20"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">E-mail Address</div></el-col>
                  <el-col :span="20"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
          <el-row v-if="tabIndex === '2'">
            <el-col :span="24">
              <div>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">Owner Name</div></el-col>
                  <el-col :span="20"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">ID Type</div></el-col>
                  <el-col :span="20"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">ID Number</div></el-col>
                  <el-col :span="20"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">Expiration Date</div></el-col>
                  <el-col :span="20"><div class="col-content">123456</div></el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">Address</div></el-col>
                  <el-col :span="20"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">ID picture</div></el-col>
                  <el-col :span="20"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">Selfie with ID</div></el-col>
                  <el-col :span="20"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
          <el-row v-if="tabIndex === '3'">
            <el-col :span="24">
              <div>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">Bank Name</div></el-col>
                  <el-col :span="20"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">Bank Branch</div></el-col>
                  <el-col :span="20"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">Account Name</div></el-col>
                  <el-col :span="20"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">Account Number</div></el-col>
                  <el-col :span="20"><div class="col-content">123456</div></el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4"><div class="col-title">Ban service fee</div></el-col>
                  <el-col :span="20"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
          <el-row v-if="tabIndex === '4'">
            <el-col :span="24">
              <div>
                <el-row class="row-box">
                  <el-col :span="4" class="other-title">Duly accomplished and signed Merchant Application Form</el-col>
                  <el-col :span="8">
                    <div class="col-content">
                      <el-image
                        style="width: 100px; height: 100px"
                        :src="userInfo.test"
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
                  <el-col :span="4" class="other-title">
                    Notarized Board Resolution or Secretary’s Certificate or Partnership Resolution authorizing the
                    signatory to enter into a Merchant Agreement with Fortune Pay on behalf of the company (must contain
                    specimen signatures of the authorized signatories)
                  </el-col>
                  <el-col :span="8">
                    <div class="col-content">
                      <el-image
                        style="width: 100px; height: 100px"
                        :src="userInfo.test"
                        fit="contain"
                        :preview-src-list="sefieList"
                        :initial-index="1"
                      ></el-image>
                      <div class="icon-box">
                        <el-icon class="icon-style" @click="downFile"><i-download /></el-icon>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4" class="other-title">Duly signed Merchant Agreement</el-col>
                  <el-col :span="8">
                    <div class="col-content">
                      <el-image
                        style="width: 100px; height: 100px"
                        :src="userInfo.test"
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
                  <el-col :span="4" class="other-title">
                    Two (2) valid government ID’s for authorized signatories
                  </el-col>
                  <el-col :span="8">
                    <div class="col-content">
                      <el-image
                        style="width: 100px; height: 100px"
                        :src="userInfo.test"
                        fit="contain"
                        :preview-src-list="sefieList"
                        :initial-index="1"
                      ></el-image>
                      <div class="icon-box">
                        <el-icon class="icon-style" @click="downFile"><i-download /></el-icon>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4" class="other-title">Duly signed Fortune Pay Proposal</el-col>
                  <el-col :span="8">
                    <div class="col-content">
                      <el-image
                        style="width: 100px; height: 100px"
                        :src="userInfo.test"
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
                  <el-col :span="4" class="other-title">Settlement Bank Account Details</el-col>
                  <el-col :span="8">
                    <div class="col-content">
                      <el-image
                        style="width: 100px; height: 100px"
                        :src="userInfo.test"
                        fit="contain"
                        :preview-src-list="sefieList"
                        :initial-index="1"
                      ></el-image>
                      <div class="icon-box">
                        <el-icon class="icon-style" @click="downFile"><i-download /></el-icon>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4" class="other-title">Non- Disclosure Agreement</el-col>
                  <el-col :span="8">
                    <div class="col-content">
                      <el-image
                        style="width: 100px; height: 100px"
                        :src="userInfo.test"
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
                  <el-col :span="4" class="other-title">You have other files? Please upload here !</el-col>
                  <el-col :span="8">
                    <div class="col-content">
                      <el-image
                        style="width: 100px; height: 100px"
                        :src="userInfo.test"
                        fit="contain"
                        :preview-src-list="sefieList"
                        :initial-index="1"
                      ></el-image>
                      <div class="icon-box">
                        <el-icon class="icon-style" @click="downFile"><i-download /></el-icon>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4" class="other-title">Upload signed form</el-col>
                  <el-col :span="8">
                    <div class="col-content">
                      <el-image
                        style="width: 100px; height: 100px"
                        :src="userInfo.test"
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
                  <el-col :span="4" class="other-title">LOI White-Listing (for integration request)</el-col>
                  <el-col :span="8">
                    <div class="col-content">
                      <el-image
                        style="width: 100px; height: 100px"
                        :src="userInfo.test"
                        fit="contain"
                        :preview-src-list="sefieList"
                        :initial-index="1"
                      ></el-image>
                      <div class="icon-box">
                        <el-icon class="icon-style" @click="downFile"><i-download /></el-icon>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4" class="other-title">DTI Business Registration</el-col>
                  <el-col :span="8">
                    <div class="col-content">
                      <el-image
                        style="width: 100px; height: 100px"
                        :src="userInfo.test"
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
                  <el-col :span="4" class="other-title">Business Permit</el-col>
                  <el-col :span="8">
                    <div class="col-content">
                      <el-image
                        style="width: 100px; height: 100px"
                        :src="userInfo.test"
                        fit="contain"
                        :preview-src-list="sefieList"
                        :initial-index="1"
                      ></el-image>
                      <div class="icon-box">
                        <el-icon class="icon-style" @click="downFile"><i-download /></el-icon>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4" class="other-title">BIR Certificate of Registration (COR)</el-col>
                  <el-col :span="8">
                    <div class="col-content">
                      <el-image
                        style="width: 100px; height: 100px"
                        :src="userInfo.test"
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
                  <el-col :span="4" class="other-title">SEC Certificate of Registration</el-col>
                  <el-col :span="8">
                    <div class="col-content">
                      <el-image
                        style="width: 100px; height: 100px"
                        :src="userInfo.test"
                        fit="contain"
                        :preview-src-list="sefieList"
                        :initial-index="1"
                      ></el-image>
                      <div class="icon-box">
                        <el-icon class="icon-style" @click="downFile"><i-download /></el-icon>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="row-box">
                  <el-col :span="4" class="other-title">
                    Articles of Incorporation or Partnership Agreement & By-Laws
                  </el-col>
                  <el-col :span="8">
                    <div class="col-content">
                      <el-image
                        style="width: 100px; height: 100px"
                        :src="userInfo.test"
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
                  <el-col :span="4" class="other-title"></el-col>
                  <el-col :span="8">
                    <div class="col-content"></div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
          <el-row v-if="tabIndex === '5'">
            <el-col :span="24" style="display: flex; justify-content: center">
              <div class="qr-box">
                <div>
                  <img src="@/assets/logo.png" alt="" />
                </div>

                <div>Merchant Name：{{ userInfo.name }}</div>
                <div>
                  <el-icon style="cursor: pointer" size="50" @click="downFile"><i-download /></el-icon>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    let state = reactive({
      tabIndex: '1',
      userInfo: {
        name: 'resr',
        test: 'https://pics0.baidu.com/feed/203fb80e7bec54e71b38c8e3e2318a554ec26a01.jpeg?token=3765f086809a5413805f17fbcf789b73&s=2694546C4085294B038818030300E0D8'
      }
    })
    const chnangeTab = (value) => {
      state.tabIndex = value
    }
    return {
      ...toRefs(state),
      chnangeTab
    }
  }
})
</script>

<style scoped src="./index.scss">
</style>
