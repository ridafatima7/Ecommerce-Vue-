<template>
  <div>
    <h1>Register New Product</h1>
    <ProductForm @add-product="addProduct" />
  </div>
</template>

<script>
import ProductForm from '../components/ProductForm.vue';

export default {
  components: {
    ProductForm
  },
  setup() {
    const addProduct = (newProduct) => {
      // Handle the new product (e.g., send to API or update state)
      console.log('New product added:', newProduct);
    };

    return {
      addProduct
    };
  }
};
</script>
