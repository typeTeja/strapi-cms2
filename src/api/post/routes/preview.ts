export default {
    routes: [
      {
        method: 'GET',
        path: '/posts/preview',
        handler: 'post.preview',
        config: {
          auth: false,
          policies: [],
        },
      },
    ],
  };