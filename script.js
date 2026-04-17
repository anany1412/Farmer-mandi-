// LINE CHART
new Chart(document.getElementById("chart"), {
    type: 'line',
    data: {
        labels: ["20 Apr","25 Apr","30 Apr","5 May","10 May"],
        datasets: [{
            data: [1500,2000,1800,2500,2100],
            borderColor:"green",
            fill:false
        }]
    }
});

// BAR CHART
new Chart(document.getElementById("predictionChart"), {
    type: 'bar',
    data: {
        labels: ["Mon","Tue","Wed","Thu","Fri"],
        datasets: [{
            data: [2200,2300,2400,2500,2600],
            backgroundColor:"green"
        }]
    }
});
