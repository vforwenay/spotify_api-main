# spotify_api
1. Make an account on https://developer.spotify.com/ and create app from there where you'll client_id and client_secret.
2. Then you need to authorise you app on spotify you can refer this doc `https://developer.spotify.com/documentation/general/guides/authorization/` to authorize your app.
3. After authorizing the app you'll get a refresh_token which you need to use for generating auth_token.
4. For generating auth_token all the code is set, you just need to put client_id, client_secret and refresh_token in `.env.local`
   and format should be like this
   `SPOTIFY_CLIENT_ID=<client_id>
   SPOTIFY_CLIENT_SECRET=<client_secret>
   SPOTIFY_REFRESH_TOKEN=<refersh_token>`
5. run `yarn dev` to start server
   then you can see the albums from spotify by hitting on 
  `localhost:3000/api/albums`
