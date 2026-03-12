import { createClient } from 'contentful';

// Replace with your Contentful space and access token
const client = createClient({
  space: 'dvp8jslbykb0', // Your Contentful Space ID
  accessToken: 'fxzat1Tme-KxwBeONHFFfz2FEJ1Ma56--rMxJ9GCKCU', // Your Contentful Access Token
});

export default client;
