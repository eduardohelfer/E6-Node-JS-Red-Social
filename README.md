# Red Social API

### Develpment Url base: http://localhost:9000/api/v1
### Production Url base: https://social-net-one.onrender.com/api/v1

- /auth
  - /login -> Login con las credenciales del usuario para autenticar

- /posts
  - /me -> Mis propias publicaciones
  - /user/:id -> Publicaciones de usuarios en particular
  - /:id -> Una publicación en especifico
  - /:id/comments -> Los comentarios de una publicación en especifico
  - /:id/likes -> Los likes de una publicación en especifico

- /follows
  - /:id -> Lista de usarios a los que sigo
- /followers
  - /:id -> Lista de usarios que me siguen

- /users
  - /:id -> Un usuario en especifico
  - /:id/follow -> Post - para seguir a un usuario

- /users
  - /me -> Mi informacion de usuario
  
- /users
  - /me/follows -> Lista de usarios a los que sigo
  - /me/followers -> Lista de usarios que me siguen

- /posts
  - /:id  -> Una publicación en especifico
  - /:id/likes -> Get para recoger estadística, post para dar Like
  - /:id/comments -> Get de toda la lista y post para agregar un comentario

### Controllers Posts
- [x] findAllPosts
- [x] findPostById
- [x] createPost
- [x] updatePost
- [x] removePost
- [ ] findMyPosts
- [ ] findPostsByUser

### Services Posts
- [x] getAllPosts
- [x] getPostById
- [x] postNewPost 
- [x] patchPost
- [x] deletePost
- [ ] getMyPosts
- [ ] getPostsByUser

### Controllers Follows
- [x] followUser
- [x] findMyFollowers
- [x] findMyFollowings

### Services Follows
- [x] postFollower
- [x] getMyFollowers
- [x] getMyFollowings

### Controllers Likes
- [x] findAllLikesFromPost
- [x] createLike (Togle)

### Services Likes
- [x] getAllLikesByPost
- [x] postLike (Togle)

### Controllers Comments
- [x] findAllCommentsFromPost
- [x] createComment
- [ ] editComment
- [ ] removeComment

### Services Comments
- [x] getAllLikesByPost
- [x] postLike
- [ ] patchComment
- [ ] deleteComment

### Swagger
- [ ] https://editor.swagger.io/
 
### Testing
- [ ] https://academlo.notion.site/Mocha-y-Chai-accab4aab477410e9bfd97d84c101e59

