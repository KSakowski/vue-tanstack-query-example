<script setup lang="ts">
  import { useQuery } from '@tanstack/vue-query';
  import Button from 'primevue/button';
  import Column from 'primevue/column';
  import DataTable from 'primevue/datatable';
  import { useRouter } from 'vue-router';

  import PostsService from '@/services/postsService';

  const router = useRouter();
  const { isLoading, data } = useQuery({
    queryKey: ['posts'],
    queryFn: PostsService.getPosts,
  });

  function navigateToPostDetails(postId: string) {
    router.push({ name: 'postDetails', params: { id: postId } });
  }

  function navigateToPostForm(postId?: string) {
    postId ? router.push({ name: 'editPost', params: { id: postId } }) : router.push({ name: 'createPost' });
  }
</script>

<template>
  <article>
    <Button class="block ml-auto mb-2" size="small" @click="navigateToPostForm()">Add new post</Button>

    <DataTable :value="data" :loading="isLoading" tableStyle="min-width: 50rem">
      <Column field="id" header="Id" />
      <Column field="title" header="Title" />
      <Column :body-class="'text-right'">
        <template #body="{ data }">
          <Button size="small" @click="navigateToPostDetails(data?.id)">Details</Button>
          <Button class="ml-2" size="small" @click="navigateToPostForm(data?.id)">Edit</Button>
        </template>
      </Column>
      <template #empty>No posts found</template>
    </DataTable>
  </article>
</template>

<route lang="yaml">
name: home
meta:
  layout: default
</route>
