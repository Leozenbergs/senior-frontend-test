<template>
  <main class="font-sans font-thin flex bg-background w-100 h-screen justify-center items-center">
    <div class="container mx-auto">
      <h1 class="text-primary text-6xl text-center mb-20">Offices</h1>
      <Card background-color="primary" />
      <OfficeCard title="Headquarters" />
    </div>
  </main>
</template>

<script>
import Card from '@/components/cards/Card'
import OfficeCard from '../components/cards/OfficeCard'

export default {
  components: {
    Card,
    OfficeCard
  }
}
</script>