<template>
  <div>
    <BarChart :chart-data="chartData" :chart-options="chartOptions" />
  </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { computed, toRefs } from 'vue';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const props = defineProps({
  sales: {
    type: Array,
    required: true,
  },
});

const { sales } = toRefs(props);

const groupedSales = computed(() => {
  const totals = {};
  sales.value.forEach(({ date, amount }) => {
    if (!totals[date]) totals[date] = 0;
    totals[date] += amount;
  });
  return totals;
});

const chartData = computed(() => ({
  labels: Object.keys(groupedSales.value),
  datasets: [
    {
      label: 'Revenue',
      data: Object.values(groupedSales.value),
      backgroundColor: '#3b82f6',
    },
  ],
}));

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Revenue by Date',
    },
  },
};

const BarChart = Bar;
</script>
