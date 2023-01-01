const weekchart = document.querySelector('.week-chart');

const datas = fetch('./js/data.json')
.then(respo => respo.json())
.then(function(products) {
    for (let product of products) {
        const days = document.createElement('div');
        const div = document.createElement('div');
        const spans = document.createElement('span');
        console.log(product.day);
        console.log(product.amount);
        spans.textContent = product.day ;
        div.style.height =product.amount/7  + 'em';
        div.style.backgroundColor = 'hsl(10, 79%, 65%)';
        div.style.padding ='0px 20px';
        div.style.border='1px solid hsl(10, 79%, 65%)';
        div.style.borderRadius = '5px'
        days.append(div);
        days.append(spans);
        weekchart.append(days);
        if (product.day == 'wed') {
            div.style.backgroundColor = 'hsl(186, 34%, 60%)';
            div.style.border='1px solid hsl(186, 34%, 60%)';
        }
        
    }

});


