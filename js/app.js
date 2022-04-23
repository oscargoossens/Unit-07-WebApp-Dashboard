// ALERT DIALOG

const x = document.getElementById("x");
const alert = document.querySelector('.alert');

x.addEventListener('click', (e) => {
  alert.remove();
});

// LINE

const ctx = document.getElementById('traffic');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['26-11 / 22-11', '23-11 / 29-11', '30-11 / 05-12', '06-12 / 12-12', '13-12 / 20-12', '21-12 / 26-12', '27-12 / 03-01', '04-01 / 10-01', '11-01 / 17-01', '18-01 / 24-01', '25-01 / 30-01'],
        datasets: [{
            label: 'No. users visiting my website',
            data: [12, 19, 3, 5, 2, 3, 4, 6, 10, 12, 9],
            fill: 'origin',
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
      elements:{
        line:{
          capBezierPoints:true,
          tension:'0.3'
        }
      },
        animation:{
          tension:{
            duration: 1500,
            easing: 'ease-out',
            from: 0.8,
            to: 0.3,
            loop: false
          }
        },
        interactions:{
            mode:"index",
        },
        plugins:{
          legend:{
            display:false
          }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },

});

// BAR

const barChart = document.getElementById('barchart');
const bars = new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
            data: [75, 115,170,125, 225, 200, 100],
            backgroundColor: [
              '#7477bf'
            ],
            borderWidth: 1
        }]
    },
    options: {
        interactions:{
            mode:"index",
        },
        plugins:{
          legend:{
            display:false
          }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



// DOUGHNUT

const doughnut = document.getElementById('doughnut');
const dough = new Chart(doughnut, {
    type: 'doughnut',
    data: {
        labels: ["Desktop", "Tablet", "Mobile"],
        datasets: [{
            data: [4, 1, 1],
            fill: 'origin',
            backgroundColor: [
                '#7477bf',
                '#81C98F',
                '#5EB6C8'
            ]
        }]
    },
    options: {
      maintainAspectRatio:true,
        interactions:{
            mode:"index"
        },
        plugins:{
          legend:{
            boxWidth:'200px',
            position:'right',
            align: 'center',
            fullSize:'false'
          }
        }
    }
});

var LayoutItem ={
  width: '200px'
}
