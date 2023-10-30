<script setup lang="ts">
  import Logo from '@/components/layouts/logo.vue';
</script>

<template>
  <div class="container">
    <header class="mb-8 text-center">
      <Logo />
    </header>
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
</style>
