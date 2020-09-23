var mydata = {};

d3.json("samples.json").then((data) => {
    console.log(data);
    let sel = d3.select(#selDataset")
    for data.names.forEach((name) => {
        sel.appendHTML("<option value='${name}>${name}</option>')

    }
    //console.log
    //mydata = data
})
// function optionChanged(value) {
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