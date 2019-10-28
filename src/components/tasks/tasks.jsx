import React, { Component } from "react";
import {Button, Table} from 'react-bootstrap';
import MenuTasksContainer from './menuTasksContainer'
import TopMenu from "../topMenu/topMenu";

export default class Tasks extends Component {
    render() {

        return (
            <div>
                <TopMenu/>
                <MenuTasksContainer  />
                <Table className="m-3">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>username</th>
                        <th>email</th>
                        <th>text</th>
                        <th>status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.tasks.map( item => {
                            return <Task id = {item.id}
                                         username = {item.username}
                                         email = {item.email}
                                         text = {item.text}
                                         status = {item.status}
                            />
                        })
                    }
                    </tbody>
                </Table>
                <hr/><hr/>
                <Button variant="outline-success"
                        href="/create"
                        className="m-1"
                >Добавить Task</Button>
            </div>
        );
    }
}

class Task extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.username}</td>
                <td>{this.props.email}</td>
                <td>{this.props.text}</td>
                <td>{this.props.status}</td>
            </tr>

        );
    }
}

