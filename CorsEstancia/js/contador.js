const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/hit/cors.ip.gob.hn/awesomeclick')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
} 

