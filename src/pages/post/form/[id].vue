<script setup lang="ts">
  import { useMutation, useQuery } from '@tanstack/vue-query';
  import Toast from 'primevue/toast';

  import { usePost } from '@/composables/post';
  import PostsService from '@/services/postsService';
  import type { Post } from '@/types/posts';

  import Form from './components/form.vue';

  const { postId, successToast, navigateToHomePage } = usePost();

  const { isLoading, data } = useQuery(['post', postId], () => PostsService.getPostDetails(postId));
  const { mutate } = useMutation({
    mutationFn: (form: Post) => PostsService.editPost(postId, form),
    onSuccess: () => successToast(),
  });
</script>

<template>
  <article>
    <Form :key="isLoading?.toString()" :post="data" @save="form => mutate(form)" />
    <Toast @life-end="navigateToHomePage" />
  </article>
</template>

<route lang="yaml">
name: editPost
meta:
  layout: default
</route>
