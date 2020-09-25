/*
 * @Author: web.张超
 * @Date: 2020-05-29 15:47:11
 * @LastEditors: web.张超
 * @LastEditTime: 2020-06-24 17:46:30
 * @Description: 日历组件
*/
<template>
  <div class="rili">
    <el-calendar ref="dom" v-model="this__date" selected-day="yyyy-MM">
      <template slot="dateCell" slot-scope="{date, data}">
          <el-tooltip :content="data.day" placement="bottom" effect="light">
            <el-tag size="mini" class="current_all" type="info">{{date | dateFilter}}</el-tag>
          </el-tooltip>
      </template>
    </el-calendar>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'calendar',
  props: {
    list: {
      type: Array,
      required: false,
      default() {
        return [{
          date: '2020-05-19',
          autoDate: '2020-01-21',
          type: 1, // 1 = 自动同步 2 = 手动同步 3 = 未同步
        }];
      },
    },
    // 时间组件
    isDate: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  data() {
    return {
      this__date:''
    };
  },
  computed: {
  },
  watch: {
    // 备注:因cdn无法修改element源码 需监控月份变化emit父组件
    this__date() {
      this.$emit('change', this.datas);
    },
  },
  methods: {
  },
  created() {
    this.$nextTick(() => this.$emit('change', this.datas));
  },
  mounted() {

  },
  filters:{
    dateFilter(info){
      moment(info).format('D');
      return moment(info).format('D');
    }
  }
};
</script>
<style lang='scss' scoped>
/deep/ .el-calendar__header{
  position: relative;
  display:block;
  padding:0;
  /deep/ .el-calendar__title{
    padding: 0;
    float: right;
    font-size: 12px;
    color: #666;
  }
}

.rili {
  position: relative;
  .el__date__picker {
    position: absolute;
  }
}
.is-selected {
  font-size:12px;
  color: #1989fa;
}
.day__ {
  font-size: 12px;
  position: absolute;
  top: 0;  
}
/deep/ .el-calendar__body{
  padding:0;
}
.label {
  position: absolute;
  bottom: 20px;
  right: 10px;
  font-size: 14px;
  color: #666;
}
.value {
  position: absolute;
  bottom: 0px;
  right: 10px;
  font-size: 14px;
  color: #666;
}
.el-icon-success{
  color: $color;
}
.current_num{
  font-size: 12px;
  color: 666;
}
.current_all{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 28px;
}
</style>
<style>
.el-calendar-table .el-calendar-day {
  position: relative;
  height: 55px;
  padding:1px;
}
</style>
