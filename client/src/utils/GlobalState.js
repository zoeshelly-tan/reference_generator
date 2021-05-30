import React, { createContext, useReducer, useContext } from "react";
import {
  // SET_CURRENT_POST,
  // REMOVE_POST,
  // UPDATE_POSTS,
  // ADD_POST,
  // ADD_FAVORITE,
  // UPDATE_FAVORITES,
  // REMOVE_FAVORITE,
  ADD_REFERENCE,
  LOGIN,
  LOADING
} from "./action";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    // case SET_CURRENT_POST:
    //   return {
    //     ...state,
    //     currentPost: action.post,
    //     loading: false
    //   };

    case LOGIN:
      return {
        ...state,
        users: state.users.filter((user) => {
          return user._id !== action._id;
        })
      };

    case ADD_REFERENCE:
      return {
        ...state,
        references: [action.reference, ...state.references],
        loading: false
      };

    // case REMOVE_REFERENCE:
    //   return {
    //     ...state,
    //     references: state.references.filter((reference) => {
    //       return reference._id !== action._id;
    //     })
    //   };

    // case ADD_FAVORITE:
    //   return {
    //     ...state,
    //     favorites: [action.post, ...state.favorites],
    //     loading: false
    //   };

    // case UPDATE_FAVORITES:
    //   return {
    //     ...state,
    //     favorites: [...state.favorites],
    //     loading: false
    //   };

    // case REMOVE_FAVORITE:
    //   return {
    //     ...state,
    //     favorites: state.favorites.filter((post) => {
    //       return post._id !== action._id;
    //     })
    //   };

    case LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    currentPost: {
      _id: 0,
      firstNameRef: "",
      lastNameRef: "",
      yearRef: "",
      titleRef: "",
      editionRef: "",
      cityPublishedRef: "",
      publisherRef: "",
      pageRef: "",
    },
    favorites: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
