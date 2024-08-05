import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SubjectCards from './SubjectCards';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import MuiCalender from './MuiCalender';

export default function Contents() {
  const [subject, setSubject] = useState('');
  const [standard, setStandard] = useState('');
  const [show, setShow] = useState(false);
  const [datas, setDatas] = useState([
    {
      day: 'SUN',
      standard: 'V-A',
      from: '11:20 AM',
      to: '12:20 PM',
      date: new Date().getDate(),
      session: 'Session name will come here',
      subject: 'English',
    },
    {
      day: 'SUN',
      standard: 'V-A',
      from: '11:20 AM',
      to: '12:20 PM',
      date: new Date().getDate(),
      session: 'Session name will come here',
      subject: 'Maths',
    },
    {
      day: 'SUN',
      standard: 'V-A',
      from: '11:20 AM',
      to: '12:20 PM',
      date: new Date().getDate(),
      session: 'Session name will come here',
      subject: 'Social',
    },
    {
      day: 'SUN',
      standard: 'V-A',
      from: '11:20 AM',
      to: '12:20 PM',
      date: new Date().getDate(),
      session: 'Session name will come here',
      subject: 'Science',
    },
  ]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    const newData = {
      day: 'SUN', // Default value for day
      standard: standard, // Use the selected standard
      from: '11:20 AM', // Default value for from
      to: '12:20 PM', // Default value for to
      date: new Date().getDate(), // Current date
      session: 'Session name will come here', // Default session name
      subject: subject, // Use the selected subject
    };

    setDatas([...datas, newData]);
    setShow(false);
    setSubject('')
    setStandard('')
  };

  return (
    <div style={{ justifyContent: 'center', display: 'flex' }}>
      <div style={{ width: '35%', background:"white" }}>
        <div style={{background:"#e6f2ff", border:"5px solid white", borderRadius:"10px"}}>
        <MuiCalender />
        </div>
        <div style={{marginLeft:"20px"}}>
          <h3 style={{ fontSize: '20px', opacity:"0.5" }}>Legends</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '5px' }}>
              <span style={{ color: 'green', fontSize: '25px' }}>●</span> Lesson Plan
            </li>
            <li style={{ marginBottom: '5px' }}>
              <span style={{ color: 'red', fontSize: '25px' }}>●</span> Assignment
            </li>
            <li style={{ marginBottom: '5px' }}>
              <span style={{ color: 'blue', fontSize: '25px' }}>●</span> Event Plan
            </li>
          </ul>
        </div>
        <Button variant='primary' style={{ width: '80%', marginLeft: '8%' }}>
          Manage Assignment
        </Button>
      </div>
      <div style={{ width: '65%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '10px' }}>
          <Button variant='primary' style={{ fontSize: '20px' }}>
            Today
          </Button>
          <div style={{ borderRadius: '50%', backgroundColor: '#ffffff', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', marginLeft: '10px', marginRight: '10px' }}>
            <ArrowBackIosIcon style={{ color: '#000000', fontSize: '20px' }} />
          </div>
          <h2 style={{ borderRadius: '40%', backgroundColor: '#ffffff', minWidth: '15%', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', marginLeft: '-15%', marginRight: '-15%', fontSize: '16px', marginTop: '8px' }}>
            Week 2
          </h2>
          <div style={{ borderRadius: '50%', backgroundColor: '#ffffff', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', marginLeft: '10px', marginRight: '10px' }}>
            <ArrowForwardIosIcon style={{ color: '#000000', fontSize: '20px' }} />
          </div>
          <Button variant='primary' onClick={handleShow} style={{ fontSize: '20px', marginLeft: '10px' }}>
            Add Event
          </Button>
        </div>

        <div>
          <SubjectCards datas={datas} />
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select aria-label='Default select example' value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option>Subjects</option>
            <option value='English'>English</option>
            <option value='Maths'>Maths</option>
            <option value='Science'>Science</option>
            <option value='Social'>Social</option>
          </Form.Select>
          <br />
          <Form.Select aria-label='Default select example' value={standard} onChange={(e) => setStandard(e.target.value)}>
            <option>Class</option>
            <option value='V'>V</option>
            <option value='VI'>VI</option>
            <option value='VII'>VII</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

