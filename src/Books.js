import React, { useEffect, useState } from 'react'
import AddBookModel from './AddBookModel';
import { BooksAPI } from './BooksData';
import axios from 'axios';
import { Link } from 'react-router-dom'

// const apidata = "http://localhost:3000/BooksData";

const Books = () => {
    
    // const [books, setBooks] = useState(BooksAPI)
    const [books, setBooks] = useState([])

    // const [name, setName] = useState('');
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

//       const handleSubmit = (e)=>{
//         e.preventDefault(); 
//         const id = books.length + 1;
//         axios.post("http://localhost:3000/BooksData", { id:id, name:name})
//         .then(res=>console.log(res.data))
//         .then(err=>console.log(err))

//   }
const updateBooks = (newBook) => {
    setBooks([...books, newBook]);
  };
    
  return (
    <>
        <div className='container'>
            <Link to="/"><h1 className='text-center m-2'>Books</h1></Link>  
            <div className="row justify-content-center">
                   
            {/* <form onSubmit={handleSubmit}>
                    <div class="form-group row pb-2">
                        <label className="col-sm-4 col-form-label">Name</label>
                        <div className="col-sm-8">
                        <input type="text" className="form-control" placeholder="Enter name" onChange = {e=>setName(e.target.value)}/>
                        </div>
                    </div>
                    <button>Add</button>
            </form> */}

            <AddBookModel addBooks = {books} updateBooks={updateBooks}/>

            {
                books.map((item)=>{
                    const {id, name, author, price, image} = item;
                    return(
                        <div key={id} className="col-lg-6">
                        <div className="card bg-light m-2 text-center" style={{ width: "100%" }}>
                        <div className='card-body d-flex justify-content-center align-items-center'>
                            <div>                                
                                <p><img style={{ width: 150, height: 180 }}  src={item.image} alt={`book_${id}`}/></p>
                            </div>
                            <div className="p-2">
                                <h5 className='card-title'>{name}</h5>
                                <p className='card-text'>{author}</p>
                                <p className='cart-text'>{price}</p>
                                <Link to="/bookslist"><button className="btn btn-info">View List</button></Link>
                            </div>
                        </div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    </>
  )
}

export default Books