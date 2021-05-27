
const image = document.querySelector(".nasapod");
const apiKey = 'iBNS2IdLX6F0cImO8hvXA5AIMR1B3kf9pK1C5avq';
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const date = document.querySelector(".date");
const description = document.querySelector(".description")


const picture = fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
                  .then(response => response.json())
                  .then(function(data){
                    image.src = data.url;
                    title.textContent = `"${data.title}"`;
                    author.textContent= data.copyright;
                    date.textContent = data.date;
                    description.textContent = data.explanation;
                  })
                  