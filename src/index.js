/**
 * LightningChartJS example that showcases usage of Dashboard with multiple channels and axis scroll strategies.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Extract required parts from LightningChartJS.
const {
    lightningChart,
    AxisScrollStrategies,
    emptyFill,
    DataPatterns
} = lcjs

// Import data-generator from 'xydata'-library.
const {
    createProgressiveRandomGenerator
} = require('@arction/xydata')

const channels = ["Ch 1", "Ch 2", "Ch 3", "Ch 4", "Ch 5"]
const channelCount = channels.length

// Create Dashboard.
const grid = lightningChart().Dashboard({
    numberOfRows: channelCount,
    numberOfColumns: 1
})

// Map XY-charts to Dashboard for each channel.
const charts = channels.map((channelName, i) => {
    const chart = grid.createChartXY({
        columnIndex: 0,
        rowIndex: i,
        columnSpan: 1,
        rowSpan: 1
    })
        // Hide titles because we have very little space.
        .setTitleFillStyle(emptyFill)

    // Configure X-axis of chart to be progressive and have nice interval.
    chart.getDefaultAxisX()
        .setScrollStrategy(AxisScrollStrategies.progressive)
        .setInterval(0, 10000) // 10,000 millisecond axis

    return chart
})

// Map progressive line series for each chart.
const series = charts.map((chart, i) =>
    chart.addLineSeries({ dataPattern: DataPatterns.horizontalProgressive })
         // Destroy automatically outscrolled data (old data becoming out of X axis range) 
        .setMaxPointCount(10000)
        .setStrokeStyle((lineStyle) => lineStyle.setThickness(1.0))
)

// Configure a common data-generator for all channels.
const dataGenerator = createProgressiveRandomGenerator()
    .setNumberOfPoints(3600)

// Setup a continuous data-stream for each series.
series.forEach((value, i) =>
    dataGenerator
        .generate()
        .setStreamRepeat(true)
        // Use 1000 points / sec data rate (1 millisecond interval for data points). 
        // Requesting generator to give an array of data points after every 15 ms. 
        // As using 1 millisecond data point interval, it means 15 datapoints
        // have to be generated every round, 1 for each millisecond. 
        .setStreamBatchSize(15) // 15 points per batch 
        .setStreamInterval(15) // interval in milliseconds  
        .toStream()
        .forEach((data) => value.add(data))
)
