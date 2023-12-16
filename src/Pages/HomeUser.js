import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const HomeUser = () => {
  const [user, setUser] = useState([])
  const deleteUser = async (userId) => {
    try {
      await axios.post(`https://simple-crud-x6b5.onrender.com/api/v1/delete/${userId}`)
      const updatedUser = user.filter(item => item._id !== userId);
      setUser(updatedUser);
      toast.success('Xóa người dùng thành công')
    } catch (error) {
      toast.error(error)
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://simple-crud-x6b5.onrender.com/api/v1")
      setUser(res.data)
    }
    fetchData();
  }, [])
  return (
    <div class="row">
      <div class="header-laptop mt-5 d-flex justify-content-between col-8">
        <h3>Người Dùng</h3>
        <div class="d-flex">
          <div class="d-flex justify-content-center">
            <div class="text-white">
              <Link class="btn btn-success" to={"/add"}>Thêm</Link>
            </div>
          </div>
        </div>
      </div>
      {(user.length === 0) ? (
        <div className='col-8 d-flex justify-content-center mt-5'>
          <div class="spinner-border mt-5" role="status" style={{width: "5rem", height: "5rem"}}>
            <span class="sr-only"></span>
          </div>
        </div>
      ) : (
        <div class="col-8">
          <table class="table table-bordered mt-3">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">ID</th>
                <th scope="col">Tên</th>
                <th scope="col">Tuổi</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {user.map((user, index) => {
                return (
                  <tr key={user._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>
                      <div class="d-flex justify-content-center">
                        <div class="action d-flex justify-content-between">
                          <Link class="btn btn-primary" to={`/update/${user._id}`}>Cập Nhật</Link>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex justify-content-center">
                        <div class="action d-flex justify-content-between">
                          <button class="btn btn-danger" onClick={() => deleteUser(user._id)}>
                            Xóa
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default HomeUser