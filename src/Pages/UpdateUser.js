import React from 'react'
import { Link } from 'react-router-dom'

const UpdateUser = () => {
  return (
    <div class="row">
      <div class="col-8">
        <div class="header-laptop mt-5 d-flex justify-content-between">
          <h3>Cập nhật người dùng</h3>
          <Link class="btn btn-danger" to={"/"}>Quay Lại</Link>
        </div>
        <div class="mt-3">
          <form method="post" action="/update">
            <div class="col">
              <div class="col-md-6" style={{width: "100%"}}>
                <input type="text" hidden name="id" value="<%= data._id %>" />
                  <div class="form-group">
                    <label class="control-label mt-3 mb-3" for="name">Tên:</label>
                    <input type="text" class="form-control" name="name" value="<%= data.name %>"
                      required />
                  </div>
                  <div class="form-group">
                    <label class="control-label mt-3 mb-3" for="Price">Tuổi:</label>
                    <input type="text" class="form-control" value="<%= data.age %>" name="age"
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