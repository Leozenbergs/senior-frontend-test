<template functional>
  <div class="pb-4 leading-loose" >
    <h2 class="text-title text-xl"><strong>{{ props.office.name }}</strong></h2>
    <p>{{ props.office.jobPosition }}</p>
    <a href="" class="text-blue">{{ props.office.email }}</a>
    <p>{{ props.office.phone }}</p>
  </div>
</template>

<script>
export default {
  props: {
    office: {
      type: Object,
      default: () => {}
    }
  }
  
}
</script>