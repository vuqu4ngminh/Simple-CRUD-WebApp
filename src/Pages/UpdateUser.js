import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { checkValue } from '../Utils'
import axios from 'axios'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const updateUser = async (e) => {
    e.preventDefault()
    if (checkValue(name, age)) {
      try {
        await axios.post("https://simple-crud-x6b5.onrender.com/api/v1/update", {
          id: id,
          name: name,
          age: age
        })
        toast.success("Cập nhật thành công")
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } catch (error) {
        toast.error(error)
      }
    }
  }
  useEffect(() => {
    const fetchData = async (userId) => {
      const res = await axios.get(`https://simple-crud-x6b5.onrender.com/api/v1/${userId}`)
      setName(res.data.name)
      setAge(res.data.age)
    }
    fetchData(id)
  }, [id])
  return (
    <div class="row">
      <div class="col-8">
        <div class="header-laptop mt-5 d-flex justify-content-between">
          <h3>Cập nhật người dùng</h3>
          <Link class="btn btn-danger" to={"/"}>Quay Lại</Link>
        </div>
        <div class="mt-3">
          <form onSubmit={updateUser}>
            <div class="col">
              <div class="col-md-6" style={{ width: "100%" }}>
                <div class="form-group">
                  <label class="control-label mt-3 mb-3" for="name">Tên:</label>
                  <input type="text" class="form-control" value={name} onChange={(e) => setName(e.target.value)}
                    required />
                </div>
                <div class="form-group">
                  <label class="control-label mt-3 mb-3" for="age">Tuổi:</label>
                  <input type="text" class="form-control" value={age} onChange={(e) => setAge(e.target.value)}
                    required />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group d-flex justify-content-end mt-5">
                  <button class="btn btn-success float-right" type="submit">
                    Cập nhật
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

export default UpdateUser