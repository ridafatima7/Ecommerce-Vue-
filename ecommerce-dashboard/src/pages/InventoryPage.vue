<template>
  <div>
    <h1>Inventory Management</h1>
    <InventoryTable :inventory="inventory" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import InventoryTable from '../components/InventoryTable.vue';

export default {
  components: {
    InventoryTable
  },
  setup() {
    const inventory = ref([]);

    onMounted(() => {
      // Fetch or initialize inventory data here
      inventory.value = [
        { id: 1, name: 'Product A', stock: 10, price: 100 },
        { id: 2, name: 'Product B', stock: 5, price: 200 }
      ];
    });

    return {
      inventory
    };
  }
};
</script>
