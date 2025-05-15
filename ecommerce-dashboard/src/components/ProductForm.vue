<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Product Name:</label>
      <input id="name" v-model="product.name" required />
    </div>
    <div>
      <label for="description">Description:</label>
      <input id="description" v-model="product.description" required />
    </div>
    <div>
      <label for="price">Price:</label>
      <input id="price" type="number" v-model.number="product.price" required />
    </div>
    <div>
      <label for="stock">Stock:</label>
      <input id="stock" type="number" v-model.number="product.stock" required />
    </div>
    <div>
      <label for="image">Image URL:</label>
      <input id="image" v-model="product.image" />
    </div>
    <button type="submit">Add Product</button>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
  emits: ['add-product'],
  setup(_, { emit }) {
    const product = ref({
      name: '',
      description: '',
      price: 0,
      stock: 0,
      image: ''
    });

    const submitForm = () => {
      emit('add-product', { ...product.value });
      product.value = {
        name: '',
        description: '',
        price: 0,
        stock: 0,
        image: ''
      };
    };

    return {
      product,
      submitForm
    };
  }
};
</script>
