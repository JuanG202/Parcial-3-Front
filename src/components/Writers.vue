<template>
  <div class="writers-container">
    <h2>✍🏼 Agregar Usuario</h2>
    <form @submit.prevent="addWriter">
      <div class="form-container">
        <input class="input" v-model="form.nombre" placeholder="Nombre del rol" required />
        <input class="input" v-model="form.apellido" placeholder="Descripción" />
        <button type="submit">Agregar Rol</button>
      </div>
    </form>

    <ul class="writers-list">
      <li v-for="w in writers" :key="w.id" class="writer-item">
        <div class="writer-info">
          <p><strong>Nombre del rol:</strong> {{ w.nombre }}</p>
          <p><strong>Descripción:</strong> {{ w.apellido }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getWriters, createWriter, Writer } from '../services/api';
import '../styles/writers.css'; 

const writers = ref<Writer[]>([]);
const form = ref({ nombre: '', apellido: '', nacionalidad: '', edad: 0 });

const fetchWriters = async () => {
  writers.value = await getWriters();
};

const addWriter = async () => {
  await createWriter(form.value);
  form.value = { nombre: '', apellido: '', nacionalidad: '', edad: 0 };
  fetchWriters();
};

onMounted(fetchWriters);
</script>
