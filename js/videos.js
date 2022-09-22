window.addEventListener('DOMContentLoaded', () => {
    const vid0 = document.querySelector('#vid-0')
    const vid1 = document.querySelector('#vid-1')
    const vid2 = document.querySelector('#vid-2')
    const vid3 = document.querySelector('#vid-3')
    const vid4 = document.querySelector('#vid-4')
    const vid5 = document.querySelector('#vid-5')
    const vid6 = document.querySelector('#vid-6')
    const vid7 = document.querySelector('#vid-7')
    const vid8 = document.querySelector('#vid-8')
    const localArr = Object.keys(localStorage)
    const recentLocal = localArr[localArr.length-1]
    const recentTone = localStorage[recentLocal].slice(12,15)
    const searchType = findType()

    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${searchType}&key=AIzaSyCf9p4GkhwTsJWJmWruTAgUhTOjGDbouYI`)
        .then(response => response.json())
        .then(data => {
            vid0.src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`
            vid1.src = `https://www.youtube.com/embed/${data.items[1].id.videoId}`
            vid2.src = `https://www.youtube.com/embed/${data.items[2].id.videoId}`
            vid3.src = `https://www.youtube.com/embed/${data.items[3].id.videoId}`
            vid4.src = `https://www.youtube.com/embed/${data.items[4].id.videoId}`
            vid5.src = `https://www.youtube.com/embed/${data.items[5].id.videoId}`
            vid6.src = `https://www.youtube.com/embed/${data.items[6].id.videoId}`
            vid7.src = `https://www.youtube.com/embed/${data.items[7].id.videoId}`
            vid8.src = `https://www.youtube.com/embed/${data.items[8].id.videoId}`
        })
        function findType(){
            if (recentTone === 'neg'){
                return 'motivational meditation'
            } else {
                return 'meditation'
            }
        }
})