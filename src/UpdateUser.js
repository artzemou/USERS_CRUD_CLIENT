import React, { useState, useEffect }from 'react'
import useForm from 'react-hook-form'
import axios from 'axios'
import * as moment from 'moment'

export default function CreateUser(props) {
  const { register, handleSubmit } = useForm()
  let [birthday, setBirthday] = useState(null)

  useEffect(() => {
    setBirthday(moment.utc(props.user.birthday).format('YYYY-MM-DD'))
  }, [props.user.birthday])
  const onSubmit = (input, e) => {
    const {firstName, name, email, birthday} = input
    axios({
      method: 'put',
      url: `${process.env.REACT_APP_URI}/user`,
      data: {
        id: props.user.id,
        firstName,
        name,
        email,
        birthday
      }
    })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      })

  }
  const {firstname, name, email} = props.user
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="Sign-up-form">
        <input
          id="firstName"
          name="firstName"
          defaultValue={firstname}
          ref={register}
        />
        <input
          id="name"
          name="name"
          defaultValue={name}
          ref={register}
        />
        <input
          id="email"
          name="email"
          defaultValue={email}
          ref={register}
        />
        <input id="birthday" name="birthday" type="date" ref={register} defaultValue={birthday}/>
        <button type="submit"><i className="material-icons">refresh</i></button>
      </form>
    </>
  )
}

