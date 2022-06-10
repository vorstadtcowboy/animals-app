import axios from 'axios';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const CreateMitHook = () => {
  //Wir Benutzen den Hook useForm
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //OnSubmit was paasiert nach dem Abschiken
  const onMySubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="row">
      <form onSubmit={handleSubmit(onMySubmit)}>
        <div>
          <label htmlFor="name">Name</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Name"
            {...register('name', { required: true, pattern: /^[a-z0-9\s]+$/i })}
          />
          {errors.name && <span className="error">Dies ist ein Pflichtfeld!</span>}
        </div>
        <input type="submit" value="absenden" />
      </form>
    </div>
  );
};

export default CreateMitHook;
