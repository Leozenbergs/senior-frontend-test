<template>
  <card :backgroundColor="backgroundColor">
    <template v-slot:header>
      <office-card-header
        :office="office"
        :expanded="expanded"
        @expand="expand()"
        @close="close()"
      />
    </template>
    <template v-slot:content>
      <office-card-content
        v-show="expanded" 
        :office="office"
        :class="[
          'relative',
          'bg-white',
          'p-6',
          'rounded-b-lg',
          '-mt-2',
          'z-0',
          'shadow-2xl',
          'shadow-inner',
          'shadow-black',
          'overflow-hidden',
          'animate-fadeIn',
          expanded ? ['transition-all', 'duration-1000', 'ease-in-out'] : '']
        "
      />        
    </template>
  </card>
</template>

<script>
  import Card from '@/components/cards/Card'
  import OfficeCardHeader from './OfficeCardHeader'
  import OfficeCardContent from './OfficeCardContent.vue'

export default {
  components: {
    Card,
    OfficeCardHeader,
    OfficeCardContent
  },
  props: {
    office: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      expanded: false
    };
  },
  computed: {
    backgroundColor() {
      return this.expanded ? 'gray': 'white'
    }
  },
  methods: {
    expand() {
      this.expanded = true
    },
    close() {
      this.expanded = false
    }
  }
};
</script>