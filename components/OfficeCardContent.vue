<template>
  <div class="divide-y">
    <div>
      <h2 class="text-title text-xl"><strong>{{ office.name }}</strong></h2>
      <p>{{ office.jobPosition }}</p>
      <a href="" class="text-blue">{{ office.email }}</a>
      <p>{{ office.phone }}</p>
    </div>
    <div class="flex justify-between items-center">
      <div class="icon is-left">
        <font-awesome-icon :icon="['fas', 'pencil']" />
      </div>
      <div class="icon is-right">
        <font-awesome-icon :icon="['fas', 'trash-can']" class="text-danger" />
      </div>
    </div>
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