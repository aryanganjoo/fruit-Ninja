var fruit1Image
var fruit2Image
var fruit3Image
var fruit4Image
var swordImage
var sword
var fruitGroup
var createSound
function preload(){
fruit1Image=loadImage("fruit1.png")  
fruit2Image=loadImage("fruit2.png")
fruit3Image=loadImage("fruit3.png")
fruit4Image=loadImage("fruit4.png")
swordImage=loadImage("sword.png")
createSound=loadSound("knifeSwooshSound.mp3")
}
function setup()
{
createCanvas(400,400)
 sword=createSprite(200,200,100,100)
  sword.addImage(swordImage)
  fruitGroup=createGroup()
}

function draw(){
  background("black")
  sword.x=mouseX
  sword.y=mouseY
  spawnFruit()
  if(sword.isTouching(fruitGroup))
    {
      fruitGroup.destroyEach()
      createSound.play()
    }
drawSprites()
}
function spawnFruit()
{
  if(frameCount%120==0)
    {
  fruit=createSprite(390,200,10,10)
  fruit.velocityX=-3
  var i=Math.round(random(1,4))
  fruit.y=random(10,350)
  fruit.scale=0.3
  switch(i)
    {
      case 1:fruit.addImage(fruit1Image)
        break
        case 2:fruit.addImage(fruit2Image)
        break
        case 3:fruit.addImage(fruit3Image)
        break
        case 4:fruit.addImage(fruit4Image)
        break
    }
        fruitGroup.add(fruit)
    }
}