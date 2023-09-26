<template>
  <div>
    <div class="card mt-3 custom-card">
      <div class="card-body">
        <div class="mb-3">
          <input v-model="searchText" type="text" class="form-control" placeholder="Filtrar productos mientras escribes...">
        </div>
        <table class="table custom-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripción</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in filteredProducts" :key="product.id" class="product-card">
              <td>{{ product.id }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.description }}</td>
              <td>RD${{ product.price }}</td>
              <td>
                <div class="row gap-3" style="padding: 7px;">
                  <router-link :to="`/products/${product.id}`" class="p-2 col border btn btn-primary">Ver</router-link>
                  <router-link :to="`/products/${product.id}/edit`" class="p-2 col border btn btn-success">Editar</router-link>
                  <button @click="deleteProduct(product.id)" type="button" class="p-2 col border btn btn-danger">Eliminar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <br/>
  <div class="card mt-3 custom-card">
      <div class="card-body">
        <canvas id="salesChart" width="400" height="200"></canvas>
      </div>
  </div>
</template>

<style scoped>
.custom-table {
  padding: 10px;
}

.custom-table thead {
  background-color: #5874fc; 
  color: white; 
}

.custom-card {
  width: 100%;
  padding: 20px;
  background-color: #f7f9fe;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}

.product-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 10px;
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.product-card:hover {
  transform: translateY(-3px);
  background-color: #fc5874;
  color: #ffffff;
  box-shadow: 0 0 10px rgba(252, 88, 116, 0.8);
  border-radius: 10px;
}

</style>

<script>
import axios from 'axios';
import { Chart } from 'chart.js/auto';

export default {
  data() {
    return {
      products: [],
      searchText: ''
    }
  },
  
  computed: {
    filteredProducts() {
      const searchText = this.searchText.toLowerCase();
      return this.products.filter(product => {
        return product.name.toLowerCase().includes(searchText) || // Filtra por nombre
               product.description.toLowerCase().includes(searchText) || // Filtra por descripción
               product.price.toString().includes(searchText); // Filtra por precio
      });
    },
  },
  async created() {
    try {
      const response = await axios.get('/api/products');
      this.products = response.data;
      
      
      this.createChart();
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async deleteProduct(id) {
      try {
        await axios.delete(`/api/products/${id}`);
        this.products = this.products.filter(product => product.id !== id);
        
        this.createChart();
      } catch (error) {
        console.error(error);
      }
    },
    createChart() {
      if (this.products.length === 0) {
        return;
      }

      const labels = this.products.map(product => product.name);
      const data = this.products.map(product => product.price);

      const ctx = document.getElementById('salesChart').getContext('2d');
      const salesChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Comparación de precios',
            data: data,
            backgroundColor: [
              'rgba(255, 164, 0, 0.8)',
              'rgba(2, 195, 189, 0.8)',
              'rgba(32, 252, 143, 0.8)',
              'rgba(239, 202, 8, 0.8)'
            ],
            borderColor: [
              'rgba(255, 164, 0, 1)',
              'rgba(2, 195, 189, 1)',
              'rgba(32, 252, 143, 1)',
              'rgba(239, 202, 8, 1)'
            ],
            borderWidth: 1,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Precio',
                font: {
                  family: 'Nunito',
                  weight: 'bold'
                }
              },
              ticks: {
                font: {
                  family: 'Nunito'
                }
              }
            },
            x: {
              title: {
                display: true,
                text: 'Producto',
                font: {
                  family: 'Nunito',
                  weight: 'bold'
                }
              },
              ticks: {
                font: {
                  family: 'Nunito'
                }
              },
              grid: {
                display: false
              }
            }
          }
        }
      });
    }
  }
}
</script>