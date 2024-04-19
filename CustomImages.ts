/**
* Custom blocks
*/

//% color=#ace3bb icon="📷"
namespace ImageConverter {
    //% block
    export function image(picture: String): Image {
        return image_from_code(picture);
    }
}// Add your code here
