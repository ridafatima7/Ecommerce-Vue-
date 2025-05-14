<template>
  <select v-model="category">
    <option value="">All</option>
    <option v-for="c in categories" :key="c">{{ c }}</option>
  </select>
  <RevenueCharts :sales="filteredSales" />
</template>

<script setup>
import RevenueCharts from '../components/RevenueCharts.vue';
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const sales = ref([]);
const category = ref('');
const categories = ['Electronics', 'Books', 'Fashion'];

onMounted(async () => {
  const { data } = await axios.get('/api/sales');
  sales.value = data;
});

const filteredSales = computed(() =>
  category.value ? sales.value.filter(s => s.category === category.value) : sales.value
);
</script>
