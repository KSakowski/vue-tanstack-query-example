import { apiClient } from '@/plugins/axios';
import type { Post } from '@/types/posts';

export default class PostsService {
  static async getPosts(): Promise<Post[]> {
    return (await apiClient.get<Post[]>('posts')).data;
  }

  static async getPostDetails(postId: string): Promise<Post> {
    return (await apiClient.get<Post>(`posts/${postId}`)).data;
  }

  static async addPost(form: Post): Promise<Post> {
    return (await apiClient.post<Post>(`posts`, { ...form })).data;
  }

  static async editPost(postId: string, form: Post): Promise<Post> {
    return (await apiClient.put<Post>(`posts/${postId}`, { ...form })).data;
  }
}
