"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "@restart/ui";

const Fieldset = styled.fieldset`
  border: 0;
  margin: auto;
  padding: 0 0 1.5rem;

  label {
    align-self: center;
    font-family: var(--font-family-grotesk);
    font-size: var(--font-size-heading-subtitle);
    font-weight: 600;
    grid-column: 1 / 2;
    text-align: right;
    text-transform: uppercase;
  }

  input,
  textarea {
    font-family: var(--font-family-proxima);
    padding: 0.75rem;
    width: 100%;
  }
`;

const Submit = styled(Button)`
  background-color: var(--color-black);
  border: 0;
  border-radius: 8px;
  color: var(--color-white);
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  transition: all 300ms;

  &:hover {
    color: var(--color-green);
  }

  &:active {
    opacity: 0.8;
  }
`;

const CheckBox = styled.div`
  width: 100%;
  display: flex;
`;

const CheckItem = styled.div`
  width: 15%;
  padding: 0.5rem 0rem;
  justify-content: space-between;
`;
const ErrorMessage = styled.span`
  color:#EF0107;
`;
export default function ApplyForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    ig: "",
    services: [],
    project1: "",
    project2: "",
    project3: "",
    about: ""
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  const validate = () => {
    const newErrors = {};

    // Check for name
    if (!formData.name) {
      newErrors.name = "Please enter your name.";
    }

    // Check for phone
    if (!formData.phone) {
      newErrors.phone = "Please enter your phone number.";
    }

    // Check for email
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Check for about
    if (!formData.about) {
      newErrors.about = "Please tell us about yourself.";
    }
    if (formData.services.length === 0) {
      newErrors.services = "Please select at least one service.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        console.error("Failed to submit the form");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (errors[name]) {
      setErrors((prevErrors) => {
        const { [name]: removedError, ...restErrors } = prevErrors;
        return restErrors;
      });
    }

    if (name === "services") {
      const isChecked = e.target.checked;
      setFormData((prevState) => ({
        ...prevState,
        services: isChecked
          ? [...prevState.services, value]
          : prevState.services.filter((service) => service !== value)
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  return success ? (
    <p>
      <strong>Thank you for reaching out!</strong>
    </p>
  ) : (
    <form onSubmit={handleSubmit}>
      <Fieldset>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
      </Fieldset>

      <Fieldset>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
      </Fieldset>

      <Fieldset>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </Fieldset>

      <Fieldset>
        <label htmlFor="ig">IG:</label>
        <input
          type="text"
          name="ig"
          id="ig"
          value={formData.ig}
          onChange={handleChange}
        />
      </Fieldset>

      <CheckBox>
        {
          [
            {value: "photo", text: "Photo"}, 
            {value: "video", text: "Video"}, 
            {value: "editor", text: "Editor"}, 
            {value: "motion-graphics", text: "Motion Graphics"}, 
            {value: "other", text: "Other"}
          ].map(
            (service) => (
              <CheckItem key={service.value}>
                <input
                  type="checkbox"
                  name="services"
                  value={service.value}
                  onChange={handleChange}
                  style={{
                    marginRight: "0.5em"
                  }}
                />
                <label>{service.text}</label>
              </CheckItem>
            )
          )
        }
      </CheckBox>
      {errors.services && <ErrorMessage>{errors.services}</ErrorMessage>}

      {
        formData.services.includes('other') && (
          <Fieldset>
            <input
              type="text"
              name="other"
              id="other"
              value={formData.other}
              onChange={handleChange}
            />
          </Fieldset>
        )
      }

      <Fieldset>
        <label htmlFor="project-1">Completed Project URL 1:</label>
        <input
          type="url"
          name="project1"
          id="project-1"
          value={formData.project1}
          onChange={handleChange}
          placeholder="https://example.com"
        />
      </Fieldset>

      <Fieldset>
        <label htmlFor="project-2">Completed Project URL 2:</label>
        <input
          type="url"
          name="project2"
          id="project-2"
          value={formData.project2}
          onChange={handleChange}
          placeholder="https://example.com"
        />
      </Fieldset>

      <Fieldset>
        <label htmlFor="project-3">Completed Project URL 3:</label>
        <input
          type="url"
          name="project3"
          id="project-3"
          value={formData.project3}
          onChange={handleChange}
          placeholder="https://example.com"
        />
      </Fieldset>

      <Fieldset>
        <label htmlFor="about">Tell us about yourself and your gear:</label>
        <textarea
          name="about"
          id="about"
          rows="5"
          value={formData.about}
          onChange={handleChange}
          placeholder="Let us know about yourself."
          style={{ resize: "none", overflow: "auto" }}
        ></textarea>
        {errors.about && <ErrorMessage>{errors.about}</ErrorMessage>}
      </Fieldset>

      <Fieldset>
        <Submit type="submit">Submit</Submit>
      </Fieldset>
    </form>
  );
}
