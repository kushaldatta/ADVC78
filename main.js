var images = [ "https://images-na.ssl-images-amazon.com/images/I/51-8FZDrnsL._SX258_BO1,204,203,200_.jpg" ,  "E:\dilip pvkk\02\KRA_5796.JPGE:\dilip pvkk\02\KRA_5804.JPG"]
var names = [ "The Family Book", "Me, (My) Father, Mother, Grandmother, Grandfather "]
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 1
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
