<template>
  <Card class="shadow-lg shadow-black bg-white rounded-lg p-6 w-1/4 mx-auto">
    <template v-slot:content>
      <h1 class="text-title text-4xl"><strong>{{ title }}</strong></h1>
    </template>
  </Card>
</template>

<script>
  import Card from './Card'

export default {
  components: {
    Card
  },
  props: {
    title: {
      type: String,
      default: () => 'Headquarters'
    }
  },
  data () {
    return {
      // 
    };
  }
};
</script>