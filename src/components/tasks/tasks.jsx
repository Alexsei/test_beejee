import React, { Component } from "react";
import {Button, Table} from 'react-bootstrap';
import MenuTasksContainer from './menuTasksContainer'
import TopMenu from "../topMenu/topMenu";
import TaskContainer from "./task/taskContainer";

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
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.tasks.map( (item, index) => {
                            return <TaskContainer id = {item.id}
                                         index = {index}
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


