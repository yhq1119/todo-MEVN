exports.test = async (req, res) => {
    
    const {body} = req
    return res.status(200).json({
        code: 200,
        msg: "it works!",
        data: body
    })
}