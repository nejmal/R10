// what do we need to create context?
// 1. we will need to import below
// whenever we use react, we will need to import it first
import React, { Component, createContext } from 'react';
// we want to import all the methods we made in models.js
import { setFave, getFaves, removeFave } from '../config/models';

// 2. now we want to create context
// no need to say React.createContext() since it was deconstructed above when importing it
const FavesContext = createContext();

// 3. create a provider class, we will wrap our app with this so all the screens can have reference to what is created here
//  we can consume everything from this provider
class FavesProvider extends Component {
  constructor(props) {
    super(props);
    // 4.what do we want to store in our state? fave ids
    this.state = { faveIds: [] };
  }

  // 7. use life cycle method to use getFaveIds
  componentDidMount() {
    // call getFaveIds
    // use this since it is inside of the class
    this.getFaveIds();
  }

  // 6. we need to write method to get Faves
  getFaveIds = async () => {
    try {
      // create a variable to store all of the faves
      const allFaves = await getFaves();
      // we need to map over allFaves since it is an array
      // - we just need the ids so that is why we use [0] to access it
      const faveIds = allFaves.map(fave => fave[0]);
      // how do we set state for fave ids? use set state
      // since the key and value are the same, no need to set key and value {faveIds: faveIds}, can use {faveIds}
      this.setState({ faveIds });
    } catch (error) {
      console.log(error);
    }
  };

  // 8. write method to set Faves
  setFaveId = async faveId => {
    try {
      await setFave(faveId);
      // how do we update our app? call method getFavesIds
      this.getFaveIds();
    } catch (error) {
      console.log(error);
    }
  };

  // 9. write method to remove Fave
  removeFaveId = async faveId => {
    try {
      await removeFave(faveId);
      // once we remove the fave, we need to update the app
      this.getFaveIds();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      // 5. what do we want to return? FavesContext provider
      // since it is a provider, make sure to put .Provider
      // must have a value and we will write js, need {}
      // - we want to put in an object so use another set of {}
      // we want all the states so we will use spread operator
      // 10. we need to pass setFaveId and removeFaveId
      <FavesContext.Provider
        value={{
          ...this.state,
          setFaveId: this.setFaveId,
          removeFaveId: this.removeFaveId
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

/**
 * Session:
 * Remove from Faves button is initially shown as Save to Faves
 *
 * NOTE:
 * Schedule fave hearts are not clickable, they just appear if they are faves
 */

// 11. export our class so we can use it elsewhere
export { FavesProvider };

// use export default since it is the main thing we are exporting and export default says this is the end of the file
export default FavesContext;
