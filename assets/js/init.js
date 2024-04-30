// dom elements
const projectContainer = document.querySelector('.project-container .row');

// fetching the data
const url = '/assets/data/data.json';

const loadData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data.AllReactProject);
};
const displayData = (allData) =>{
    allData.forEach((data) => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <div class="card-head">
                    <img
                    src="${data.image}"
                    class="card-img-top"
                    alt="${data.title}"
                    />
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title fw-bold">${data.title}</h5>
                </div>
            </div>
        `
        projectContainer.appendChild(div);
    });
}

loadData()
