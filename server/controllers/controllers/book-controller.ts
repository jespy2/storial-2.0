import { Collection, InsertOneResult, ObjectId } from 'mongodb';

import { Book } from '../../models'
import { connectToDatabase, collections } from '../../service/database.services';
import { IBookController, IBook } from '../../types';

const bookController = {} as IBookController;
const genericErrorMsg = 'An unexpected error occured';
let books: Collection<IBook> | undefined;
connectToDatabase().then(() => {
    books = collections.books;
})

bookController.createBook = async (req, res): Promise<void> => {
    const newBook: IBook = req.body;
    
    if (!newBook) {
        res.status(400).json({
            success: false,
            error: 'You must provide a book',
        });
        return;
    }

    try {
        const book = await books?.insertOne(newBook)

    if (!book) {
        res.status(400).json({ success: false, error: Error });
        return;
    }

    res.status(201).json({
                    success: true,
                    id: book.insertedId,
                    message: 'Book created!',
                })
    } catch (error) {
            res.status(500).json({
                error,
                message: 'Book not created!',
            })
    }
}


bookController.updateBook = async (req, res): Promise<void> => {
    const updatedBook: IBook = {
        username: req.body.username,
        book: {
            _id: req.body._id,
            title: req.body.book.title,
            author: req.body.book.author,
            notes: req.body.book.notes,
            status: req.body.book.status
        }
    }
    const bookTitle = req.body.book.title
    if (!updatedBook) {
        res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        });
        return;
    }
    
    try {
        // $set adds new fields to the document if they do not already exist, else updates them
        const updateBook = await books?.updateOne({_id: new ObjectId(updatedBook.book._id)}, { $set: updatedBook })
        console.log('updateBook:  ', updateBook)
        updateBook 
            ? res.status(200).json({ success: true, message: `${bookTitle} has been updated!` })
            : res.status(404).json({ success: false, message: `${bookTitle} not found!` })
        return;
    } catch (error) {
        res.status(404).json({
            error,
            message: 'Book not updated!',
        });
    }
}

bookController.deleteBook = async (req, res): Promise<void> => {
    const id = req.params.id;

    try {
        const query = { _id: new ObjectId(id)}
        const deleteBook = await books?.deleteOne(query);
        console.log('deleteBook:  ', deleteBook)
        if (deleteBook && deleteBook.deletedCount) {
            res.status(200).send(`Book with id: ${id} deleted`);
          } else if (!deleteBook) {
            res.status(400).send(`Book with id: ${id} not removed`);
          } else if (!deleteBook.deletedCount) {
            res.status(404).send(`Book with id: ${id} not found`);
          }
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
        console.log('findBook:  ', findBook)
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
        const booksData: IBook[] = await books?.find({ username: req.params.username })
            .toArray() as IBook[]
        if (!booksData) {
            const initData = {
                username: req.params.username,
                book: {
                    _id: new ObjectId().toString(),
                    title: '',
                    author: '',
                    notes: '',
                    status: 'unread' as const
                }
            }
            const seed: InsertOneResult<IBook> | undefined = await books?.insertOne(initData)
            if(seed){
                res.status(200).json({ success: true, data: seed, message: 'Seeded!' });
                return;
                }
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