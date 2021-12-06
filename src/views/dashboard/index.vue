<template>
  <div class="container">
    <!-- <my-btn>
      <template #header>name-slot</template>
      slot
    </my-btn> -->
    <div class="top-box">
      <el-card>
        <div class="box-item">
          <img class="logo" src="@/assets/logo.png" alt="" />
          <div class="content">
            <div>Welcome on Board!</div>
            <div class="name">Test Name</div>
            <div>Boarding time: Jan-01 2021 12:00:00</div>
          </div>
        </div>
      </el-card>
      <el-card>
        <div class="box-item">
          <div class="content-column">
            <div class="column">
              <div class="column-title">Total Asset</div>
              <div>10000</div>
              <div>PHP</div>
            </div>
            <div class="column">
              <div class="column-title">Total Pre-deposit</div>
              <div>10000</div>
              <div>PHP</div>
            </div>
            <div class="column">
              <div class="column-title">Pending Amount</div>
              <div>10000</div>
              <div>PHP</div>
            </div>
          </div>
        </div>
      </el-card>
      <el-card>
        <div class="box-item">
          <div class="content-column">
            <div class="column">
              <div class="column-title">Registered Customers</div>
              <div>10000</div>
              <div>PHP</div>
            </div>
            <div class="column">
              <div class="column-title">Merchant No</div>
              <div>10000</div>
              <div>PHP</div>
            </div>
            <div class="column">
              <div class="column-title">Agent No</div>
              <div>10000</div>
              <div>PHP</div>
            </div>
            <div class="column">
              <div class="column-title">Branch No</div>
              <div>10000</div>
              <div>PHP</div>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    <div class="table-box">
      <el-card>
        <div class="table-title">
          <span class="title">Asset Overview</span>
          <span class="update-title">Last update：</span>
          <span>Jan-02 2021 12:00:00</span>
        </div>
        <el-table v-loading="listLoading" :data="tableList" element-loading-text="Loading" border highlight-current-row>
          <el-table-column label="Asset Composition" align="center" width="150px">
            <template #default="scope">
              <el-link type="primary">
                <router-link to="/branch/detail">{{ scope.row.branchId }}</router-link>
              </el-link>
            </template>
          </el-table-column>
          <el-table-column prop="Cash In" label="Branch Name" align="center" />
          <el-table-column prop="Cash Out" label="Mobile No." align="center" />
          <el-table-column prop="Revenue" label="Agent ID" align="center" />
          <el-table-column label="Wallet Balance" align="center"></el-table-column>
        </el-table>
        <Pagination :total="total" :page="pageNum" :limit="pageSize" @pagination="changePageFetching" />
      </el-card>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { reactive, toRefs, onMounted, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import Pagination from '@/views/components/pagination'

export default defineComponent({
  components: { Pagination },
  setup() {
    const state = reactive({
      pageNum: 1,
      pageSize: 10,
      total: 1000,
      listLoading: false,
      tableList: [
        {
          id: '1',
          time: 'Jan-01 2021 12:00:00',
          subject: 'add new cooperaration abc',
          contents: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
          status: '2'
        }
      ],
      activeNames: [],
      userType: 'merchant',
      time: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    })
    const $router = useRouter()
    const go = () => {}
    //打开了哪个内容
    const handleChange = (val) => {
      console.log(val)
    }
    const changePageFetching = () => {}
    return {
      ...toRefs(state),
      go,
      handleChange,
      changePageFetching
    }
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
