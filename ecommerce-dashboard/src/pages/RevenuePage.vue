<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold mb-6 text-gray-800">📈 Revenue Dashboard</h1>

      <div class="mb-6">
        <label class="block text-lg font-medium text-gray-700 mb-2">Filter by Category</label>
        <select
          v-model="category"
          class="w-full md:w-64 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All</option>
          <option v-for="c in categories" :key="c">{{ c }}</option>
        </select>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <RevenueCharts :sales="filteredSales" />
      </div>
    </div>
  </div>
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
