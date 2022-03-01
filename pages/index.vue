<template>
  <main class="font-sans font-thin flex bg-background w-100 min-h-screen h-fit justify-center items-center">
    <div class="container mx-auto">
      <update-alert v-show="visibility" @close="closeAlert" />
      <h1 class="text-primary text-6xl text-center my-20">Offices</h1>
      <create-office-button />
      <offices />
    </div>
  </main>
</template>

<script>
import Offices from '@/components/office/Offices'
import UpdateAlert from '@/components/alerts/UpdateAlert'
import AlertMixins from '@/mixins/AlertMixin'
import CreateOfficeButton from '@/components/buttons/CreateOfficeButton'

export default {
  components: {
    Offices,
    UpdateAlert,
    CreateOfficeButton
  },
  mixins: [AlertMixins],
  data() {
    return {
      // 
    }
  }
}
</script>