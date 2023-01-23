# funbox_API

## How it works
<p>This is the API for a platform where you can create different wishlists for your movies of choice. You can register different genres of movies in different platforms. You can create a wishlist to see alone, with your partner, with your friends, but most importantly... Have fun! 🥳🥳</p>
<br/>

## Description of routes
<br/>

### /genres
<p>Here you can insert your favorite genres! 😀</p>
<p>Rules: you can't post genres with the same name</p>
<p>POST: /genres</p>
<p>Body: { "name": "drama" }</p>

<p>Here you can see your genres! 👀</p>
<p> GET: /genres </p>
<p>You will receive an answer like this: [
  {
    "id": 1,
    "name": "drama"
  },
  {
    "id": 2,
    "name": "horror"
  }
]</p>
<br/>

### /platforms
<p>Here you can insert your favorite platforms! 😀</p>
<p>Rules: you can't post platforms with the same name</p>
<p>POST: /platforms</p>
<p>Body: { "name": "netflix" }</p>

<p>Here you can see your platforms! 👀</p>
<p> GET: /platforms </p>
<p>You will receive an answer like this: [
  {
    "id": 1,
    "name": "netflix"
  },
  {
    "id": 2,
    "name": "youtube"
  }
]</p>
<br/>

### /usernames
<p>Here you can insert your usernames for your different wishlists! 😀</p>
<p>Rules: you can't post usernames with the same name</p>
<p>POST: /usernames</p>
<p>Body: { "name": "mel" }</p>

<p>Here you can see your usernames! 👀</p>
<p> GET: /usernames </p>
<p>You will receive an answer like this: [
  {
    "id": 1,
    "name": "mel",
    "createdAt": "2023-01-22T03:00:00.000Z"
  },
  {
    "id": 2,
    "name": "pedro",
    "createdAt": "2023-01-22T03:00:00.000Z"
  }
]</p>
<br/>

### /movies
<p>Here you can insert your favorite movies! 😀</p>
<p>Rules: you can't post movies with the same name, you have to register valid platforms and valid genres</p>
<p>POST: /movies</p>
<p>Body: {
    "name": "Too All The Boys I Loved",
    "genreId": 3,
    "platformId": 1
  }</p>

<p>Here you can see your movies! 👀</p>
<p> GET: /movies </p>
<p>You will receive an answer like this: [
  {
    "id": 1,
    "name": "Too All The Boys I Loved",
    "genreId": 3,
    "platformId": 1
  },
  {
    "id": 2,
    "name": "Superbad",
    "genreId": 6,
    "platformId": 1
  }
]</p>

<p>Here you can see the quantity of movies by genre! 👀</p>
<p> GET: /moviesquantitybygenre </p>
<p>You will receive an answer like this: [
  {
    "genre": "horror",
    "numberOfMovies": "1"
  },
  {
    "genre": "romance",
    "numberOfMovies": "2"
  }
]</p>
<br/>

### /wishlist
<p>Here you can insert your favorite movies in your wishlist! 😀</p>
<p>Rules: you can't post the same movie in your wishlist, you have to register a valid movie and a valid username</p>
<p>POST: /wishlist</p>
<p>Body: {
  "usernameId": 1,
  "movieId": 6
}</p>

<p>Here you can see your movies according to the username you insert in the route! 👀</p>
<p> GET: /wishlist/:username </p>
<p>You will receive an answer like this: [
  {
    "id": 2,
    "username": "mel",
    "movie": "Too All The Boys I Loved",
    "genre": "romance",
    "platform": "netflix",
    "comment": "nothing to say",
    "status": "unseen"
  },
  {
    "id": 4,
    "username": "mel",
    "movie": "It",
    "genre": "horror",
    "platform": "netflix",
    "comment": "nothing to say",
    "status": "unseen"
  }
]</p>

<p>Here you can update the status of your movie and add a comment (if you want)! 👀</p>
<p>Rules: you have to update a movie that is in your wishlist</p>
<p> PUT: /wishlist </p>
<p>Body: {
  "id": 2,
  "comment": "soooo romantic!"
}</p>

<p>Here you can delete a movie according to the id you insert in the route! 👀</p>
<p>Rules: you have to delete a movie that is in your wishlist</p>
<p> GET: /wishlist/:id </p>

<br/>