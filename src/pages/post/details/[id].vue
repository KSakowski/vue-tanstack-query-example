<script setup lang="ts">
  import { useQuery } from '@tanstack/vue-query';
  import Card from 'primevue/card';

  import { usePost } from '@/composables/post';
  import PostsService from '@/services/postsService';

  const { postId } = usePost();

  const { data } = useQuery(['post', postId], () => PostsService.getPostDetails(postId));
</script>

<template>
  <Card>
    <template #title>{{ data?.title }}</template>
    <template #content>
      <p class="m-0">
        {{ data?.body }}
      </p>
    </template>
  </Card>
</template>

<route lang="yaml">
name: postDetails
meta:
  layout: default
</route>
