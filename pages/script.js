function readLValue()
{
    document.getElementById("lValue").innerHTML = "L: " + document.getElementById("lBal").value;
}
function readRValue()
{
    document.getElementById("rValue").innerHTML = "R: " + document.getElementById("rBal").value;
}

function changeBitrate()
{
    document.getElementById("bitrate").innerHTML = "Bitrate: " + document.getElementById("bitrateVal").value + "Mbps"
}