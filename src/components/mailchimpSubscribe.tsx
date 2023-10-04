import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

export const MailchimpSubsribe = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault()

    addToMailchimp(email)
      .then((data: any) => {
        setMessage(data.msg)
      })
      .catch(() => {
        setMessage('Sorry something has gone wrong, please try again')
      })
  }

  const handleEmailChange = (e: any) => {
    setEmail(e.currentTarget.value)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="email" className="subscribe-text">Subscribe to our newsletter:
        <input
          placeholder="Email address"
          name="email"
          type="text"
          className="subscribe-input"
          onChange={(e) => { handleEmailChange(e); }}
        />
      </label>
      <div
        className="subscribe-errors"
        dangerouslySetInnerHTML={{
          __html: message,
        }}
      />
    </form>
  )
}
