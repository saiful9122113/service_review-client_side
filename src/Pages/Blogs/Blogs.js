import React from "react";

const Blogs = () => {
  return (
    <div>
        <div className="text-center">
            <h1 className="text-orange-600 font-bold text-3xl">Blogs</h1>
            <h2 className="font-semibold text-2xl text-gray">Click into the Question to show the answer</h2>
        </div>


      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <bold>Q:</bold>Difference between SQL and NoSQL?
        </div>
        <div className="collapse-content">
          <p>
            <bold>SQL : </bold>JWT, or JSON Web Token, is an open standard used
            to share information between two parties securely — a client and a
            server. In most cases, it’s an encoded JSON containing a set of
            claims and a signature. It’s usually used in the context of other
            authentication mechanisms like OAuth, OpenID to share user-related
            information. It’s also a popular way to authenticate/authorize users
            in a microservice architecture. JWT authentication is a token-based
            stateless authentication mechanism. It is popularly used as a
            client-side-based stateless session, this means the server doesn’t
            have to completely rely on a data store (or) database to save
            session information. JWTs can be encrypted, but they are typically
            encoded & signed. We will be focusing on Signed JWTs. The purpose of
            Signed JWT is not to hide the data but to ensure the authenticity of
            the data. And that is why it’s highly recommended to use HTTPS with
            Signed JWTs. <br />
            <bold>NoSQL : </bold>NoSQL is a non-relational DMS, that does not
            require a fixed schema, avoids joins, and is easy to scale. NoSQL
            database is used for distributed data stores with humongous data
            storage needs. NoSQL is used for Big data and real-time web apps.
            For example companies like Twitter, Facebook, Google that collect
            terabytes of user data every single day. NoSQL database stands for
            “Not Only SQL” or “Not SQL.” Though a better term would NoREL NoSQL
            caught on. Carl Strozz introduced the NoSQL concept in 1998.
            Traditional RDBMS uses SQL syntax to store and retrieve data for
            further insights. Instead, a NoSQL database system encompasses a
            wide range of database technologies that can store structured,
            semi-structured, unstructured and polymorphic data. Next, we will
            discuss the key diff between SQL and NoSQL.
          </p>
        </div>
      </div>

      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <bold>Q:</bold>What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            <bold>JWT : </bold>Structured Query language (SQL) pronounced as
            “S-Q-L” or sometimes as “See-Quel” is the standard language for
            dealing with Relational Databases. A relational database defines
            relationships in the form of tables. SQL programming can be
            effectively used to insert, search, update, delete database records.
            That doesn’t mean SQL cannot do things beyond that. It can do a lot
            of things including, but not limited to, optimizing and maintenance
            of databases. Relational databases like MySQL Database, Oracle, Ms
            SQL Server, Sybase, etc. use SQL. <br />
            <bold>Working Principle : </bold>When it comes to API authentication
            and server-to-server authorization, JSON web token (JWT) is
            particularly a useful technology. In terms of Single Sign-On (SSO),
            it means that a service provider can receive trustworthy information
            from the authentication server. By sharing a secret key with the
            Identity Provider, the Service Provider can hash a part of a token
            it receives and compare it to the signature of the token. Now, if
            that result matches the signature, the SP knows that the information
            provided has come from the other entity possessing the key.User
            sign-in using username and password. The authentication server
            verifies the credentials and issues a JWT signed using a private
            key. Moving forward, the client will use the JWT to access protected
            resources by passing the JWT in the HTTP Authorization header. The
            resource server then verifies the authenticity of the token using
            the public key. The Identity Provider generates a JWT certifying
            user identity, and the resource server decodes and verifies the
            authenticity of the token using the public key. Since the tokens are
            used for authorization and authentication in future requests and API
            calls great care must be taken to prevent security issues. These
            tokens shouldn’t be stored in publicly accessible areas like the
            browser’s local storage or cookies. In case there are no other
            choices, then the payload should be encrypted.
          </p>
        </div>
      </div>

      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <bold>Q:</bold>What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content">
          <p>
            <bold>JS & NodeJS : </bold>
            <br />
            1. JavaScript is a client-side scripting language that is
            lightweight, cross-platform, and interpreted. Both Java and HTML
            include it. Node.js, on the other hand, is a V8-based server-side
            programming language. As a result, it is used to create
            network-centric applications. It's a networked system made for
            data-intensive real-time applications. If we compare node js vs.
            python, it is clear that node js will always be the preferred
            option. <br />
            <br />
            2. JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node.js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language. It requires libraries that can be
            conveniently accessed from JavaScript programming to be more
            helpful.
            <br />
            <br />
            3. Any engine may run JavaScript. As a result, writing JavaScript is
            incredibly easy, and any working environment is similar to a
            complete browser. Node.js, on the other hand, only enables the V8
            engine. Written JavaScript code, on the other hand, can run in any
            context, regardless of whether the V8 engine is supported.
            <br />
            <br />
            4. A specific non-blocking operation is required to access any
            operating system. There are a few essential objects in JavaScript,
            but they are entirely OS-specific.
            <br />
            <br />
            Node.js, on the other hand, can now operate non-blocking software
            tasks out of any JavaScript programming. It contains no OS-specific
            constants. Node.js establishes a strong relationship with the system
            files, allowing companies to read and write to the hard drive. 5.
            The critical benefits of JavaScript include a wide choice of
            interfaces and interactions and just the proper amount of server
            contact and direct visitor input.
            <br />
            <br />
            Node.js, on the other hand, offers node package management with over
            500 modules and the capacity to handle many requests at the same
            time. It also offers the unique ability to enable microservice
            architecture and the Internet of Things. Even when comparing node js
            vs. react js, node js always wins.
          </p>
        </div>
      </div>

      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <bold>Q:</bold>How does NodeJS handle multiple requests at the same
          time?
        </div>
        <div className="collapse-content">
          <p>
            <bold>NodeJS multiple requests : </bold>Before getting into the Node
            server architecture, to take a look at typical multithreaded request
            response model, the web server would have multiple threads and when
            concurrent requests get to the webserver, the webserver picks
            threadOne from the threadPool and threadOne processes requestOne and
            responds to clientOne and when the second request comes in, the web
            server picks up the second thread from the threadPool and picks up
            requestTwo and processes it and responds to clientTwo. threadOne is
            responsible for all kinds of operations that requestOne demanded
            including doing any blocking IO operations. <br />
            <br />
            The fact that the thread needs to wait for blocking IO operations is
            what makes it inefficient. With this kind of a model, the webserver
            is only able to serve as much requests as there are threads in the
            thread pool. NodeJS Web Server maintains a limited Thread Pool to
            provide services to client requests. Multiple clients make multiple
            requests to the NodeJS server. NodeJS receives these requests and
            places them into the EventQueue .<br />
            <br />
            NodeJS server has an internal component referred to as the EventLoop
            which is an infinite loop that receives requests and processes them.
            This EventLoop is single threaded. In other words, EventLoop is the
            listener for the EventQueue. So, we have an event queue where the
            requests are being placed and we have an event loop listening to
            these requests in the event queue. What happens next? The
            listener(the event loop) processes the request and if it is able to
            process the request without needing any blocking IO operations, then
            the event loop would itself process the request and sends the
            response back to the client by itself.
            <br />
            <br />
            If the current request uses blocking IO operations, the event loop
            sees whether there are threads available in the thread pool, picks
            up one thread from the thread pool and assigns the particular
            request to the picked thread. That thread does the blocking IO
            operations and sends the response back to the event loop and once
            the response gets to the event loop, the event loop sends the
            response back to the client.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
