<template>
    <div class="centered-card">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Nombre:</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ product.name }}</h6>
          <h5 class="card-title">Descripción:</h5>
          <p class="card-text">{{ product.description }}</p>
          <h5 class="card-title">Precio:</h5>
          <p class="card-text">RD${{ product.price }}</p>
          <router-link :to="`/products/${product.id}/edit`" class="btn btn-primary">Editar</router-link>
        </div>
      </div>
    </div>
</template>

<style scoped>
.centered-card {
  margin-left: 425px;
  margin-right: 400px;
  margin-top: 150px;
}

.card {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 400px; 
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 18px;
}

.card-subtitle {
  font-size: 16px;
  color: #666;
}

.card-text {
  font-size: 14px;
}

.btn-primary {
  margin-top: 10px;
}
</style>

<script>
import axios from 'axios';

export default {
data() {
    return {
    product: {}
    }
},
async created() {
    try {
    const response = await axios.get(`/api/products/${this.$route.params.id}`);
    this.product = response.data;
    } catch (error) {
    console.error(error);
    }
}
}
</script>