<template>
  <div class="container-box">
    <h2 class="title">Notice configure</h2>
    <el-card>
      <div class="card-box">
        <div class="top-box">
          <div class="top-left">
            <span @click="changeShelves('1')" :class="shelvesValue === '1' ? 'isSelect' : ''">On shelves</span>
            <span @click="changeShelves('2')" :class="shelvesValue === '2' ? 'isSelect' : ''">Off shelves</span>
          </div>
          <el-button type="primary" @click="addNew" class="btn">Add new</el-button>
        </div>
        <div class="notice-box">
          <el-card>
            <div class="notice-item">
              <div class="notice-left">
                <div>
                  Subject:
                  <span class="notice-title">Cooperated with BPI to provide xxxx payments</span>
                </div>
                <div>Jan 01 2021 12:00:00</div>
              </div>
              <div class="notice-right">
                <el-button type="primary" @click="edit" class="btn">Edit</el-button>
                <el-button type="danger" @click="close" class="btn">Close</el-button>
              </div>
            </div>
          </el-card>
        </div>
        <div class="pagination-box">
          <el-pagination
            background
            v-model:currentPage="pageNum"
            :page-size="pageSize"
            layout="prev, pager, next, jumper"
            :total="total"
            @current-change="changePage"
          ></el-pagination>
        </div>
      </div>
    </el-card>
    <el-dialog v-model="showDia" title="Notice" :close-on-click-modal="false">
      <div>
        <div class="form-item">
          <div class="form-label">Enter subject</div>
          <div>
            <el-input
              v-model="subject"
              maxlength="100"
              placeholder="Please input"
              show-word-limit
              type="text"
              size="medium"
            ></el-input>
          </div>
          <div class="form-label">Contents</div>
          <div>
            <el-input
              v-model="content"
              placeholder="Please input"
              show-word-limit
              type="textarea"
              size="medium"
              :autosize="{ minRows: 10 }"
            ></el-input>
          </div>
        </div>
      </div>
      <div class="confirm-btn">
        <el-button type="primary" @click="confirm" :loading="isConfirmLoading">Confirm</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref, reactive, toRefs } from 'vue'
export default {
  name: 'notice',
  setup() {
    let state = reactive({
      shelvesValue: '1',
      pageNum: 1,
      pageSize: 10,
      total: 0,
      showDia: false,
      subject: '',
      content: '',
      isConfirmLoading: false
    })
    const addNew = () => {
      state.showDia = true
    }
    const changeShelves = (value) => {
      state.shelvesValue = value
      state.pageNum = 1
    }
    const changePage = () => {
      this.getList()
    }
    const getList = () => {}
    const close = () => {
      ElMessageBox.confirm('Are you sure to close?', 'Warning', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        type: 'warning'
      })
        .then(() => {
          // ElMessage({
          //   type: 'success',
          //   message: 'Delete completed'
          // })
        })
        .catch(() => {})
    }
    const confirm = () => {
      state.showDia = false
      state.isConfirmLoading = true
      state.isConfirmLoading = false
    }
    const edit = () => {
      state.showDia = true
    }

    // const approve = (item) => {
    //   ElMessageBox.confirm('Are you sure to approve this request?', 'Warning', {
    //     confirmButtonText: 'Approve',
    //     cancelButtonText: 'Cancel',
    //     type: 'warning'
    //   })
    //     .then(() => {
    //       // ElMessage({
    //       //   type: 'success',
    //       //   message: 'Delete completed'
    //       // })
    //     })
    //     .catch(() => {})
    // }

    return {
      ...toRefs(state),
      addNew,
      changeShelves,
      close,
      changePage,
      confirm,
      edit
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
