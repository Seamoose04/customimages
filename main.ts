function image_from_code(picture: String): Image {
    let width: number = parseInt(picture.slice(0, 3));
    let height: number = parseInt(picture.substr(0, 3));
    picture = picture.slice(6);
    let output_image: Image = image.create(width, height);
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            output_image.setPixel(j, i, parseInt(picture.slice(0, 2)));
            picture = picture.slice(2);
        }
    }
    return output_image;
}
