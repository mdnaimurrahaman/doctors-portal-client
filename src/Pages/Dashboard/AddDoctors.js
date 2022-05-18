import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctors = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );

  const imageStorageKey = '0e8ce1523c642175965f730ce5acdb15';

  /**
   *  3 ways to store images
   * 1. third party storage  // free open public storage is ok for practice projects
   * 2. your own storage in your own server (file system)
   * 3. database: Mongodb 
   * YUP: to validate file: Search: Yup file validation for react hook form.
   */


  const onSubmit = async (data) => {
    //   console.log(data)
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
    fetch(url,{
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(result => {
        if(result.success){
            const img = result.data.url;
            const doctor = {
                name: data.name,
                email: data.email,
                specialty: data.specialty,
                img: img
            }
            // sent to database
            fetch('http://localhost:5000/doctor',{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json',
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify(doctor)
            })
            .then(res => res.json())
            .then(inserted => {
                if(inserted.insertedId){
                    toast.success('Doctor added successfully')
                    reset();
                }
                else{
                    toast.error('Failed to add the doctor')
                }
            })
        }
    })
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div  className="flex h-screen justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-center text-2xl font-bold">Add a doctors</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid Email",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Specialty</span>
                  </label>
                  <select {...register('specialty')} class="select input-bordered w-full max-w-xs mb-4">
                    {
                        services.map(service => <option
                        key={service._id}
                        value={service.name}
                        >{service.name}</option>)
                    }
                  </select>
                </div>
            
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Doctor Photo</span>
                  </label>
                  <input
                    type="file"
                    className="input input-bordered w-full max-w-xs mb-4"
                    {...register("image", {
                      required: {
                        value: true,
                        message: "image is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
            
                <input className="btn w-full max-w-xs uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary border-0" type="submit" value="Add" />
              </form>
            </div>
        </div>
    </div>
  );
};

export default AddDoctors;
