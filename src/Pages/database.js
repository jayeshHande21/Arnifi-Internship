export const data = {
  Users: [
    {
      id: 1,
      username: "user1",
      password: "password1",
      name: "User One",
      posts: [
        {
          id: 101,
          image_url:
            "https://i.postimg.cc/y89VRm4g/photo-6253271546466516024-y.jpg",
          description: "This is my first post!",
          likeCount: 1221,
          comments: [
            {
              id: 1001,
              user_id: 2,
              text: "Great photo!"
            },
            {
              id: 1002,
              user_id: 3,
              text: "Love the colors!"
            }
          ]
        },
        {
          id: 102,
          image_url:
            "https://i.postimg.cc/wTcKdgNP/photo-6253271546466516033-x.jpg",
          description: "Another awesome photo!",
          likeCount: 3421,
          comments: []
        }
      ]
    },
    {
      id: 2,
      username: "user2",
      password: "password2",
      name: "User Two",
      posts: [
        {
          id: 201,
          image_url:
            "https://i.postimg.cc/NMgYWFJd/photo-6253271546466516034-x.jpg",
          description: "Just chilling...",
          likeCount: 7421,
          comments: [
            {
              id: 2001,
              user_id: 1,
              text: "Looks like a great day!"
            }
          ]
        }
      ]
    }
  ]
};
