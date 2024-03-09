import querystring from 'querystring';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const ALBUMS_ENDPOINT = `https://api.spotify.com/v1/albums`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const ALBUM_IDS = ['382ObEPsp2rxGrnsizN5TX', '1A2GTWGtFfWp7KSQTwWOyo', '2noRn2Aes5aoNVsU6iWThc'];

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token
        })
    });
    return response.json();
};

export const getTopTracks = async () => {
    let { access_token } = await getAccessToken();
    console.log(access_token)
    return fetch(`${ALBUMS_ENDPOINT}?ids=${ALBUM_IDS}&market=ES`, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
};



