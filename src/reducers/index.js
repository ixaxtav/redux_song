import { combineReducers } from 'redux'; 

const songReducer = () => {
  return [
      {title: 'Mamba', duration: "2:02"},
      {title: 'Con te partiro', duration: "2:45"},
      {title: 'Reptilia', duration: "3:12"},
      {title: 'Ave Maria', duration: "2:52"}
      
      
      ]  ;
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
    
});