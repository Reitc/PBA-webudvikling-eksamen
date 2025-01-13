<template>
  <div id="app" class="bg-beige">
    <Navbar />
    <Header />
    <!-- <TabComponent />
    The router-view will display the content of the current route -->
    <!-- This way, the Navbar, Header, and TabComponent will always be displayed, while the content inside router-view will change depending on the active route -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';
//import TabComponent from './components/TabComponent.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    //TabComponent,
    Footer,
  },
};
</script>
