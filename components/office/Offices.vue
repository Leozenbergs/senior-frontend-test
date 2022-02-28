<template>
  <div>
    <office-card v-for="office in offices" :key="office.id" :office="office" />
  </div>
</template>

<script>
import OfficeCard from "./OfficeCard"

export default {
  components: {
    OfficeCard
  },
  data() {
    return {
      offices: [
        { 
          id: 1,
          title: 'Headquarders',
          address: '3763 W. Dallas St.',
          name: 'Helena John',
          jobPosition: 'Software Tester',
          email: 'georgia.young@example.com',
          phone: '(808) 555-0111'
        },
        { 
          id: 2,
          title: 'Headquarders',
          address: '3763 W. Dallas St.',
          name: 'Helena John',
          jobPosition: 'Software Tester',
          email: 'georgia.young@example.com',
          phone: '(808) 555-0111'
        },
        { 
          id: 3,
          title: 'Headquarders',
          address: '3763 W. Dallas St.',
          name: 'Helena John',
          jobPosition: 'Software Tester',
          email: 'georgia.young@example.com',
          phone: '(808) 555-0111'
        },
        { 
          id: 4,
          title: 'Headquarders',
          address: '3763 W. Dallas St.',
          name: 'Helena John',
          jobPosition: 'Software Tester',
          email: 'georgia.young@example.com',
          phone: '(808) 555-0111'
        }
      ],
    }
  }
}
</script>