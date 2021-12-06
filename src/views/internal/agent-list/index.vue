<template>
  <div class="base-container">
    <div class="tab-box">
      <el-tabs v-model="tabName" @tab-click="checkTab">
        <el-tab-pane label="Master Agents" name="master">
          <div class="tab-item">
            <div class="search-box">
              <div class="search-item">
                <div class="search-title">Search Mobile Number</div>
                <div>
                  <el-input v-model="mobileNum" placeholder="Please input" size="medium" />
                </div>
              </div>
              <div class="search-item">
                <div class="search-title">Select type</div>
                <div>
                  <el-select v-model="typeValue" placeholder="Select" size="medium">
                    <el-option
                      v-for="item in typeList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </div>
              <div class="search-item">
                <div class="search-title">Select Status</div>
                <div>
                  <el-select v-model="statusValue" placeholder="Select" size="medium">
                    <el-option
                      v-for="item in statusList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </div>
              <div class="btn-style">
                <div style="height: 25px"></div>
                <el-button type="primary" @click="search" class="btn">Search</el-button>
              </div>
            </div>
            <div class="list">
              <el-table
                v-loading="listLoading"
                :data="dataList"
                element-loading-text="Loading"
                border
                highlight-current-row
              >
                <el-table-column prop="username" label="Agent ID" align="center" />
                <el-table-column prop="firstName" label="Agent Name" align="center" />
                <el-table-column prop="lastName" label="Agent Type" align="center" />

                <el-table-column prop="mobile" label="Mobile Number" align="center" />
                <el-table-column prop="email" label="E-mail Address" align="center" />
                <el-table-column prop="email" label="Add Date" align="center" />
                <el-table-column prop="email" label="Operational Status" align="center" />

                <el-table-column label="Actions" align="center" width="150" class="small-padding fixed-width">
                  <template #default="scope">
                    <el-dropdown trigger="click">
                      <span class="el-dropdown-link es-style" @click="setItem(scope.row)">···</span>
                      <template #dropdown>
                        <el-dropdown-menu>
                          <el-dropdown-item class="dropdown-box" @click="blockPartner(scope.row)">
                            <el-icon><i-warning /></el-icon>
                            {{ scope.row.status == '1' ? 'Block' : 'Active' }} This Patrner
                          </el-dropdown-item>
                          <el-dropdown-item class="dropdown-box" @click="cashInPartner">
                            <el-icon><i-scale-to-original /></el-icon>
                            Cash In For This Partner
                          </el-dropdown-item>
                          <el-dropdown-item class="dropdown-box" @click="cashInHistory">
                            <el-icon><i-printer /></el-icon>
                            Cash In History
                          </el-dropdown-item>
                          <el-dropdown-item class="dropdown-box" @click="addBranch">
                            <el-icon><i-circle-plus /></el-icon>
                            Add Branch
                          </el-dropdown-item>
                          <el-dropdown-item class="dropdown-box" @click="withHistory">
                            <el-icon><i-tickets /></el-icon>
                            Withdraw History
                          </el-dropdown-item>
                          <el-dropdown-item class="dropdown-box" @click="accounts">
                            <el-icon><i-avatar /></el-icon>
                            Accounts
                          </el-dropdown-item>
                          <el-dropdown-item class="dropdown-box" @click="apiConfig">
                            <el-icon><i-tools /></el-icon>
                            API Configure
                          </el-dropdown-item>
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                  </template>
                </el-table-column>
              </el-table>
              <pagination
                v-show="total > 0"
                :total="total"
                :page="pageNum"
                :limit="pageSize"
                @pagination="changePage"
              />
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Sub Agents" name="sub">
          <div class="tab-item">
            <div class="search-box">
              <div class="search-item">
                <div class="search-title">Master Agent</div>
                <div>
                  <el-input v-model="masterAgentValue" placeholder="Please input" size="medium" />
                </div>
              </div>
              <div class="search-item">
                <div class="search-title">Search Mobile Number</div>
                <div>
                  <el-input v-model="mobileNum" placeholder="Please input" size="medium" />
                </div>
              </div>
              <div class="search-item">
                <div class="search-title">Select Status</div>
                <div>
                  <el-select v-model="subStatus" placeholder="Select" size="medium">
                    <el-option
                      v-for="item in subStatusList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </div>
              <div class="btn-style">
                <div style="height: 25px"></div>
                <el-button type="primary" @click="search" class="btn">Search</el-button>
              </div>
            </div>
            <div class="list">
              <el-table
                v-loading="listLoading"
                :data="dataList"
                element-loading-text="Loading"
                border
                highlight-current-row
              >
                <el-table-column prop="username" label="Agent ID" align="center" />
                <el-table-column prop="firstName" label="Agent Name" align="center" />
                <el-table-column prop="lastName" label="Master Agent" align="center" />
                <el-table-column prop="mobile" label="Agent Mobile" align="center" />
                <el-table-column prop="email" label="Agent E-mail" align="center" />
                <el-table-column prop="email" label="Status" align="center" />
                <el-table-column prop="email" label="MA Commission" align="center" />
                <el-table-column label="Actions" align="center" width="150" class="small-padding fixed-width">
                  <template #default="scope">
                    <el-dropdown trigger="click">
                      <span class="el-dropdown-link es-style" @click="setItem(scope.row)">···</span>
                      <template #dropdown>
                        <el-dropdown-menu>
                          <el-dropdown-item class="dropdown-box" @click="blockAgent(scope.row)">
                            <el-icon><i-warning /></el-icon>
                            {{ scope.row.status == '1' ? 'Block' : 'Active' }} This Agent
                          </el-dropdown-item>
                          <el-dropdown-item class="dropdown-box" @click="upgrade">
                            <el-icon><i-edit /></el-icon>
                            Upgrade to MA
                          </el-dropdown-item>
                          <el-dropdown-item class="dropdown-box" @click="cashInForAgent">
                            <el-icon><i-printer /></el-icon>
                            Cash In For Agent
                          </el-dropdown-item>
                          <el-dropdown-item class="dropdown-box" @click="cashInAgentHistory">
                            <el-icon><i-printer /></el-icon>
                            Cash In History
                          </el-dropdown-item>
                          <el-dropdown-item class="dropdown-box" @click="addBranch">
                            <el-icon><i-circle-plus /></el-icon>
                            Add Branch
                          </el-dropdown-item>
                          <el-dropdown-item class="dropdown-box" @click="withHistory">
                            <el-icon><i-tickets /></el-icon>
                            Withdraw History
                          </el-dropdown-item>
                          <el-dropdown-item class="dropdown-box" @click="accounts">
                            <el-icon><i-avatar /></el-icon>
                            Accounts
                          </el-dropdown-item>
                          <el-dropdown-item class="dropdown-box" @click="apiConfig">
                            <el-icon><i-tools /></el-icon>
                            API Configure
                          </el-dropdown-item>
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                  </template>
                </el-table-column>
              </el-table>
              <pagination
                v-show="total > 0"
                :total="total"
                :page="pageNum"
                :limit="pageSize"
                @pagination="changePage"
              />
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref, reactive } from 'vue'

export default {
  name: 'agent-list',
  setup() {
    onMounted(() => {})

    let store = useStore()
    const username = computed(() => {
      return store.state.user.username
    })

    const addNewItem = () => {}

    let mobileNum = ref('')
    let listLoading = ref(false)
    let dataList = reactive([
      {
        username: '123',
        status: '1'
      }
    ])
    let total = ref(0)
    let pageNum = ref(1)
    let pageSize = ref(10)
    let tabName = ref('master')
    const checkTab = (tab) => {
      mobileNum.value = ''
      subStatus.value = '1'
      typeValue.value = ''
      statusValue.value = ''
      masterAgentValue.value = ''
      pageNum.value = 1
      total.value = 0
    }
    const search = () => {
      pageNum.value = 1
      if (tabName.value === 'master') {
      } else {
      }
    }
    const getList = () => {
      let params = {
        page: this.pageNum,
        size: this.pageSize
      }
    }
    let typeList = [
      { value: '1', label: 'type1' },
      { value: '2', label: 'type2' }
    ]
    let statusList = [
      { value: '1', label: 'status1' },
      { value: '2', label: 'status2' }
    ]
    let statusValue = ref('')
    let typeValue = ref('')

    let currentItem = reactive({})
    const setItem = (item) => {
      currentItem = item
    }

    const blockPartner = (item) => {
      ElMessageBox.confirm(`Are you sure to ${item.status === '1' ? 'block' : 'active'} this partner?`, 'Warning', {
        confirmButtonText: `${item.status === '1' ? 'Block it' : 'Active it'}`,
        cancelButtonText: 'Cancel',
        type: 'warning'
      })
        .then(() => {
          getList()
          // ElMessage({
          //   type: 'success',
          //   message: 'Delete completed'
          // })
        })
        .catch(() => {})
    }
    const cashInPartner = () => {}
    const cashInHistory = () => {}
    const addBranch = () => {}
    const withHistory = () => {}
    const accounts = () => {}
    const apiConfig = () => {}
    //suv-Agents
    let masterAgentValue = ref('')
    let subStatus = ref('1')
    let subStatusList = reactive([
      { label: 'Approved', value: '1' },
      { label: 'Pending', value: '2' },
      { label: 'Rejected', value: '3' }
    ])

    const changePage = () => {}
    const blockAgent = (item) => {
      ElMessageBox.confirm(`Are you sure to ${item.status === '1' ? 'block' : 'active'} this agent?`, 'Warning', {
        confirmButtonText: `${item.status === '1' ? 'Block it' : 'Active it'}`,
        cancelButtonText: 'Cancel',
        type: 'warning'
      })
        .then(() => {
          getList()
          // ElMessage({
          //   type: 'success',
          //   message: 'Delete completed'
          // })
        })
        .catch(() => {})
    }
    let subLoading = ref(false)
    const upgrade = () => {
      ElMessageBox.confirm('Upgrade to Master Agent?', 'Warning', {
        confirmButtonText: 'Sure',
        cancelButtonText: 'Cancel',
        type: 'warning'
      })
        .then(() => {
          getList()
          // ElMessage({
          //   type: 'success',
          //   message: 'Delete completed'
          // })
        })
        .catch(() => {})
    }
    const cashInForAgent = () => {}
    const cashInAgentHistory = () => {}

    return {
      tabName,
      username,
      checkTab,
      addNewItem,
      search,
      pageNum,
      pageSize,
      total,
      mobileNum,
      getList,
      typeList,
      statusList,
      statusValue,
      typeValue,
      dataList,
      listLoading,
      setItem,
      currentItem,
      blockPartner,
      cashInPartner,
      cashInHistory,
      addBranch,
      withHistory,
      accounts,
      apiConfig,
      masterAgentValue,
      changePage,
      subStatusList,
      subStatus,
      blockAgent,
      upgrade,
      cashInForAgent,
      cashInAgentHistory
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
