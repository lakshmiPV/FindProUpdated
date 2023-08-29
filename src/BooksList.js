import React, { useEffect, useState } from 'react'
import AddBookModel from './AddBookModel';
import axios from 'axios';
import { Link } from 'react-router-dom';

// const apidata = "http://localhost:3000/BooksData";


const BooksList = () => {
    
    const [books, setBooks] = useState([])

    // useEffect(()=>{
    //     async function getBooksData(){
    //         const response = await axios.get(apidata);
    //         setBooks(response.data)
    //     }
    //     getBooksData();
    // },[])

    useEffect(()=>{
      axios.get("http://localhost:3000/BooksData")
      .then((response)=>setBooks(response.data))
      .catch(error=>console.log(error))
    })
    
  return (
    <>
        <div className='container'>
            <Link to="/"><h1 className='text-center m-2'>Books</h1></Link>
            <div>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>S. No</th>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Pages</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Pulish Year</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((item)=>{
                                const {id, name, author, pages, price, description, publish_year, image} = item
                                return(  
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>{author}</td>
                                        <td>{pages}</td>
                                        <td>{price}</td>
                                        <td>{description}</td>
                                        <td>{publish_year}</td>
                                        <td><img style={{ width: 100, height: 120 }}  src={item.image} alt={`book_${id}`}/></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default BooksList;