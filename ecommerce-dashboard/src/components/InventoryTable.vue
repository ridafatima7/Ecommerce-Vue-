<template>
  <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Stock</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in inventory" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.stock }}</td>
        <td>{{ item.price }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    inventory: {
      type: Array,
      required: true
    }
  }
};
</script>
