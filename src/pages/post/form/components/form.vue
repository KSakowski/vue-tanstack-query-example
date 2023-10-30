<script setup lang="ts">
  import Button from 'primevue/button';
  import InputText from 'primevue/inputtext';
  import Textarea from 'primevue/textarea';
  import { ref } from 'vue';

  import type { Post } from '@/types/posts';

  const props = withDefaults(
    defineProps<{
      post?: Post;
    }>(),
    {},
  );

  defineEmits(['save']);

  const form = ref<Post>({
    title: props.post?.title || '',
    body: props.post?.body || '',
  });
</script>

<template>
  <form class="flex flex-column">
    <div class="p-float-label mb-4">
      <InputText id="title" class="w-full" v-model="form.title" />
      <label for="title">Title</label>
    </div>

    <div class="p-float-label mb-4">
      <Textarea id="body" class="w-full" v-model="form.body" rows="5" cols="30" />
      <label for="body">Body</label>
    </div>

    <div class="m-auto">
      <Button @click="$emit('save', form)">Save</Button>
    </div>
  </form>
</template>
