<template>
  <main class="font-sans font-thin flex bg-background w-100 h-fit justify-center items-center">
    <div class="container mx-auto">
      <h1 class="text-primary text-6xl text-center my-20">Offices</h1>
      <card background-color="primary" />
      <offices />
    </div>
  </main>
</template>

<script>
import Card from '@/components/cards/Card'
import Offices from '../components/Offices'

export default {
  components: {
    Card,
    Offices
  }
}
</script>