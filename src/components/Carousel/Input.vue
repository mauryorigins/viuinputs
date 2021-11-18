<template>
  <form class="inputs">
    <label>Nombre</label>
    <input type="text" v-model="name" />
    <!-- <p>{{name}}</p> -->
    <label>Apellido</label>
    <input type="text" v-model="lastName" />
    <!-- <p>{{lastName}}</p> -->
    <button @click="viewData" >agregar</button>
    <li v-for="p of persona" :key="p">
    name:{{p.nombre}} <br>
    lastname:{{p.apellido}}
    </li>
  </form>
</template>

<script>
export default {
  name: 'Input',
  data() {
    return {
      name: '',
      lastName: '',
      persona: [
        {
          nombre: '',
          apellido: '',
        },
      ],
    };
  },
  methods: {
    viewData() {
      this.persona.push({
        nombre: this.name, apellido: this.lastName,
      });
      this.name = '';
      this.lastName = '';
    },
  },
};
</script>

<style>
.inputs {
  display: flex;
  flex-direction: column;
  outline: transparent;
  align-items: center;
}

.inputs label {
  color: white;
}
.inputs p{
  text-decoration: none;
  color: white;
}
</style>
