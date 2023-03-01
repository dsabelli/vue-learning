<template>
  <header></header>
  <div class=""><slot /></div>
  <footer>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
        <li></li>
      </ul>
    </nav>
  </footer>
</template>
