import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddBookModel = (props)=> {
  const [show, setShow] = useState(false);

  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [publishYear, setPublishYear] = useState('');
  
  const [imageFile, setImageFile] = useState(null);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
}; 


  const handleSubmit = (e)=>{
    e.preventDefault(); 
    const id = props.addBooks.length + 1;
    const newBook = {
        id,
        name,
        author,
        pages,
        price,
        desc,
        publishYear
      };
  
      axios
      .post("http://localhost:3000/BooksData", newBook)
      .then((res) => {
        console.log(res.data);
        props.updateBooks([...props.addBooks, newBook]);
        handleClose();
      })
      .catch((err) => console.log(err));
}

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <div className='container'>
            <Button variant="success" className='pull-right m-2' onClick={handleShow}>
                + Add Book
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Add New Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
               
                <form onSubmit={handleSubmit}>
                    <div class="form-group row pb-2">
                        <label className="col-sm-4 col-form-label">Name</label>
                        <div className="col-sm-8">
                        <input type="text" className="form-control" placeholder="Enter name" onChange = {e=>setName(e.target.value)}/>
                        </div>
                    </div>
                    <div class="form-group row pb-2">
                        <label className="col-sm-4 col-form-label">Author Name</label>
                        <div className="col-sm-8">
                        <input type="text" className="form-control" placeholder="Author name" onChange = {e=>setAuthor(e.target.value)}/>
                        </div>
                    </div>
                    <div class="form-group row pb-2">
                        <label className="col-sm-4 col-form-label">No of Pages</label>
                        <div className="col-sm-8">
                        <input type="text" className="form-control" placeholder="Number of pages" onChange = {e=>setPages(e.target.value)}/>
                        </div>
                    </div>
                    <div class="form-group row pb-2">
                        <label className="col-sm-4 col-form-label">Price</label>
                        <div className="col-sm-8">
                        <input type="text" className="form-control" placeholder="Enter Price" onChange = {e=>setPrice(e.target.value)}/>
                        </div>
                    </div>
                    <div class="form-group row pb-2">
                        <label className="col-sm-4 col-form-label">Description</label>
                        <div className="col-sm-8">
                        <input type="text" className="form-control" placeholder="Enter Description" onChange={e => setDesc(e.target.value)}/>
                        </div>
                    </div>
                    <div class="form-group row pb-2">
                        <label className="col-sm-4 col-form-label">Publish Year</label>
                        <div className="col-sm-8">
                        <input type="text" className="form-control" placeholder="Publish year" onChange={e => setPublishYear(e.target.value)}/>
                        </div>
                    </div>
                    <div class="form-group row pb-2">
                        <label className="col-sm-4 col-form-label">Image</label>
                        <div className="col-sm-8">
                        <input type="file" className="form-control" placeholder="Enter Image Name" onChange={handleImageUpload}/>
                        </div>
                    </div>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button type="submit" variant="primary">Create</Button>
                    </Modal.Footer>
                    
                </form>
                </Modal.Body>
            </Modal>
        </div>
    </>
  );
}

export default AddBookModel;