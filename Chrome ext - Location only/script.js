document.getElementById('bruh').onclick = async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '033ea80b78mshdf4b6a903e54860p1c9370jsn8efbc93b4c3e',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };
    const loc = document.getElementById("locationcity").value;
    const start = document.getElementById("startdate").value;
    const end = document.getElementById("enddate").value;

    var records = [];
    for (var i = 0; i < 50; i++) {
        var results = 'https://concerts-artists-events-tracker.p.rapidapi.com/location?name=';
        const url = results
            .concat(loc)
            .concat('&minDate=')
            .concat(start)
            .concat('&maxDate=')
            .concat(end)
            .concat('&page=')
            .concat(i);
        const res = await fetch(url, options);
        const record = await res.json();
        records.push(...record.data);
    }

    const concertsList = records.map(item => `<li>${item.name}</li>`).join('');
    const dateList = records.map(item => `<li>${item.endDate}</li>`).join('');
    const locationList = records.map(item => `<li>${item.location.name}</li>`).join('');

    document.getElementById("concerts").innerHTML = concertsList;
    document.getElementById("date").innerHTML = dateList;
    document.getElementById("location").innerHTML = locationList;
}
