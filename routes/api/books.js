const router = require("express").Router();
const booksController = require("../../controllers/booksController");
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

    Book.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

router.post('/save',(req,res)=>{
    console.log("body:",req.body)
    const data = req.body;
    const newBook = new Book(data)

    //save
    newBook.save((error)=>{
        if(err){
            res.status(500).json({message:'internal server errors'})
        }else{

            res.json({
                message:'Data received'
            });
        }
    })
})

module.exports = router;