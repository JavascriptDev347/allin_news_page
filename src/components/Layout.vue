<template>
  <div class="container-fluid">
    <ul class="nav">
      <div>
        <img src="../images/logo.svg" alt="no img" />
      </div>
      <div class="nav__items">
        <li class="nav-item">
          <router-link to="/" class="nav-link" style="color: #aaa3bf"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/tariffs-and-services"
            style="color: #aaa3bf"
            class="nav-link"
            >Tariffs and services</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/news" class="nav-link" style="color: #aaa3bf"
            >News</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/coverage-area"
            class="nav-link"
            style="color: #aaa3bf"
            >Coverage area</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" style="color: #aaa3bf"
            >About Us</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/contacts" class="nav-link" style="color: #aaa3bf"
            >Contacts</router-link
          >
        </li>
      </div>
      <div>salom</div>
    </ul>
  </div>
</template>

<script setup>
//logo https://d.allin.uz/_nuxt/08b1c672d84a3746c070b210b01eac2c.svg
</script>

<style scoped>
.container-fluid {
  margin: 0 auto;
  max-width: 1250px;
}
.nav-link.router-link-active.router-link-exact-active {
  color: #303446 !important;
  font-weight: 700;
}

.nav-link {
  text-decoration: none;
  position: relative;
}

.nav-link:hover .nav-link:before {
  background-color: #303446;
  width: 20px !important;
}

.nav-link:before {
  content: "";
  position: absolute;
  width: 0;
  top: 100%;
  color: red;
  height: 2px;
  background-color: #303446;
  transition: 0.3s;
}
.nav {
  padding: 15px;
}
.nav .nav__items {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 5px 50px;
}
.nav-item {
  list-style-type: none;
  font-size: 14px;
}
.nav-link {
  color: "#aaa3bf" !important;
}
</style>
