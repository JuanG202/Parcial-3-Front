<template>
  <div>
    <h1>Usuarios</h1>
    <p>Lista de usuarios</p>
    <ul class="books-list">
      <li v-for="b in books" :key="b.id" class="book-item">
        <div class="book-title">{{ b.nombre }} {{ b.genero }} 
        </div>

        <div class="book-author">
          <strong>Rol:</strong> {{ b.author.nombre }}
        </div>
      </li>
    </ul>
  </div>

  <h1>Roles disponibles</h1>
  <p>Lista de roles</p>
  <ul class="books-list">
    <li v-for="w in writers" :key="w.id" class="book-item">
      <div class="book-title">{{ w.nombre }} {{ w.apellido }}</div>
    </li>    
  </ul>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getBooks, Book, Writer, getWriters } from '../services/api';
import '../styles/books.css';

const books = ref<Book[]>([]);
const writers = ref<Writer[]>([]);

const fetchWriters = async () => {
  writers.value = await getWriters();
};

const fetchBooks = async () => {
  books.value = await getBooks();
};

onMounted(() => {
  fetchWriters();
  fetchBooks();
});
</script>
