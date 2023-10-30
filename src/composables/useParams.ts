import { computed } from 'vue'
import type { RouteParams } from 'vue-router';
import { useRoute } from 'vue-router';

export function useParams<P extends RouteParams>() {
  const route = useRoute();
  return computed(
    () => route.params as P
  )
}
