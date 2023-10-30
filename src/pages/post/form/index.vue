<script setup lang="ts">
  import { useMutation } from '@tanstack/vue-query';
  import Toast from 'primevue/toast';

  import { usePost } from '@/composables/post';
  import PostsService from '@/services/postsService';
  import type { Post } from '@/types/posts';

  import Form from './components/form.vue';

  const { successToast, navigateToHomePage } = usePost();

  const { mutate } = useMutation({
    mutationFn: (form: Post) => PostsService.addPost(form),
    onSuccess: () => successToast(),
  });
</script>

<template>
  <article>
    <Form @save="(form) => mutate(form)" />
    <Toast @life-end="navigateToHomePage" />
  </article>
</template>

<route lang="yaml">
name: createPost
meta:
  layout: default
</route>
