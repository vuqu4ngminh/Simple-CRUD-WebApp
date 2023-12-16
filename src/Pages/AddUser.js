import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {checkValue} from "../Utils"
import axios from 'axios'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const AddUser = () => {
  const [name,setName] = useState('')
  const [age,setAge] = useState('')
  const addUser = async (e) => {
    e.preventDefault()
    try {
      
      if(checkValue(name,age)){
        console.log(name,age);
        await axios.post("https://simple-crud-x6b5.onrender.com/api/v1/add",{
          name: name,
          age: age
        })
        toast.success('Thêm thành công');
        setName('')
        setAge('')
      }
    } catch (error) {
      toast.error(error)
    }
  }
  return (
    <div class="row">
      <div class="col-8">
        <div class="header-laptop mt-5 d-flex justify-content-between">
          <h3>Thêm Người Dùng</h3>
          <Link class="btn btn-danger" to={"/"}>Quay Lại</Link>
        </div>
        <div class="mt-3">
          <form onSubmit={addUser}>
            <div class="col">
              <div class="col-md-6" style={{width: "100%"}}>
                <div class="form-group">
                  <label class="control-label mt-3 mb-3" for="name">Tên:</label>
                  <input type="text" class="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div class="form-group">
                  <label class="control-label mt-3 mb-3" for="age">Tuổi:</label>
                  <input type="text" class="form-control" value={age} onChange={(e) => setAge(e.target.value)} required />
                </div>
              </div>
              <div class="col-md-12 mt-5">
                <div class="form-group d-flex justify-content-end">
                  <button class="btn btn-success float-right" type="submit">
                    Thêm
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddUser