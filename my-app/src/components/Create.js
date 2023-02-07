import React,{useState} from 'react';

import {Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import demos from './demo';

import {v4 as uuid} from "uuid";
import { useNavigate} from 'react-router-dom';

function Create(){
    const [date,setDate] = useState('');
    const [time,setTime] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0,8);
        let a = date, b  = time;

        demos.push({id:uniqueId,date: a,time:b});
        history('/add');
    }


    return (
        <div>
            <Form className='d-grid gap-2' style={{margin:"15rem"}}>
                <Form.Group className='mb-3' controlId='formDate'>
                    <Form.Control type='text' placeholder='Enter Date' required onChange={(e)=>setDate(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formTime'>
                    <Form.Control type='text' placeholder='Enter Time' required onChange={(e)=>setTime(e.target.value)}></Form.Control>
                </Form.Group>
                <Button onClick={(e)=> handleSubmit(e)} type='submit'>Submit</Button>
            </Form>
        </div>
    );
}

export default Create;