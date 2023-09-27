import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const API = {
  fetchLike: useQuery({
    queryKey: ['likeCount'],
    queryFn: async () => {
      const { data } = await axios.get(
        'https://james-like.huyaotian881600.workers.dev/count',
      );
      return data;
    },
  }),
};

export { API };
