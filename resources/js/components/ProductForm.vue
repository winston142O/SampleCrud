<template>
  <div>
    <h2 v-if="isNewProduct">Añadir producto</h2>
    <h2 v-else>Editar producto</h2>
    <div class="card mt-3 custom-card">
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="name" class="form-label">Nombre:</label>
            <input class="form-control" type="text" id="name" v-model="product.name" required />
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Descripción:</label>
            <textarea class="form-control" id="description" v-model="product.description" required></textarea>
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">Precio:</label>
            <input class="form-control" type="number" id="price" v-model="product.price" required />
          </div>
          <button type="submit" v-if="isNewProduct" class="btn btn-primary">Añadir producto</button>
          <button type="submit" v-else class="btn btn-primary">Actualizar producto</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-card {
  width: 100%;
  padding: 20px;
  background-color: #f7f9fe;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: {
        name: '',
        description: '',
        price: 0
      }
    }
  },
  computed: {
    isNewProduct() {
      return !this.$route.path.includes('edit');
    }
  },
  async created() {
    if (!this.isNewProduct) {
      const response = await axios.get(`/api/products/${this.$route.params.id}`);
      this.product = response.data;
    }
  },
  methods: {
    async submitForm() {
      try {
        if (this.isNewProduct) {
          await axios.post('/api/products', this.product);
        } else {
          await axios.put(`/api/products/${this.$route.params.id}`, this.product);
        }
        this.$router.push('/');
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>