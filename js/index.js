/* https://api.covid19api.com/country/uzbekistan/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z */
$(document).ready(function () {
    $.get("https://api.covid19api.com/country/uzbekistan/status/confirmed",
        function (data) {
            $(".loader").hide();
            $("#result").append(
                `
                    <h1>Welcome to ${data[0].Country}'s covid 19 API</h1>
                    <h3>You can see informations of covid 19 API below ↓</h3>
                `);
            $(".container").addClass("foo");
            $(".container").css("visibility", "visible");

            let keys = Object.keys(data[0]);
            $("#bar").append(
                `
                    <table>
                        <h4>Today the number of people caused by caronovirus increased to ${data[data.length - 1].Cases - data[data.length - 2].Cases}</h4>

                        <tr>
                            <th>${keys[0]}</th> <td>${data[0].CountryCode}</td>
                        </tr>
                        <tr>
                            <th>${keys[5]}</th> <td>${data[0].Lat}</td>
                        </tr>
                        <tr>
                            <th>${keys[6]}</th> <td>${data[0].Lon}</td>
                        </tr>
                        <tr>
                            <th>${keys[7]}</th> <td>${data[data.length - 1].Cases}</td>
                        </tr>
                        <tr>
                            <th>${keys[8]}</th> <td>${data[0].Status}</td>
                        </tr>
                        <tr>
                            <th>${keys[9]}</th> <td>${data[data.length - 1].Date}</td>
                        </tr>
                    </table>
                `
            )
        }
    );
});