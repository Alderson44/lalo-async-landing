const API = "https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=0nhruhM5gJ0%26t%3D1556s"

const content = null || document.getElementById("content");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f44f1e8090mshd05825f5617a0a7p1352e7jsn7826ea4c1e14',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
  const response = await fetch(urlApi, options)
  const data = await response.json();
  return data;
}

(async() => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.items.map(video => `
    <div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${video.snippet.title}
      </h3>
    </div>
  </div>
    `).slice(0,4).join("")}
    
    `;
    content.innerHTML= view;
  }catch (error){
    console.log(error);
  }
})();

