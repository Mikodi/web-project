export function drowPhotos(item) {
    return `
    <div class="block_item"><img class="photo" src=${item.item} alt="photo">
    <p class="text">${item.name}</p></div>`
}

export function drowAudio(audio) {
    return `
    <div class="block_item">
    <audio controls>
    <source src="${audio.item}" type="audio/mpeg">
    </audio>
    <p class="text">${audio.name}</p></div>`
}

export function drowVideo(video) {
    return `
    <div class="block_item">
    <video controls width="300" height="200">
    <source src="${video.item}" type="video/webm">
    </video>
    <p class="text">${video.name}</p></div>`
}
