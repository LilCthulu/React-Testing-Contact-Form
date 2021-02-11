import React from "React";
import { render, screen } from "@testing-library/react";
import ContactForm from './ContactForm'
import userEvent from "@testing-library/user-event";



test("Check user expierience", () => {
    const { debug } = render( < ContactForm / > );

    const firstName = screen.getByText(/First Name*/i)
    const lastName = screen.getByText(/Last Name*/i)
    const email = screen.getByText(/Email*/i)
    const message = screen.getByText(/Message/i)



    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(message).toBeInTheDocument();

    userEvent.type(firstName, 'Chaz')
    userEvent.type(lastName, 'Carbis')
    userEvent.type(email, 'email@email.com')
    userEvent.type(message, "hi i'm a message")

    expect(firstName).toHaveValue('Chaz');
    expect(lastName).toHaveValue('Carbis');
    expect(email).toHaveValue('email@email.com');
    expect(message).toHaveValue("hi i'm a message");


})