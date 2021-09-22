<template>
  <el-form label-width="120px" >
    <el-form-item label=""> </el-form-item>
    <el-row type="flex">
        <el-col :span="8">
          <el-form-item label="姓名" >
            <el-input placeholder="请输入姓名" v-model="xm" @input="changeValue" style="width:400px"></el-input>&#12288;
            <el-button type="primary" @click="queryUser">查询</el-button>
          </el-form-item>
        </el-col>
    </el-row>
    <el-row type="flex">
       <el-table
              :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
              :header-cell-style="{'text-align':'center'}"
              :cell-style="{'text-align':'center'}"
              border
              style="width: 100%"
              :default-sort="{prop: 'Id', order: 'descending'}" >
        <el-table-column
                prop="id"
                label="工号"
                width="80">
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                width="120">
        </el-table-column>
        <el-table-column
                prop="gender"
                label="性别"
                width="60">
        </el-table-column>
        <el-table-column
                prop="age"
                label="年龄"
                width="120">
        </el-table-column>
        <el-table-column
                prop="email"
                sortable
                width="200"
                label="电子邮箱">
        </el-table-column>
        <el-table-column
                prop="phone"
                sortable
                label="手机"
                width="120">
        </el-table-column>

      </el-table>
    </el-row>
    <el-row type="flex">
        <div class="block" style="margin-top:15px;">
          <el-pagination
                  align='center'
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[1,5,10,20]"
                  :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
                  :total="tableData.length">
          </el-pagination>
        </div>
    </el-row>
  </el-form>
</template>

<script>
  import  axios from 'axios'
  import utils from "@/utils/common";
  import config from "@/utils/config";
  export default {
    data() {
        return {
            svr:config(),
            xm: '',
            tableData: [],
            currentPage: 1, // 当前页码
            total: 20,      // 总条数
            pageSize: 10,   // 每页的数据条数,
        };
    },
    methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.currentPage = 1;
        this.pageSize = val;
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val;
      },
      changeValue: function() {
        this.queryUser()
      },
      queryUser() {
        console.log('queryUser=>url:',utils.stringFormat("http://{0}:{1}/user",[this.svr['server_ip'], this.svr['server_port']]))
        axios({
          method: 'get',
          url: utils.stringFormat("http://{0}:{1}/user?xm=",[this.svr['server_ip'], this.svr['server_port']]),
          params: {
            xm  : this.xm,
          },
          timeout: 10000,
        }).then((res) => {
              if (res.data['Code'] == 200 ) {
                console.log('res=',res)
                this.tableData = res.data['Data']
              }
        }).catch((error) => {
            console.log(error)
        });
      },
    },
    mounted: function() {
      this.queryUser();
    }
  }

</script>

<style scoped>

</style>
