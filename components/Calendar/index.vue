/*
 * @Author: web.张超
 * @Date: 2020-05-29 15:47:11
 * @LastEditors: web.张超
 * @LastEditTime: 2020-06-24 17:46:30
 * @Description: 日历组件
*/
<template>
  <div class="rili">
    <el-date-picker
      v-if="isDate"
      class="el__date__picker"
      v-model="this__date"
      type="month"
      placeholder="选择月"
    ></el-date-picker>

    <el-calendar ref="dom" v-model="this__date" selected-day="yyyy-MM">
      <template slot="dateCell" slot-scope="{date, data}">
        <div>
          <span
            :class="data.isSelected ? 'is-selected day__' : 'day__'"
          >{{ data.day.split('-').slice(1)[1] }}</span>
          <el-tag
            :type="autoType(date,data).tag"
            class="fr"
            v-if="autoType(date,data).value"
          >{{autoType(date,data).value}}</el-tag>
        </div>
        <div v-if="autoType(date,data).code === 1 || autoType(date,data).code === 2">
          <span class="label">同步时间</span>
          <span class="value">{{autoType(date,data).date}}</span>
        </div>
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
      // 选中的时间
      this__date: moment().format('YYYY-MM-DD'),
      // 月份 临时变量
      temporary: moment().format('YYYY-MM'),
    };
  },
  computed: {
    datas() {
      const current = this.$refs.dom.curMonthDatePrefix;
      return {
        current,
        currentDate: this.$refs.dom.formatedDate,
        dateArr: this.getCurrMonthDays(),
      };
    },
  },
  watch: {
    // 备注:因cdn无法修改element源码 需监控月份变化emit父组件
    this__date() {
      this.$nextTick(() => {
        if (this.datas.current === this.temporary) {
          console.log('unchanged');
        } else {
          console.log('change');
          // 变化把最新数据给临时变量
          this.$emit('change', this.datas);
          this.temporary = this.datas.current;
        }
      });
    },
  },
  methods: {
    /**
     * 日历当天过滤的核心方法
     * @param {Object} date__ 时间
     * @param {Object} data Element数据
     * @return {Object} value:同步名称 code: 1 = 自动同步 2 = 手动同步 3 = 未同步 tag: 同步时间
     */
    autoType(date__, data) {
      const arr = this.list.filter(item => item.date === data.day);
      let n = { value: '', code: -1 };
      if (arr.length !== 0) {
        // 1 = 自动同步 2 = 手动同步 3 = 未同步
        const code = arr[0].type;
        const date = arr[0].autoDate;
        if (code === 1) {
          n = {
            value: '自动同步',
            code: 1,
            tag: 'success',
            date,

          };
        } else if (code === 2) {
          n = {
            value: '手动同步',
            code: 2,
            tag: '',
            date,
          };
        } else if (code === 3) {
          n = {
            value: '未同步',
            code: 3,
            tag: 'danger',
            date,
          };
        }
      }
      return n;
    },
    // 当前本月，本月第一天和最后一天
    getCurrMonthDays() {
      const date = [];
      const start = `${moment(this.$refs.dom.curMonthDatePrefix).add('month', 0).format('YYYY-MM')}-01`;
      const end = moment(start).add('month', 1).add('days', -1).format('YYYY-MM-DD');
      date.push(start);
      date.push(end);
      return date;
    },
  },
  created() {
    this.$nextTick(() => this.$emit('change', this.datas));
  },
  mounted() {

  },
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
</style>
<style>
.el-calendar-table .el-calendar-day {
  position: relative;
  height: 55px;
}
</style>
