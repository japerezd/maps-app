<script lang="ts" src="./SearchBar.ts" />

<template>
  <div class="searchbar-container">
    <input v-model="searchTerm" class="form-control" placeholder="Buscar lugares" type="text" />

    <search-results></search-results>        
  </div>
</template>

<style scoped>
.searchbar-container {
  position: fixed;
  top: 30px;
  left: 30px;
  background-color: #fff;
  z-index: 9999;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  width: 250px;
  border-radius: 5px;
  overflow: hidden;
  padding: 5px;
}
</style>
