const axios = require('axios');
const { exec } = require('child_process');


// Function to get the access token from gcloud
function getAccessToken() {
  return new Promise((resolve, reject) => {
    exec('gcloud auth print-access-token', (error, stdout) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout.trim());
      }
    });
  });
}

// Replace with your actual file path and data
const endpointId = '1021514471924826112';
const projectId = '234569330265';
const inputData = '/Users/hellevete/Desktop/EY_Techathon/agroProject/client/src/InputFeatures.json';

async function makeApiCall(inputData) {
  try {
    const accessToken = await getAccessToken();
    //const inputDataFile = require(inputData); // Assuming the JSON file is a module

    const response = await axios({
      method: 'post',
      url: `https://us-central1-aiplatform.googleapis.com/v1/projects/${projectId}/locations/us-central1/endpoints/${endpointId}:predict`,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      data: inputData
    });

    function normalizeValue(x, minX, maxX) {
      // Clamp x to ensure it is within the min and max bounds
      let xClamped = Math.max(minX, Math.min(x, maxX));
  
      // Normalize x to the range [300, 600]
      let normalizedX = 300 + (xClamped - minX) * (600 - 300) / (maxX - minX);
      return normalizedX;
  }
  
    function normalizeValue(x, minX, maxX) {
      // First, clamp x to the original expected bounds
      let xClamped = Math.max(minX, Math.min(x, maxX));
  
      // Normalize x to the range [300, 600]
      let normalizedX = 300 + (xClamped - minX) * (600 - 300) / (maxX - minX);
      return normalizedX;
  }
  

    const value = normalizeValue(response.data.predictions[0].value,100,1000)
    console.log(response.data.predictions[0].value)

    return value
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}
module.exports = {makeApiCall}
//makeApiCall();
