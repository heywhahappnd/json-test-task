'use strict';

window.onload = function() {
	const xhr = new XMLHttpRequest();

	xhr.open("GET", "http://jsonplaceholder.typicode.com/posts", true);

	xhr.send();
	xhr.onreadystatechange = function() {
		
		if (xhr.readyState !== 4) return;

		if (xhr.status !== 200) {
			console.log(xhr.status + xhr.statusText);
			return;
		}

		const apiData = JSON.parse(xhr.responseText);
		const dataList = document.querySelector(".data-block__list");
		
		for (let i = 0; i < apiData.length; i++) {
			let listItem = document.createElement("li");
			
			for(let key in apiData[i]) {
				listItem.innerHTML += `${key}:${apiData[i][key]};\t`;
			}

			dataList.appendChild(listItem);
		}
	}
}