<template>
  <div class="rowBC">
    <el-radio-group v-model="state.listQuery.status" @change="fetchData">
      <el-radio-button :label="1">On Shelves</el-radio-button>
      <el-radio-button :label="0">Off Shelves</el-radio-button>
    </el-radio-group>
    <el-button type="primary" @click="handleCreate">Add New</el-button>
  </div>

  <div class="card-group" v-for="item of state.list">
    <el-popover placement="bottom" :width="400" trigger="click" :auto-close="1000"
                :title="'Subject: '+item.title" :content="'Contents: '+(item.contents?item.contents:'')">
      <template #reference>
        <el-card shadow="hover">
          <div class="card-box">
            <div class="card-box-item">
              <div class="title-title">Subject: {{ item.title }}</div>
              <div class="title-button">{{ item.createdAt }}</div>
            </div>
            <div class="card-box-button">
              <el-button type="primary" @click="handleUpdate(item)">Edit</el-button>
              <el-popconfirm
                  confirm-button-text="Confirm"
                  cancel-button-text="Cancel"
                  :title="'Are you sure to ' + (item.status?'Close':'Open') + '?'"
                  @confirm="toggleStatus(item, item.status===1?0:1)"
              >
                <template #reference>
                  <el-button v-if="item.status===0" size="mini" type="success">
                    Open
                  </el-button>
                  <el-button v-else size="mini" type="warning">
                    Close
                  </el-button>
                </template>
              </el-popconfirm>
            </div>
          </div>
        </el-card>
      </template>
    </el-popover>
  </div>
  <pagination
      v-show="state.total>0"
      :total="state.total"
      :page="state.listQuery.page"
      :limit="state.listQuery.size"
      @pagination="changePageFetching"/>
  <el-dialog :title="textMap[state.dialogStatus]" v-model="state.dialogVisible">
    <el-form
        :rules="formRulesMixin"
        ref="dataForm"
        :model="notificationForm"
        label-position="left"
        label-width="70px"
        style="width: 400px; margin-left: 50px"
    >

      <el-form-item label="Subject" prop="title" :rules="formRulesMixin.isNotNull" label-width="90px">
        <el-input v-model="notificationForm.title"/>
      </el-form-item>
      <el-form-item label="Content" prop="contents" :rules="formRulesMixin.isNotNull" label-width="90px">
        <el-input type="textarea" rows=4 v-model="notificationForm.contents"/>
      </el-form-item>

    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="state.dialogVisible = false"> Cancel</el-button>
        <el-button
            type="primary"
            @click="state.dialogStatus === 'create' ? createData() : updateDate()"
        >
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>

</template>

<script>
export default {
  name: "notice"
}
</script>

<script setup>
import Pagination from '@/components/Pagination'
import {getCurrentInstance, onBeforeMount, reactive} from "vue";
import {
  createNotificationReq,
  getNotificationListReq,
  updateNotificationReq,
  updateNotificationStatueReq
} from "@/api/notification";

let {proxy} = getCurrentInstance()

const textMap = {
  update: 'Edit Notification',
  create: 'Add Notification'
}

const state = reactive({
  listQuery: {
    page: 1,
    size: 20,
    status: 1
  },
  total: 0,
  list: [],
  listLoading: false,
  dialogStatus: '',
  dialogVisible: false,

})

let notificationForm = reactive({
  title: '',
  contents: '',
  id: ''
})

onBeforeMount(() => {
  fetchData()
})

const fetchData = () => {
  state.listLoading = true
  getNotificationListReq(state.listQuery).then((res) => {
    state.list = res.data?.content
    state.listLoading = false
    state.total = res.data?.totalElements
  })
}

const changePageFetching = (data) => {
  state.listQuery.page = data.page
  state.listQuery.size = data.limit
  fetchData()
}

const resetForm = () => {
  notificationForm.title = ''
  notificationForm.contents = ''
  notificationForm.id = ''
}

const handleCreate = () => {
  resetForm()
  state.dialogStatus = 'create'
  state.dialogVisible = true
  proxy.$nextTick(() => {
    proxy.$refs['dataForm'].clearValidate()
  })
}

const createData = () => {
  proxy.$refs['dataForm'].validate(valid => {
    if (valid) {
      createNotificationReq({
        title: notificationForm.title,
        contents: notificationForm.contents,
      }).then(() => {
        state.dialogVisible = false
        proxy.$notify({
          title: 'Success',
          message: 'Created Successfully',
          type: 'success'
        })
        fetchData()
      })
    }
  })
}

const handleUpdate = (row) => {
  notificationForm.title = row.title
  notificationForm.contents = row.contents
  notificationForm.id = row.id
  state.dialogStatus = 'update'
  state.dialogVisible = true
  proxy.$nextTick(() => {
    proxy.$refs['dataForm'].clearValidate()
  })
}

const updateDate = () => {
  proxy.$refs['dataForm'].validate((valid) => {
    if (valid) {
      updateNotificationReq(
          notificationForm.id,
          {
            title: notificationForm.title,
            contents: notificationForm.contents,
          }
      ).then(() => {
        state.dialogVisible = false
        proxy.$notify({
          title: 'Success',
          message: 'Updated Successfully',
          type: 'success'
        })
        fetchData()
      })
    }
  })
}

const toggleStatus = (row, status) => {
  updateNotificationStatueReq(row.id, status).then(() => {
    row.status = status
    // state.listQuery.status = status
    proxy.$notify({
      title: 'Success',
      message: 'Update Success',
      type: 'success'
    })
  })
}

</script>

<style lang="scss" scoped>
.card-group {
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  .card-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .card-box-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .title-title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .title-button {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }
    }

    .card-box-button {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>