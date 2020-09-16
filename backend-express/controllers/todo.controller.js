const todoItemModel = require('../db/schema/todo.item.model')

exports.Create = async (req, res) => {
    const { id, content, status, create_date, finish_date } = req.body

    const newTodo = new todoItemModel({ id, content, status, create_date, finish_date })
    newTodo.save((err) => {
        if (err) {
            return res.json({
                code: "error",
                msg: err
            })
        }
        return res.json({
            code: "success",
            msg: `${newTodo} saved.`
        })
    })
}

exports.Read = async (req, res) => {
    todoItemModel.find({}).exec((err, data) => {
        if (err) {
            return res.json({
                code: 'error',
                msg: err
            })
        }
        return res.json({
            code: "success",
            msg: `Found ${data.length} record(s)`,
            data
        })
    })
}

exports.ReadOne = async (req, res) => {
    todoItemModel.findOne({ id: req.params.id }).exec((err, data) => {
        if (err) {
            return res.json({
                code: 'error',
                msg: err
            })
        }
        return res.json({
            code: "success",
            msg: `Found record`,
            data
        })
    })
}

exports.Update = async (req, res) => {
    const { id } = req.params
    const { content, status, finish_date } = req.body
    todoItemModel.findOne({ id }).exec((err, data) => {
        if (err || !data) {
            return res.json({
                code: 'error',
                msg: err,
                note:"Not found"
            })
        }
        // const {id, create_date} = data
        // const data_ = { content, status,finish_date, create_date}
        // const {_doc} = data
        // const data_ = { content, status,finish_date, ..._doc}
        // console.log(data_)
        // const newOne = new todoItemModel(data_)
        data.content = content
        data.status = status
        data.finish_date= finish_date
        data.save(err=>{
            if(err){
                return res.json({
                    code:"error",
                    msg: err,
                    note:"update error"
                })
            }
            return res.json({
                code: "success",
                msg: `Item id=${id} Updated`
            })
        })
    })
}

exports.Delete = async (req, res) => {
    const { id } = req.params
    todoItemModel.findOneAndDelete({ id }).exec((err, data) => {
        if (err) {
            return res.json({
                code: 'error',
                msg: err
            })
        }
        return res.json({
            code: 'success',
            msg: `Deleted item,id=${id}`,
            data
        })
    })
}

exports.DeleteAll = async (req, res) => {
    // const {condition} = req.body
    todoItemModel.deleteMany({}, (err) => {
        if (err) {
            return res.json({
                code: "err",
                msg: err
            })
        }
        return res.json({
            code: "success",
            msg: "Deleted all items"
        })
    })
}
