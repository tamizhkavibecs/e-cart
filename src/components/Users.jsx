import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const BASE_URL = "http://localhost:8080/users";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const [userId, setUserId] = useState(null);
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();
    // const[set user] useState()

    const fetchUsers = async () => {
        try {
            const res = await axios.get(BASE_URL);
            setUsers(res.data);
        } catch (error) {
            console.error("Error getting data:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const onUserFormSubmit = async (formDataObj) => {
        try {
            if (userId) {
                const res = await axios.put(`${BASE_URL}/${userId}`, formDataObj);
                setUserId(null);
                console.log("Data successfully updated", res.data);
            } else {
                const res = await axios.post(BASE_URL, formDataObj);
                console.log("Data successfully stored", res.data);
            }
            reset();
            fetchUsers();
        } catch (error) {
            console.error("Error while submitting data", error);
        }
    };

    const handleEdit = (user) => {
        setUserId(user.id);
        setValue('userName', user.userName);
        setValue('salary', user.salary);
        setValue('emailId', user.emailId);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/${id}`);
            console.log("User deleted successfully", id);
            fetchUsers();
        } catch (error) {
            console.error("Error deleting user", error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                {/* Form Section - 4 columns */}
                <div className="col-md-4">
                    <form className="p-4 border rounded shadow-sm bg-light" onSubmit={handleSubmit(onUserFormSubmit)}>
                        <h4 className="mb-4 text-center">{userId ? "Update User" : "User Registration"}</h4>

                        {/* User Name */}
                        <div className="form-group mb-3">
                            <label htmlFor="userName">User Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter User Name"
                                {...register('userName', {
                                    required: true,
                                    pattern: /^[a-zA-Z\s]{3,30}$/i
                                })}
                            />
                            {errors.userName?.type === 'required' && <p className='text-danger'>* User Name is required</p>}
                            {errors.userName?.type === 'pattern' && <p className='text-danger'>* User Name must be 3–30 letters only</p>}
                        </div>

                        {/* Email ID */}
                        <div className="form-group mb-3">
                            <label htmlFor="emailId">Email ID</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Email ID"
                                {...register('emailId', {
                                    required: true,
                                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                                })}
                            />
                            {errors.emailId?.type === 'required' && <p className='text-danger'>* Email ID is required</p>}
                            {errors.emailId?.type === 'pattern' && <p className='text-danger'>* Enter a valid email address</p>}
                        </div>

                        {/* Salary */}
                        <div className="form-group mb-3">
                            <label htmlFor="salary">Salary</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter Salary"
                                {...register('salary', {
                                    required: true,
                                    min: 1000
                                })}
                            />
                            {errors.salary?.type === 'required' && <p className='text-danger'>* Salary is required</p>}
                            {errors.salary?.type === 'min' && <p className='text-danger'>* Salary must be at least 1000</p>}
                        </div>

                        <button type="submit" className="btn btn-success w-100">
                            {userId ? "Update User" : "Add User"}
                        </button>
                    </form>
                </div>

                {/* Table Section - 8 columns */}
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input className="form-control me   -2"
                            type="text"
                            placeholder="Search Users"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </div>
                    <table className="table table-bordered table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>UserName</th>
                                <th>Salary</th>
                                <th>Email ID</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center text-muted">No users found.</td>
                                </tr>
                            ) : (
                                users

                                    .filter(user =>
                                        (user.userName && user.userName.toLowerCase().includes(searchTerm.toLowerCase())) ||
                                        (user.emailId && user.emailId.toLowerCase().includes(searchTerm.toLowerCase()))

                                    )
                                    .map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.userName}</td>
                                            <td>{user.salary}</td>
                                            <td>{user.emailId}</td>
                                            <td>
                                                <div className="d-flex gap-2">
                                                    <button className="btn btn-sm btn-info" onClick={() => handleEdit(user)}>Edit</button>
                                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                            )}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}
