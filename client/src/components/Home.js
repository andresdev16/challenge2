import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { create, read, update, deleteT } from "../services/taskservice"

const Tasks = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const tasks = read(currentUser.data.token, currentUser.data.userData._id)

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  if (!tasks) {
    return (
      <div class="card">
      <header>
        
      </header>
      <p>
        You don't have tasks
      </p>
    </div>
    )
  }

  return(
    <div class="card">
      <header>
        <form>
        <div class="mb-3">
          <label class="form-label">Name</label>
             <input type="email" class="form-control" placeholder="name@example.com"></input>
        </div>
        <div class="mb-3">
            <label  class="form-label">Details</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <label class="form-label">Date</label>
          <input class="form-control" type="date" id="start" name="trip-start"></input>
        </form>
      </header>
      <p>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Details</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{tasks.name}</td>
              <td>{tasks.details}</td>
              <td>{tasks.date}</td>
            </tr>
          </tbody>
        </table>
      </p>
    </div>
  )


}

export default Tasks;
