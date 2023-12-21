import { Book } from '../../models'

import { IBookController, IBookQuery, IBook } from '../../types';


const bookController = {} as IBookController;
const genericErrorMsg = 'An unexpected error occured'
bookController.createBook = async (req, res): Promise<void> => {
    const newBook: IBook = req.body;
    
    if (!newBook) {
        res.status(400).json({
            success: false,
            error: 'You must provide a book',
        });
        return;
    }

    const book = new Book(newBook)

    if (!book) {
        res.status(400).json({ success: false, error: Error });
        return;
    }

    try {
        await book
            .save()
            .then(() => {
                return res.status(201).json({
                    success: true,
                    id: book._id,
                    message: 'Book created!',
                })
            })
    } catch(error) {
            res.status(500).json({
                error,
                message: 'Book not created!',
            })
    }
}


bookController.updateBook = async (req, res): Promise<void> => {
    const body: IBook = req.body

    if (!body) {
        res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        });
        return;
    }
    
    try {
        const book = await Book.findOne({ _id: req.params.id });
            if (!book) {
                res.status(404).json({
                    message: 'Book not found!',
                });
                return;
            }
            
        book.title = body.title
        book.author = body.author
        book.notes = body.notes
        book.status = body.status
            await book.save();
            
            res.status(200).json({
                success: true,
                id: book._id,
                message: 'Book updated!',
            });
    } catch (error) {
        res.status(404).json({
            error,
            message: 'Book not updated!',
        });
    }
}

bookController.deleteBook = async (req, res): Promise<void> => {
    try {
        const deleteBook = await Book.findOneAndDelete({ _id: req.params.id });

        if (!deleteBook) {
            res.status(404).json({ success: false, error: `Book not found` });
            return;
        }
        res.status(200).json({ success: true, data: deleteBook })
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message)
        } else {
            res.status(500).send('An unexpected error occured')
        }
    }
}

bookController.getBookById = async (req, res): Promise<void> => {
    try {
        const findBook = await Book.findOne({ _id: req.params.id });
        if (!findBook) {
            res.status(404).json({ success: false, error: `Book not found` });
            return;
        }
        res.status(200).json({ success: true, data: findBook });
        return;
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message)
        } else {
            res.status(500).send(genericErrorMsg)
        }
    }
}

bookController.getBooks = async (req, res): Promise<void> => {
    try {
        const booksData: IBook[] = await Book.find({})
    
        if (!booksData) {
            res.status(400).json({ success: false, error: 'Error: Books not found' });
            return;
        }
        if (!booksData.length) {
            res.status(404).json({ success: false, error: `Book not found` });
            return;
        }
        res.status(200).json({ success: true, data: booksData })
        return;
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message)
        } else {
            res.status(500).send(genericErrorMsg)
        }
        
    }
}

export default bookController;