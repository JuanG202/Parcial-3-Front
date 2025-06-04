<template>
  <div class="books-container">
    <h2>📖 Agregar Usuario</h2>
    <form @submit.prevent="addBook">
      <div class="form-container">
        <input class="input" v-model="form.nombre" placeholder="Nombres" required />
        <input class="input" v-model="form.genero" placeholder="Apellidos" required />
        <input class="input" v-model="form.identificacion" placeholder="Identificación" required /> 
        <input class="input" v-model="form.correo" placeholder="Correo electrónico" required />
        <select class="input" v-model.number="form.author.id" required>
          <option disabled value="0">Selecciona el rol</option>
          <option v-for="w in writers" :key="w.id" :value="w.id">{{ w.nombre }} {{ w.apellido }}</option>
        </select>
        <button type="submit">Agregar Usuario</button>
      </div>
    </form>

    <ul class="books-list">
      <li v-for="b in books" :key="b.id" class="book-item">
        <div class="book-title">{{ b.nombre }} {{ b.genero }}</div>
        <div class="book-author">
          <strong>Rol:</strong> {{ b.author.nombre }}
        </div>
        <div class="book-details">
          <p><strong>Identificación:</strong> {{ b.identificacion }}</p>
          <p><strong>Correo electrónico:</strong> {{ b.correo }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getBooks, createBook, getWriters, Book, Writer } from '../services/api';
import '../styles/books.css';

const books = ref<Book[]>([]);
const writers = ref<Writer[]>([]);

// Agregué identificacion y correo al form
const form = ref({
  nombre: '',
  genero: '',
  identificacion: '',
  correo: '',
  añoPublicacion: 0,
  author: { id: 0 }
});

const fetchWriters = async () => {
  writers.value = await getWriters();
};

const fetchBooks = async () => {
  books.value = await getBooks();
};

const addBook = async () => {
  await createBook(form.value);
  form.value = {
    nombre: '',
    genero: '',
    identificacion: '',
    correo: '',
    añoPublicacion: 0,
    author: { id: 0 }
  };
  fetchBooks();
};

onMounted(() => {
  fetchWriters();
  fetchBooks();
});
</script>
