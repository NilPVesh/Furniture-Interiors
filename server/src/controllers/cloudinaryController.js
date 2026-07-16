const cloudinary =
    require("../config/cloudinary");

const createProduct =
async (req, res) => {

    let imageUrl = "";

    if (req.file) {
        const result =
            await cloudinary.uploader.upload(
                req.file.path
            );

        imageUrl =
            result.secure_url;
    }

    const product =
        await Product.create({
            ...req.body,
            image: imageUrl
        });

    res.status(201).json({
        success: true,
        data: product
    });
};