# JavaScript Dashboard 5 Channels 1000 pps

![JavaScript Dashboard 5 Channels 1000 pps](dashboard5ch-darkGold.png)

This demo application belongs to the set of examples for LightningChart JS, data visualization library for JavaScript.

LightningChart JS is entirely GPU accelerated and performance optimized charting library for presenting massive amounts of data. It offers an easy way of creating sophisticated and interactive charts and adding them to your website or web application.

The demo can be used as an example or a seed project. Local execution requires the following steps:

-   Make sure that relevant version of [Node.js](https://nodejs.org/en/download/) is installed
-   Open the project folder in a terminal:

          npm install              # fetches dependencies
          npm start                # builds an application and starts the development server

-   The application is available at _http://localhost:8080_ in your browser, webpack-dev-server provides hot reload functionality.


## Description

This example shows a dashboard with multiple progressive channels of data points using progressive line series.

The dashboard allows rendering of multiple scenes in a single view port highly efficiently with minimal memory resources. In our case, the rows of dashboard grid are filled with individual charts, where each represents the data channel.

**(!) Using `Dashboard` is no longer recommended for new applications. Find latest recommendations here: https://lightningchart.com/js-charts/docs/basic-topics/grouping-charts/**

## Progressive series

Progressive series are highly optimized series for the rendering of high-volume and high-density data while keeping full interactivity.
These optimizations are enabled by selecting a **_DataPattern_**, which needs to be specified during the creation of the series instance and cannot be changed further for performance related reasons. _More detailed description was explained in previous examples._


## API Links

* [Dashboard]
* [XY cartesian chart]
* [Axis]
* [Line series]
* [Data patterns]
* [Solid LineStyle]


## Support

If you notice an error in the example code, please open an issue on [GitHub][0] repository of the entire example.

Official [API documentation][1] can be found on [LightningChart][2] website.

If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][3] (tagged lightningchart).

If you think you found a bug in the LightningChart JavaScript library, please contact sales@lightningchart.com.

Direct developer email support can be purchased through a [Support Plan][4] or by contacting sales@lightningchart.com.

[0]: https://github.com/Arction/
[1]: https://lightningchart.com/lightningchart-js-api-documentation/
[2]: https://lightningchart.com
[3]: https://stackoverflow.com/questions/tagged/lightningchart
[4]: https://lightningchart.com/support-services/

© LightningChart Ltd 2009-2022. All rights reserved.


[Dashboard]: https://lightningchart.com/js-charts/api-documentation/v7.1.0/classes/Dashboard.html
[XY cartesian chart]: https://lightningchart.com/js-charts/api-documentation/v7.1.0/classes/ChartXY.html
[Axis]: https://lightningchart.com/js-charts/api-documentation/v7.1.0/classes/Axis.html
[Line series]: https://lightningchart.com/js-charts/api-documentation/v7.1.0/classes/LineSeries.html
[Data patterns]: https://lightningchart.com/js-charts/api-documentation/v7.1.0/interfaces/DataPattern.html
[Solid LineStyle]: https://lightningchart.com/js-charts/api-documentation/v7.1.0/classes/SolidLine.html

