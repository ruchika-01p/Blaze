module.exports = () => {
  return `<!DOCTYPE html>
    <html>
        <head>
            <title>Report by Vision Voice</title>
            <style>
                table {
                    width: 80%;
                    table-layout: fixed;
                    text-align: center;
                    margin: 0 auto;
                }
                tr {
                    width: 33%;
                }
                td {
                    border: 1px solid black;
                    padding: 8px;
                }
            </style>
        </head>
        <body>
            <div>
                <div style="width: 70%; margin: 0 auto; line-height: 1.5x">
                    <h2 style="text-align: center">Report</h2>
                    <div style="margin-top: 50px">
                        <h3 style="text-align: justify;text-align-last: right;">Date:</h3>
                        <h3>Name:${name}</h3>
                        <h3>Age:${Age}</h3>
                        <h3>Gender:${Gender}</h3>
                        <h3>History (If any):${history}</h3>
                        <h3>Tone Test Results:${tonetestresults}</h3>
                        <table>
                            <tr>
                                <td style="font-weight: bold">Ear</td>
                                <td style="font-weight: bold">Hearing</td>
                                <td style="font-weight: bold">Issue</td>
                            </tr>
                            <tr>
                                <td style="font-weight: bold">Left</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td style="font-weight: bold">Right</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                        <h3>Hearing Capacity for:&nbsp;&nbsp;&nbsp;&nbsp; Left Ear:</h3>
                        </h3>
                        <h3 style="margin-left: 200px; line-height: 1">
                            Right Ear:
                        </h3>
                        <h3>
                            Need to consult doctor(in case of severe/mild issues):${needtoseedoc}
                        </h3>
                    </div>    
                    <br />
                    <table>
                        <caption>
                            <h3>Summary of Results</h3>
                        </caption>
                        <tr style="font-weight: bold">
                            <td>Age Brackets (Yr)</td>
                            <td>Average Max heard Frequency (Hz)</td>
                        </tr>
                        <tr>
                            <td>1-10</td>
                            <td>17800 Hz</td>
                        </tr>
                        <tr>
                            <td>11-20</td>
                            <td>17600 Hz</td>
                        </tr>
                        <tr>
                            <td>21-30</td>
                            <td>16200 Hz</td>
                        </tr>
                        <tr>
                            <td>31-40</td>
                            <td>15200 Hz</td>
                        </tr>
                        <tr>
                            <td>41-50</td>
                            <td>14600 Hz</td>
                        </tr>
                        <tr>
                            <td>51-60</td>
                            <td>12400 Hz</td>
                        </tr>
                        <tr>
                            <td>61-70</td>
                            <td>10600 Hz</td>
                        </tr>
                    </table>
                    <br />
                    <h3>
                        <span style="color: red">NOTE:</span> You are advised to
                        consult a doctor if your results do not match with the
                        standard ones shown.
                    </h3>
                </div>
            </div>
        </body>
    </html>
    
    `;
};
