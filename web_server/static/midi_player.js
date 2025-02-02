const axios = require('axios');

const encodedParams = new URLSearchParams();
encodedParams.set('trackId', '<REQUIRED>');
encodedParams.set('accessToken', '<REQUIRED>');
encodedParams.set('comment', '<REQUIRED>');

const options = {
  method: 'POST',
  url: 'https://soundcloudstefan-skliarovv1.p.rapidapi.com/addTrackComment',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'Soundcloudstefan-skliarovV1.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}