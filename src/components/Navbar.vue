<template>
  <nav class="animate__animated animate__fadeInDown">
    <!-- <div class=""> -->
      <ul>
        <li v-for="item in nav_items" :key="item.name">
          <a :href="item.path" class="scrolling-page">{{ item.name }}</a>
        </li>
      </ul>

      <div class="menu-toggle" @click="openMenu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
    <!-- </div> -->
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const nav_items = ref([
  { name: 'Home', path: '#' },
  { name: 'About', path: '#about' },
  { name: 'Skills', path: '#skills' },
  { name: 'Portfolio', path: '#portfolio' },
  { name: 'Contact', path: '#contact' },
]);


</script>

<style scoped>
nav {
  width: 100%;
  height: 5rem;
  padding: 1rem 3rem 3rem 0;
  align-items: center;
  position: fixed;
  right: 0;
  z-index: 999;
  transition: .5s;
}

nav ul {
  display: flex; 
  justify-content: end;
}

nav ul li {
  list-style: none;
  margin: 15px;
  margin-bottom: 0;
  cursor: pointer;
  transition: .5s;
}

nav ul li a {
  text-decoration: none;
  color: var(--color3);
}
nav ul li a:hover {
  color: var(--color1);
}

nav.stiky {
  background-color: var(--color1);
  color: var(--color4);
  height: 65px;
  padding-top: 5px;
}

nav.stiky ul {
  justify-content: center;
}

nav.stiky a:hover {
  color: var(--color5);
}

nav.nav-down {
  background-color: var(--color1);
}

/* Hamburger Menu */
nav .menu-toggle {
  display: flex;
  flex-direction: column;
  height: 20px;
  width: 30px;
  justify-content: space-between;
  position: relative;
  opacity: 0;
}

nav .menu-toggle input {
  position: absolute;
  width: 44px;
  height: 28px;
  opacity: 0;
  left: -8px;
  top: -4px;
  cursor: default;
}

nav.stiky .menu-toggle span {
  background-color: var(--color3);
}

nav .menu-toggle span {
  display: block;
  width: 28px;
  height: 3px;
  background-color: var(--color2);
  border-radius: 3px;
  transition: all .5s;
}

/* Hamburger Menu Animation */
.menu-toggle span:nth-child(2) {
  transform-origin: 0 0;
}

.menu-toggle span:nth-child(4) {
  transform-origin: 0 100%;
}

.menu-toggle input:checked ~ span:nth-child(2){
  transform: rotate(45deg) translate(-1px, 1px);    
  background-color: white;
}

.menu-toggle input:checked ~ span:nth-child(4){
  transform: rotate(-45deg) translate(-2px, 0);
  background-color: white;
}

.menu-toggle input:checked ~ span:nth-child(3){
  opacity: 0;
  transform: scale(0);
}

/* Responsive - Mobile  - Potrait*/
@media (max-width: 575.98px) {

  nav {
    padding: 0;
  }

  nav ul {
    position: absolute;
    left: 0;
    justify-content: space-evenly;
    flex-direction: column;
    background-color: var(--color1);
    z-index: 1;
    height: 50vh;
    width: 40vw;
    padding: 10px;
    /* box-shadow: 0 3px 15px rgb(90, 90, 90); */
    transform: translateX(-100%);
    transition: all .5s;
  }

  nav ul.slide {
    transform: translateX(0);
  }

  nav ul li a {
    color: var(--color4);
    font-size: 3vw;    
  }

  nav ul li a:hover {
    color: white;    
  }

  nav .menu-toggle {
    right: -13px;
    bottom: -20px;
    z-index: 2;
    opacity: 1;
  }

  nav.stiky {
    height: 60px;
  }

  nav.stiky .menu-toggle {
    bottom: -12px;
  }

}

/* Responsive - Mobile - Landscape */
@media (max-width: 767.98px) {

  nav ul {
    justify-content: center;
  }

  nav ul li a {
    font-size: 15px;    
  }

  nav.stiky {
    padding-top: 10px;
  }

}

/* Responsive - Tablet */
@media (max-width: 991.98px) {

  nav ul {
    justify-content: center;
    padding-top: 7px;
  }

  nav.stiky {
    height: 100px;
  }

  nav.stiky ul{
    margin-top: 25px;
  }
  
}
</style>