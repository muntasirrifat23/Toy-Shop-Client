import React from 'react';
import { Container } from 'react-bootstrap';
import './Blog.css'
const Blog = () => {
    return (
        <Container>
            <div className="b1">
                <h2 className='font-bold'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p>Ans: An access token is a credential that is issued by an authentication server upon successful authentication. It is a string that represents the authorization granted to the client application to access specific resources or perform certain actions. Access tokens are typically short-lived and have an expiration time. They are included in API requests as a means of identifying the client and its privileges. <br />We use a refresh token is another credential that is issued alongside the access token. It has a longer expiration time and is used to obtain a new access token once the current one expires. When the access token expires, the client can use the refresh token to request a new access token without requiring the user to reauthenticate. Refresh tokens are more long-lived and can be securely stored on the client-side.</p>
            </div>

            <div className="b1">
                <h2 className='font-bold'>2. Compare SQL and NoSQL databases?</h2>
                <p>Ans: SQL databases also known as relational databases organize data into tables with predefined schemas. They use structured query language (SQL) for defining and manipulating the data, enforcing relationships between tables through foreign keys. <br />Another, NoSQL databases, on the other hand, offer various data models, including key-value, document, columnar and graph. They provide more flexibility in terms of data schema, allowing for dynamic and unstructured data.</p>
            </div>

            <div className="b1">
                <h2 className='font-bold'>3. What is express js? What is Nest JS?</h2>
                <p>Ans: Express.js is a popular web application framework for Node.js, a JavaScript runtime environment. It provides a simple and minimalist approach to building web applications and APIs. Express.js allows us to handle HTTP requests, define routes, manage middleware and interact with databases and other external services. Routing: Express.js allows you to define routes for different HTTP methods are GET, POST, PUT, DELETE, etc. We can map specific URLs to functions or handlers that process the incoming requests. <br />
                NestJS is a powerful and progressive framework for building efficient, scalable, and maintainable server-side applications using TypeScript. It is inspired by Angular and adopts many of its concepts and patterns, making it familiar to developers who have experience with Angular.
                </p>
            </div>

            <div className="b1">
                <h2 className='font-bold'>4. What is MongoDB aggregate and how does it work?</h2>
                <p>Ans: MongoDB is the aggregate function is a powerful tool used for performing advanced data processing and analysis operations on collections of documents. It allows you to perform complex data transformations, aggregations, and computations within the database. For example, a stage can filter documents, group documents, and calculate values. The documents that are output from a stage are passed to the next stage.</p>
            </div>

        </Container>
    );
};

export default Blog;