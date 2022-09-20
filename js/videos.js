window.addEventListener('DOMContentLoaded', () => {
    fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=meditation&key=AIzaSyCf9p4GkhwTsJWJmWruTAgUhTOjGDbouYI')
    .then(response => response.json())
    .then(data => console.log(data.items))
})