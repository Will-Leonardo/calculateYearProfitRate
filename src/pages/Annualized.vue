<!--
 * @Autor: wangliangxin3
 * @Email: wangliangxin3@jd.com
 * @Description: 年化收益率计算工具页
 * @Date: 2025-09-26 17:53:10
 * @LastEditors: wangliangxin3
 * @LastEditTime: 2025-09-26 20:20:17
-->
<template>
  <div class="annualized">
    <h2>年化收益率计算器</h2>
    <p>请输入理财产品收益周期与对应收益率，计算真实年化收益率。</p>
    <div class="annualized-inner">
      <form @submit.prevent="calcAnnualized">
      <div class="form-row">
        <label>周期类型：</label>
        <select v-model="periodType">
          <option value="day">按天</option>
          <option value="month">按月</option>
          <option value="year">按年</option>
        </select>
      </div>
      <div class="form-row">
        <label>周期数值：</label>
        <input type="number" v-model.number="periodValue" min="1" required />
        <span v-if="periodType==='day'">天</span>
        <span v-else-if="periodType==='month'">月</span>
        <span v-else>年</span>
      </div>
      <div class="form-row">
        <label>收益率：</label>
        <input type="number" v-model.number="yieldRate" step="0.01" required /> %
      </div>
      <div class="filter-btn">
        <button class="btn" type="submit">计算年化</button>
      </div>
    </form>
    <div v-if="result !== null" class="result">
      <strong>年化收益率：</strong>
      <span>{{ result }}%</span>
    </div>
  </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const periodType = ref('month');
const periodValue = ref(3);
const yieldRate = ref(2.8);
const result = ref(null);

function calcAnnualized() {
  let days = 0;
  if (periodType.value === 'day') {
    days = periodValue.value;
  } else if (periodType.value === 'month') {
    days = periodValue.value * 30;
  } else if (periodType.value === 'year') {
    days = periodValue.value * 365;
  }
  // 年化收益率公式
  const annualized = ((yieldRate.value / 100) / days) * 365 * 100;
  result.value = annualized.toFixed(2);
}
</script>
<style scoped>
.annualized {
  padding: 12px 16px;
  background: #fff;
  border-radius: 8px;
  max-width: 375px;
  min-height: calc(100vh - 56px);
}
h2 {
  color: #4285f4;
  margin-bottom: 12px;
  font-size: 24px;
}
p {
  margin-bottom: 20px;
  font-size: 16px;
}
.form-row {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  gap: 8px;
}

.form-row label {
  width: 80px;
  /* font-weight: 500; */
  text-align: right;
}

input, select {
  font-size: 16px;
}
.annualized-inner {
  /* padding-left: 24px; */
  /* padding-right: 24px; */
}
@media (max-width: 600px) {
  .annualized {
    max-width: 100vw;
    min-height: calc(100vh - 56px);
    /* margin: 8px auto 70px auto; */
    /* padding: 12px 4px; */
  }
  .annualized-inner {
    padding-left: 6px;
    padding-right: 6px;
  }
}
.btn {
  background: #4285f4;
  color: #fff;
  border: none;
  padding: 4px 12px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
}
.result {
  margin-top: 22px;
  font-size: 18px;
  background: #f4f6fb;
  padding: 12px;
  border-radius: 6px;
  color: #222;
  text-align: center;
}
@media (max-width: 600px) {
  h2 { font-size: 18px; }
  p { font-size: 15px; }
  .result { font-size: 16px; }
}

.filter-btn  {
  width: 100%;
  padding-left: 85px;
}
</style>