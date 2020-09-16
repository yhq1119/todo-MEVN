<template> 
    <b-container>
      <b-row >
        <b-col></b-col>
        <b-col>
      <HelloWorld id="helloworld" />
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
</template>

<script>
import HelloWorld from './components/List';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>

</style>
