// Append a line to the console frame
function consolePrintln(message) {
    var con = document.getElementById("console")
    con.innerHTML += "<br/>"+message
    con.scrollTop = con.scrollHeight
}

// List of connected devices (a single value could be used if only connecting to one device)
var connectedDevices = []

// Example event call-back handler
function uBitEventHandler(reason, device, data) {
    switch(reason) {
        case "connected":
            //console.log("<b>Connected!</b>")
            connectedDevices.push(device)
            console.log(device)
            document.getElementById("productid_text").innerHTML = device.productId.toString(16);
            document.getElementById("vendorid_text").innerHTML = device.vendorId.toString(16);
            document.getElementById("productname_text").innerHTML = device.productName.toString(16);
            break
        case "disconnected":
            //console.log("<b>Disconnected</b>")
            connectedDevices = connectedDevices.filter( v => v != device)
            break
        case "connection failure":
            //console.log("<b>Connection Failure</b>")
            break
        case "error":
            //console.log("<b>Error</b>")
            break
        case "console":
            //console.log(data.data)
            //var text = data.data
            //document.getElementById("text").innerHTML = text;
            var str = data.data;
            var m = str.split(",");
            document.getElementById("light_text").innerHTML = m[0];
            document.getElementById("temp_text").innerHTML = m[1];
            document.getElementById("rotate_text").innerHTML = m[2];
            document.getElementById("speed_text").innerHTML = m[3];
            document.getElementById("isShake_text").innerHTML = m[4];


            break
        case "graph-event":
            //console.log(`Graph Event:  ${data.data} (for ${data.graph}${data.series.length?" / series "+data.series:""})`)
            break
        case "graph-data":
            //console.log(`Graph Data: ${data.data} (for ${data.graph}${data.series.length?" / series "+data.series:""})`)
            break
    }
}

// Make the "go" button open the request devices box

document.getElementById("connect").addEventListener("click", () => uBitConnectDevice(uBitEventHandler))
document.getElementById("disconnect").addEventListener("click", () =>  { connectedDevices.forEach(d=>uBitDisconnect(d)); connectedDevices = [];})
document.getElementById("clear").addEventListener("click", () => { document.getElementById("console").innerHTML = "" })
document.getElementById("send").addEventListener("click", () => { connectedDevices.forEach( d=>uBitSend(d, "1")) })