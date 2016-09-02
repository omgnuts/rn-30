import React, { PixelRatio } from 'react-native';
import Dimensions from 'Dimensions';

const Util = {
  ratio: PixelRatio.get(),
  pixel: 1 / PixelRatio.get(),
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  key: 'BDKHFSDKJFHSDKFHWEFH-REACT-NATIVE',

  post(url, data, callback) {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch(url, fetchOptions)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      callback(responseData);
    });
  },

};

export default Util;
