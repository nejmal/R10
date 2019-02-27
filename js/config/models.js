// for defining our Realm db schema later --- we will not be using Realm DB
// anything we write in our db must go here
// 1. import AsyncStorage
import { AsyncStorage } from 'react-native';

// 2. write sth in our db
/**
 * what are we doing here?
 * - we want to save favourites
 * - favourites = sessions
 * in our db, we want to store the id and the time it was faved on
 * - session id = fave id
 * */
export const setFave = async faveId => {
  try {
    // we need faveId to be unique and dynamic so use string temporal literals
    // need key as the first argument
    // second key is what we want to store
    // - time is an object but we cannot put objects as the second argument so we must turn it into a string by using JSON.stringify()
    await AsyncStorage.setItem(
      `${faveId}`,
      JSON.stringify({
        id: faveId,
        faveTime: new Date()
      })
    );
  } catch (error) {
    console.log(error);
  }
};

// 2. get everything from our db
export const getFaves = async () => {
  try {
    // no need to write a callback since we are doing async await
    // we will be getting an answer right away and we will need to store those keys somewhere
    // - create a variable to store the keys
    const faveKeys = await AsyncStorage.getAllKeys();
    // now that we have all the keys, how do we get all the items? use multiGet()
    return await AsyncStorage.multiGet(faveKeys);
  } catch (error) {
    console.log(error);
  }
};

// 3. remove/delete one item from faves
export const removeFave = async faveId => {
  try {
    // we don't need a callback since we are using async await
    await AsyncStorage.removeItem(`${faveId}`);
  } catch (error) {
    console.log(error);
  }
};

// now that we have these, how do we use it anywhere?
// we will need to use context
