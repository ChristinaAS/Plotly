var mydata = {};

d3.json("samples.json").then((data) => {
    console.log(data);
    let sel = d3.select("#selDataset");
    let names = data.names
    names.forEach(name => {
        sel.append("option").text(name).property("value", name);
    });
});
    

    //console.log
    //mydata = data
function optionChanged(metaID) {
    metaDatas(metaID);
    charts(metaID);

}

function metaDatas(metaID) {    
    d3.json("samples.json").then((data) => {
        let metadata = data.metadata;
        let resultArray = metadata.filter(obj => obj.id == metaID)[0];
        //let result = Array[0];
        let metaPanel = d3.select("#sample-metadata");
        metaPanel.html("");
        Object.entries(resultArray).forEach((item) => {
            metaPanel.append("h6").text(item[0]+ " : "+item[1]);
        });
    });
}
function charts(metaID) {
    d3.json("samples.json").then((data) => {
        let samples = data.samples;
        let resultArray = samples.filter(obj => obj.id == metaID)[0];
        let sample_values = resultArray.sample_values;
        let otu_ids = resultArray.otu_ids;
        let otu_labels = resultArray.otu_labels;
    console.log(resultArray)

    let bar = d3.select("#bar");
    bar.html("");
    let barChart = [{
        x: sample_values.slice(0,10).reverse(),
        y: otu_ids.map(otuID => "OTU" + otuID).reverse(),
        text: otu_labels.slice(0,10),
        type: "bar",
        orientation: "h"
    }];
    
    var layout = {
            title: "Top 10 Belly Button Bacteria"
    };

    Plotly.newPlot("bar", barChart, layout);
})};