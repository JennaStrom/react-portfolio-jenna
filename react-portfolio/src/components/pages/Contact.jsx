import React from "react";

export default function Contact() {
  return (
    <div className="container">
      <h1>Contact</h1>
      <h2>Please fill out this contact form</h2>
      <div class="mb-3">
        <label for="Input1" class="form-label">Name:</label>
        <input type="name" class="form-control" id="Input1" placeholder="Your name here"></input>
      </div>
      <div class="mb-3">
        <label for="Input2" class="form-label">Email address:</label>
        <input type="email" class="form-control" id="Input2" placeholder="name@example.com"></input>
      </div>
      <div class="mb-3">
        <label for="Textarea1" class="form-label">Message</label>
        <textarea class="form-control" id="Textarea1" rows="3"></textarea>
      </div>
      <button>Submit</button>
    </div>
  );
}