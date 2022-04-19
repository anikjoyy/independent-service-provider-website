import React from 'react';
import { Card, Table } from 'react-bootstrap';

const Blogs = () => {
  return (
    <div>
      <div>
        <h2 className='text-center text-primary'>
          Questions & Answers Section
        </h2>
      </div>
      <div className='container w-50 mx-auto'>
        <Card style={{ width: '38rem' }}>
          <Card.Body>
            <Card.Title>
              Q1: Difference between Authentication and Authorization?
            </Card.Title>
            <Card.Text>
              <Table striped bordered hover>
                <thead>
                  <tr className='text-center'>
                    <th>SL.</th>
                    <th>Authentication</th>
                    <th>Authorization</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>In authentication, users are verified.</td>
                    <td>In authorization, users are validated.</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>It is done before the authorization process.</td>
                    <td>
                      This process is done after the authentication process.
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      Authentication determines whether the person is user or
                      not.
                    </td>
                    <td>While it determines What permission do user have?</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>It needs usually user's login details.</td>
                    <td>While it needs user's privilege or security levels.</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='mx-2 my-2 d-flex'>
        <Card className='mx-3' style={{ width: '36rem' }}>
          <Card.Body>
            <Card.Title>
              Q2: Why are you using 'firebase'? What other options do you have
              to implement authentication?
            </Card.Title>

            <Card.Text>
              Firebase manages all data real-time in the database. With
              Firebase, it's pretty simple to connect and use built-in
              third-party authentication providers, including Google, Facebook,
              Twitter, among others. The other ways to authenticate can be
              through cards, retina scans, voice recognition, and fingerprints.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '36rem' }}>
          <Card.Body>
            <Card.Title>
              Q3: What other services does 'firebase' provide other than
              authentication?
            </Card.Title>

            <Card.Text>
              There are many services which Firebase provides, Most useful of
              them are: Cloud firestore, Cloud functions, Hosting, Google
              Analytics etc.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Blogs;
