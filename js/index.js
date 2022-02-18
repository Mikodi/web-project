import '../styles.scss'
import {drowPhotos, drowAudio, drowVideo} from './drowItems.js'
import items from './items.js'
import audioFiles from './audioFiles.js'
import videoFiles from './videoFiles.js';

const photoCards = document.getElementById('photo-cards');
const audioBlock = document.getElementById('audio');
const videoBlock = document.getElementById('video');


items.map((item) => {
    photoCards.insertAdjacentHTML('beforeend', drowPhotos(item));
})
    
audioFiles.map((audio) => {
    audioBlock.insertAdjacentHTML('beforeend',drowAudio(audio));
})
    
videoFiles.map((video) => {
    videoBlock.insertAdjacentHTML('beforeend',drowVideo(video));
})









