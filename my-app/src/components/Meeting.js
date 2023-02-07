import React from 'react';
import {Button,Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import demos from './demo';
import {Link,useNavigate} from 'react-router-dom';
const Meeting = () =>{
    let history = useNavigate();

    const handleEdit = (id,date,time) =>{
        localStorage.setItem('date',date);
        localStorage.setItem('time',time);
        localStorage.setItem('id',id);
    }

    const handleDelete = (id)=>{
        var index = demos.map(function(e){
            return e.id
        }).indexOf(id);
        demos.splice(index,1);
        history('/add')
    }
    return(
        <div style={{margin:"10rem"}}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>S No.</th>
                        <th>date</th>
                        <th>time</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        demos && demos.length>0
                        ?
                        demos.map((item)=>{
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.date}</td>
                                    <td>{item.time}</td>
                                    <td>
                                    <Link to='/edit'>
                                    <Button onClick={()=>handleEdit(item.id,item.date,item.time)}>Edit</Button>
                                    </Link>
                                    <Button onClick={()=>handleDelete(item.id)}>Delete</Button></td>
                                </tr>
                            )
                        })
                        : "No Meeting Sheduled"
                    }
                </tbody>
            </Table>
            <br>
            </br>
            <Link className='d-grid gap-2' to="/create">
                <Button  size='lg'>Create</Button>
            </Link>
        </div>
    )
}

export default Meeting;