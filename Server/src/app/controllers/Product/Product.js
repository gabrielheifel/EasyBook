const { Produto } = require('../../models')

class productController {

    async store(req, res) {
        try {
            const product = await Produto.create(req.body)
            console.log(res.json(product))
            return res.json(product);

        } catch (error) {
            return res.status(404).json({ message: "Invalid data." })
        }
    }
    async listAll(req, res) {
        try {
            const product = await Produto.findAll()
            res.json(product);

        } catch (error) {
            return res.status(401).json({ message: error })
        }
    }
    async delete(req, res) {
        try {
            const product = await Produto.destroy(
                {
                    where: {
                        id: req.params.id,
                    }
                }
            )
            if (product == 0) {
                return res.status(404).json({ message: 'Product or user not found.' })
            } else {
                return res.json({ message: `Success, ${product} product deleted.` });
            }

        } catch (error) {
            return res.status(401).json({ message: error })
        }
    }
    async update(req, res) {
        let { body } = req
        let { id, data } = body
        try {

            const produto = await Produto.findOne({
                where: {
                    id: id
                },
            })
            await produto.update(data);
            return res.json({ message: `success` })

        } catch (error) {
            return res.status(401).json({ message: "Error, invalid data" })
        }
    }
}
module.exports = new productController()