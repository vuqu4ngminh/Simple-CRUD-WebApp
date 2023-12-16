import React from 'react'
import { Link } from 'react-router-dom'

const AddUser = () => {
  return (
    <div class="row">
      <div class="col-8">
        <div class="header-laptop mt-5 d-flex justify-content-between">
          <h3>Thêm Người Dùng</h3>
          <Link class="btn btn-danger" to={"/"}>Quay Lại</Link>
        </div>
        <div class="mt-3">
          <form method="post" action="/add">
            <div class="col">
              <div class="col-md-6" style={{width: "100%"}}>
                <div class="form-group">
                  <label class="control-label mt-3 mb-3" for="name">Tên:</label>
                  <input type="text" class="form-control" name="name" required />
                </div>
                <div class="form-group">
                  <label class="control-label mt-3 mb-3" for="Price">Tuổi:</label>
                  <input type="text" class="form-control" name="age" required />
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