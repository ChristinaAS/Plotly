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
    d3.json("samples.json").then((data) => {
        let metadata = data.metadata;
        let Array = metadata.filter(obj => obj.id == metaID);
        let result = Array[0];
        let metaPanel = d3.select("#sample-metadata");
        metaPanel.html("");
        Object.entries(result).forEach((item) => {
            metaPanel.append("h6").text(item[0]+ ": "+item[1]);
        });
    });
}




    // mydata.metadata.filter( )
//    mydata.samples.filter()

//    sorttableData = plotObject.otu_ids.map(obj, index)
//    => {
//        return {
//            otu_id:obj,
//            sample_value:plotObject.sample_values
//            [index]
//        }
//    })
//}