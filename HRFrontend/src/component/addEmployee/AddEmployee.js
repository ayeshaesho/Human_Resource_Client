import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./addemployee.css";
//import axios from "axios";
import { useForm } from "react-hook-form";
import { ResetTv } from "@mui/icons-material";


const AddEmployee = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = data => {


    const employee = {
      name: data.firstName + ' ' + data.lastName,
      email: data.email,
      phone: data.phone,
      employeeId: data.employeeId,
      gender: data.gender,
      department: data.department,
      Designation: data.Designation,
      salary: data.salary
    }
    console.log(employee);

    fetch('http://localhost:5000/employee', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    })
      .then((response) => response.json())
      .then((employeeResult) => {
        if (employeeResult.acknowledged)

        {
          // reset() 
          console.log("data inserted");
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div>
      <div className="add-employee-title">
        <AddIcon></AddIcon> <h1>New Employee</h1>
      </div>
      <div className="form-container">

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className="input-group">
            <label>First Name</label><br />
            <input {...register("firstName", { required: true })} type="text" placeholder="Enter first Name" name="firstName" id="" />
            {errors.firstName && <span>This field is required</span>}
          </div>
          <div className="input-group">
            <label>Last Name</label><br />
            <input {...register("lastName", { required: true })} type="text" placeholder="Enter last Name" name="lastName" id="" />
            {errors.lastName && <span>This field is required</span>}
          </div>
          <div className="input-group">
            <label>Emplpoyee Id</label><br />
            <input {...register("employeeId", { required: true })} type="text" placeholder="Enter employee id" name="employeeId" id="" />
            {errors.employeeId && <span>This field is required</span>}
          </div>
          <div className="input-group">
            <label>Phone</label><br />
            <input {...register("phone", { required: true })} type="text" placeholder="Enter your Phone Number" />
            {errors.phone && <span>This field is required</span>}
          </div>
          <div className="input-group">
            <label>Email</label><br />
            <input {...register("email", { required: true })} type="text" placeholder="Enter your email" />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="input-group">
            <label>Gender</label><br />
            <select {...register("gender")}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
            {errors.gender && <span>This field is required</span>}
          </div>
          <div className="input-group">
            <label>Office Shift</label><br />
            <select {...register("shift")}>
              <option value="day">Day</option>
              <option value="night">Night</option>
            </select>
            {errors.shift && <span>This field is required</span>}
          </div>
          <div className="input-group">
            <label>Department</label><br />
            <select {...register("department")}>
              <option value="HR">HR</option>
              <option value="html">HTML</option>
              <option value="css">Css</option>
              <option value="Graphics">Graphics_Design</option>
              <option value="Php">Php</option>
              <option value=".net">Dot Net</option>
              <option value="wordPress">Word Press</option>
              <option value="reactJs">React</option>
              <option value="NodeJs">Node</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Java">Java</option>
              <option value="Angular">Angular</option>
              <option value="ObjectiveC">Objective C</option>
              <option value="Scala">Scala</option>
              <option value="Python">Python</option>
              <option value="C#">C#</option>
              <option value="Laravel">Laravel</option>
            </select>
            {errors.department && <span>This field is required</span>}
          </div>
          <div className="input-group">
            <label>Designation</label><br />
            <select {...register("Designation")}>
              <option value="HR-director">HR director</option>
              <option value="HR-specialist">HR specialist</option>
              <option value="People-dataanalyst/datascientist">People data analyst/data scientist</option>
              <option value="HRIS-director"> HRIS director</option>
              <option value="Specialized-HR-positions">Specialized HR positions</option>
              <option value="Benefits-Administrator">Benefits administrator</option>
              <option value="Staffing-Manage">Staffing manager</option>
              <option value="Recruiter"> Recruiter</option>
              <option value="Employee-relations-manager">Employee relations manager</option>
              <option value="Development-manager"> Development manager</option>
              <option value="Safety-Manager">Safety manager</option>
              <option value="HR-manager">HR manager</option>
            </select>
            {errors.designation && <span>This field is required</span>}
          </div>
          <div className="input-group">
            <label>Salary</label><br />
            <input {...register("salary", { required: true })} type="text" placeholder="Salary" />

            {errors.salary && <span>This field is required</span>}
          </div>
          <input type="submit" />
        </form>

        {/* <form onSubmit={handleLoginSubmit}>
            <div className="input-group">
            <label>First Name</label><br />
            <input type="text" onBlur={handleOnBlur} placeholder="Enter first Name"  name="firstName" id="" />
            </div>
            <div className="input-group">
            <label>Last Name</label><br />
            <input type="text" onBlur={handleOnBlur}  name="lastName" id="" />
            </div>
            <div className="input-group">
            <label>Email</label><br />
            <input type="email" onBlur={handleOnBlur}  name="email" id="" />
            </div>
            <div className="input-group">
            <label>Contact number</label><br />
            <input type="text" onBlur={handleOnBlur}  name="contactnumber" id="" />
            </div>
            <div className="input-group">
            <label>Id</label><br />
            <input type="number" onBlur={handleOnBlur}  name="userid" id="" />
            </div>
            <div className="input-group">
            <label>Gender</label><br />
            <select name="gender" onBlur={handleOnBlur} id="cars">
            <option value="Male">Male</option>
            <option value="female">Female</option>
            </select>
            </div>
            <div className="input-group">
            <label>Office shift</label><br />
            <select name="office_shift" onBlur={handleOnBlur} id="cars">
            <option value="9am-5px">9am-5px</option>
            <option value="5pm-12pm">5pm-12pm</option>
            </select>
            </div>
            <div className="input-group">
            <label>Depertment</label><br />
            <select name="department" onBlur={handleOnBlur} id="cars">
            <option value="Php">PHP</option>
            <option value="reactjs">React Js</option>
            <option value="reactjs">Human resourse</option>
            </select>
            </div>
            <div className="input-group">
            <label>Designation</label><br />
            <select name="designation" onBlur={handleOnBlur} id="cars">
            <option value="Php">PHP</option>
            <option value="reactjs">React Js</option>
            <option value="reactjs">Human resourse</option>
            </select>
            </div>
            <div className="input-group">
            <label>current salary</label><br />
            <input type="number" onBlur={handleOnBlur} name="salary" id="" />
            </div>
            <div className="input-group ">
            <input className="btn" type="submit" value="submit" />
            </div>
        </form> */}
      </div>
    </div>
  );
};

export default AddEmployee;
