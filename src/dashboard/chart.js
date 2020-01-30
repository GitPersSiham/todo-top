let ctx = document.getElementById('myChart').getContext('2d');

let cpuDataIntensity = {
    label: 'CPU Intensity',
    data: [],
    backgroundColor: 'rgba(0, 99, 132, 0.6)',
    borderWidth: 0,
    yAxisID: "y-axis-density"
};

let cpuDataNumberOfCore = {
    label: 'Number of core',
    data: [],
    backgroundColor: 'rgba(99, 132, 0, 0.6)',
    borderWidth: 0,
    yAxisID: "y-axis-core"
};

let globalData = {
    labels: [],
    datasets: [cpuDataIntensity, cpuDataNumberOfCore]
};

let chartOptions = {
    scales: {
        xAxes: [{
            barPercentage: 1,
            categoryPercentage: 0.6
        }],
        yAxes: [{
            id: "y-axis-density"
        }, {
            id: "y-axis-core"
        }]
    }
};

let chart = new Chart(ctx, {
    type: 'bar',
    data: globalData,
    options: chartOptions
});

let socket = io.connect("http://localhost:3000");
let count = 0;
socket.on('cpu usage', (content) => {
    globalData.datasets[0].data.push(content.cpuPercentage);
    globalData.datasets[1].data.push(content.numberOfCore);
    globalData.labels[count] = "User " + count;
    count++;
    chart.update();
});
