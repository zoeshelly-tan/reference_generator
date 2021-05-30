const router = require("express").Router();
// const booksController = require("../../controllers/booksController");
const Book = require('../../models/Book');


// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

// module.exports = router;
router.get('/', (req, res) => {

    Book.find({})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});
//create book
// router.post('/', async (req, res) => {
//     try {
//       const bookData = await Book.create(req.body);
//       res.status(200).json(bookData);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });

//save book
router.post('/save', (req, res) => {
    console.log("body:", req.body)
    const data = req.body;
    const newBook = new Book(data)
    console.log('body:', req.body)

    //save
    newBook.save((error) => {
        if (error) {
            console.log(error)
            res.status(500).json({ message: 'internal server errors' })
        } else {

            res.json({
                message: 'Data received'
            });
        }
    })

})

//delete
router.delete('/:id', function (req, res) {
    const id = req.params.id;
    Book.findOneAndRemove({ _id: id }, function (err) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        return res.status(200).send();
    })
})

module.exports = router;