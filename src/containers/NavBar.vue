<template>
  <nav class="app-navbar">
      <a-row>
        <a-col :span="4">
          <img alt="Vue logo" src="../assets/logo.png" />
        </a-col>
        <a-col :span="4">
          <NavButton label="Home" path="/" :grid="gridButtons" />
        </a-col>
        <a-col :span="4">
          <NavButton label="About" path="/about" :grid="gridButtons" />
        </a-col>
        <a-col :span="4">
          <NavButton label="Services" path="/services" :grid="gridButtons" />
        </a-col>
        <a-col :span="4">
          <NavButton label="Mau" path="/mau" :grid="gridButtons" />
        </a-col>
      </a-row>
        </nav>
</template>
<script>
import NavButton from '@/components/Navbar/NavButton.vue';

export default {
  name: 'Navbar',
  components: {
    NavButton,
  },
  data() {
    return {
      gridButtons: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 6,
        xl: 4,
        xxl: 4,
      },
    };
  },
};
</script>

<style>
.app-navbar img {
  height: 60px;
}
.nav-button {
  color: white;
  background-color: inherit;
  min-height: 35px;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
}
.nav-button:hover {
  background-color: rgba(167, 166, 166, 0.2);
  cursor: pointer;
}
</style>
