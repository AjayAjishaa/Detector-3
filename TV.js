Status = "";
TV_image = "";
object = [];

function preload()
{
    TV_image = loadImage("TV.jpg");
}
function setup()
{
    canvas = createCanvas(640, 350);
    canvas.position(315, 200);
    objectDetector = ml5.objectDetector('CoCoSSd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
}
function modelLoaded()
{
    console.log('Model Loaded!!');
    Status = true;
    objectDetector.detect(TV_image, gotResult);
}
function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
    object = results; 
}
function draw()
{
    image(TV_image, 0, 0, 640, 350);
    if(status != "")
    {
        for(i = 0; i < object.length; i++)
        {
            fill('#ff0000');
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x - 800, object[i].y - 175);
            noFill();
            stroke('#ff0000');
            rect(object[i].x - 800, object[i].y -520, object[i].width - 910, object[i].height - 2640);
        }
    }
}
