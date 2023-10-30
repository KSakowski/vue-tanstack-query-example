import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

import { useParams } from '@/composables/useParams';

export function usePost() {
  const router = useRouter();
  const routeParams = useParams<{ id: string }>().value;
  const toast = useToast();

  const postId = routeParams?.id || '';

  function navigateToHomePage() {
    router.push({ name: 'home' });
  }

  function successToast() {
    toast.add({
      severity: 'success',
      detail: 'Important: resource will not be really updated on the server but it will be faked as if.',
      life: 3000,
    });
  }

  function errorToast() {
    toast.add({
      severity: 'error',
      detail: 'Something went wrong',
      life: 3000,
    });
  }

  return {
    postId,
    navigateToHomePage,
    successToast,
    errorToast,
  };
}
