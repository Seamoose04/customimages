function image_from_code(picture: String): Image {
    let width: number = parseInt(picture.slice(0, 3));
    let height: number = parseInt(picture.substr(0, 3));
    picture = picture.slice(6);
    let output_image: Image = image.create(width, height);
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            output_image.setPixel(i, j, parseInt(picture.slice(0, 2)));
            picture = picture.slice(1);
        }
    }
    return output_image;
}
