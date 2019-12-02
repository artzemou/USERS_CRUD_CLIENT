import React, { useState, useEffect }from 'react'
import axios  from 'axios'

export default function User(props) {
  let [user, setUser] = useState({})
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URI}user/${props.userId}`)
    .then(function (response) {
      // handle success
      setUser(response.data.result)
    })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
  }, [props.userId])

  const { firstname, name, email, birthday} = user
  return (
    <>
      <ul className="User-details">
        <li className="User-detail">Prénom: {firstname}</li>
        <li className="User-detail">Nom: {name}</li>
        <li className="User-detail">Email: {email}</li>
        <li className="User-detail">Date anniversaire: {birthday}</li>
      </ul>
    </>
  )
}

