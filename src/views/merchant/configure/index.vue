<template>
  <div class="container">
    <h2 class="page-title">Configure</h2>
    <div class="card-box">
      <el-card>
        <div class="item-title">MDR</div>
        <el-table :data="mdrList" element-loading-text="Loading" border highlight-current-row>
          <el-table-column prop="name" label="Minimum" align="center" />
          <el-table-column prop="mobile" label="Maximum" align="center" />
          <el-table-column prop="agentId" label="Percent(%)" align="center" />
          <el-table-column align="center" label="Fixed(PHP)"></el-table-column>
          <el-table-column prop="createdAt" label="MDR" align="center" />
        </el-table>
        <div class="edit-box"><span>Edit</span></div>
      </el-card>
    </div>
    <div class="card-box">
      <el-card>
        <div class="item-title">Account limits</div>
        <el-table :data="mdrList" element-loading-text="Loading" border highlight-current-row>
          <el-table-column prop="Cash In" label="Minimum" align="center" />
          <el-table-column prop="Cash Out" label="Maximum" align="center" />
        </el-table>
        <div class="edit-box"><span>Edit</span></div>
      </el-card>
    </div>
    <div class="card-box">
      <el-card>
        <div class="item-title">Service configure</div>
        <div class="tab-box">
          <div @click="changeTab('1')" :class="tabIndex === '1' ? 'tab-item is-select' : 'tab-item'">E-wallet</div>
          <div @click="changeTab('2')" :class="tabIndex === '2' ? 'tab-item is-select' : 'tab-item'">Cash in</div>
          <div @click="changeTab('3')" :class="tabIndex === '3' ? 'tab-item is-select' : 'tab-item'">Cash out</div>
          <div @click="changeTab('4')" :class="tabIndex === '4' ? 'tab-item is-select' : 'tab-item'">Bill payments</div>
        </div>
        <el-card v-if="tabIndex === '1'">
          <div style="margin-bottom: 30px">Service configure</div>
          <div>
            <el-row>
              <el-col :span="8">
                <el-row>
                  <el-col :span="12">Scan to pay</el-col>
                  <el-col :span="12">
                    <el-switch v-model="walletPermission.scanToPay" />
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="12">My QRy</el-col>
                  <el-col :span="12">
                    <el-switch v-model="walletPermission.scanToPay" />
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="12">Transfer</el-col>
                  <el-col :span="12">
                    <el-switch v-model="walletPermission.scanToPay" />
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-card>
        <el-card v-if="tabIndex === '2'">
          <div style="margin-bottom: 30px">Please configure cash in methods for merchant</div>
          <div>
            <el-row>
              <el-col :span="8" class="switch-box">
                <el-row>
                  <el-col :span="12">OTC Bank</el-col>
                  <el-col :span="12">
                    <el-switch v-model="walletPermission.scanToPay" />
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="12">OTC Non Bank</el-col>
                  <el-col :span="12">
                    <el-switch v-model="walletPermission.scanToPay" />
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="12">ATM</el-col>
                  <el-col :span="12">
                    <el-switch v-model="walletPermission.scanToPay" />
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="12">Mobile</el-col>
                  <el-col :span="12">
                    <el-switch v-model="walletPermission.scanToPay" />
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-card>
        <el-card v-if="tabIndex === '3'">
          <div style="margin-bottom: 30px">Please configure cash out methods for merchant</div>
          <div>
            <el-row>
              <el-col :span="8" class="switch-box">
                <el-row>
                  <el-col :span="12">OTC Bank</el-col>
                  <el-col :span="12">
                    <el-switch v-model="walletPermission.scanToPay" />
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="12">OTC Non Bank</el-col>
                  <el-col :span="12">
                    <el-switch v-model="walletPermission.scanToPay" />
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="12">ATM</el-col>
                  <el-col :span="12">
                    <el-switch v-model="walletPermission.scanToPay" />
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="12">Mobile</el-col>
                  <el-col :span="12">
                    <el-switch v-model="walletPermission.scanToPay" />
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-card>
        <el-card v-if="tabIndex === '4'">
          <div style="margin-bottom: 30px">Please configure Bill payments for merchant</div>
          <div>
            <el-row>
              <el-col :span="8" class="switch-box" v-for="(item, index) in billList" :key="index">
                <el-row>
                  <el-col :span="12">{{ item.name }}</el-col>
                  <el-col :span="12">
                    <el-switch v-model="item.status" />
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-card>
    </div>
    <div class="card-box">
      <el-card>
        <div class="item-title">Settlement date</div>
        <el-select v-model="settlement" placeholder="Select">
          <el-option
            v-for="item in settlementList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-card>
    </div>
    <div class="card-box">
      <el-card>
        <div class="item-title">API Configure</div>
      </el-card>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, toRefs, reactive } from 'vue'

export default defineComponent({
  setup() {
    let state = reactive({
      tabIndex: '1',
      walletPermission: {
        scpanToPay: false
      },
      billList: [
        { name: 'Water', status: true },
        { name: 'Electricity', status: false },
        { name: 'Water', status: true },
        { name: 'Electricity', status: false },
        { name: 'Water', status: true },
        { name: 'Electricity', status: false },
        { name: 'Water', status: true },
        { name: 'Electricity', status: false },
        { name: 'Water', status: true },
        { name: 'Electricity', status: false },
        { name: 'Water', status: true },
        { name: 'Electricity', status: false }
      ],
      settlementList: [
        { value: '1', label: 'T+1' },
        { value: '2', label: 'T+7' },
        { value: '3', label: 'Real Time' }
      ]
    })
    const changeTab = (val) => {
      state.tabIndex = val
    }
    return {
      ...toRefs(state),
      changeTab
    }
  }
})
</script>

<style scoped src="./index.scss"></style>
