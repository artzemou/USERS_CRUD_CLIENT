import React from 'react';
import useForm from 'react-hook-form'
const axios = require('axios');
console.log(process.env.REACT_APP_URI)
export default function CreateUser(props) {
  const { register, handleSubmit } = useForm()
  const onSubmit = (input, e) => {
    const {firstName, name, email, birthday} = input
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_URI}/user`,
      data: {
        firstName,
        name,
        email,
        birthday
      }
    })
      .then(function (response) {
        e.target.reset()
        props.getUsers()
      })
      .catch(function (error) {
        console.log(error);
      })

  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="Sign-up-form">
        <input
          id="firstName"
          name="firstName"
          placeholder="Prénom"
          ref={register}
        />
        <input
          id="name"
          name="name"
          placeholder="Nom"
          ref={register}
        />
        <input
          id="email"
          name="email"
          placeholder="Email"
          ref={register}
        />
        <input id="birthday" name="birthday" type="date" ref={register}/>
        <button type="submit"><i className="material-icons">refresh</i></button>
      </form>
    </>
  )
}

