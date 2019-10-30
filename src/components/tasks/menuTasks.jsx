import React, {Component} from "react";
import {Button, Row, Col} from "react-bootstrap";



export default class MenuTasks extends Component {
    constructor(props) {
        super(props);
        this.loadTasks = this.loadTasks.bind(this);
        this.onPageChange = this.onPageChange.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onDirectionChange = this.onDirectionChange.bind(this);
        this.startLoad = this.startLoad.bind(this);

    }
    startLoad() {
        if (!this.props.total_task_count) {
            this.loadTasks()
        }
    }

    async loadTasks(){
        const url = "https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Alexsei"
            +'&sort_field='+ this.props.sort_field
            +'&sort_direction='+ this.props.sort_direction
            +'&page='+ this.props.page;
       // console.log('Start Fetch', url);
        const response = await fetch(url).then(response => response.json());
        //console.log(response)
        if (response['status'] ==="ok") {
            this.props.setTasksTotalTaskCount(response['message']['total_task_count']);
            this.props.setTasksText(response['message']['tasks']);
            this.props.setTasksEdit([false,false,false]);
        }
    }

    onPageChange(page) {
        if ((1 <= page) && (page <= Math.ceil(this.props.total_task_count/3 ))){
            this.props.setTasksPage(page);
            setTimeout(this.loadTasks, 0);
        }
    }
    onFieldChange(field) {
        if (this.props.sort_field===field) {
            if (this.props.sort_direction==='asc') {
                this.props.setTasksSortDirection('desc');
            } else {
                this.props.setTasksSortDirection('asc');
            }
        }

        this.props.setTasksSortField(field);
        setTimeout(this.loadTasks, 0);
    }
    onDirectionChange(direction) {
        this.props.setTasksSortDirection(direction);
        setTimeout(this.loadTasks, 0);
    }


    render() {
        this.startLoad();
        return (
            <div>
                <hr/>
                <ul>
                    <li>Всего страниц: {Math.ceil(this.props.total_task_count/3 )}</li>
                    <li>Всего записей: {this.props.total_task_count}</li>
                    <li>Текушая страница: {this.props.page} навигация:
                        <Button variant="outline-secondary"
                                onClick={()=> this.onPageChange(1)}
                                className="m-1"
                        >В начало</Button>
                        <Button variant="outline-secondary"
                                onClick={()=> this.onPageChange(this.props.page-1)}
                                className="m-1"
                        >Назад </Button>
                        <Button variant="outline-secondary"
                                onClick={()=> this.onPageChange(this.props.page+1)}
                                className="m-1"
                        >Вперед</Button>
                        <Button variant="outline-secondary"
                                onClick={()=> this.onPageChange(Math.ceil(this.props.total_task_count/3 ))}
                                className="m-1"
                        >В Конец</Button>
                    </li>
                </ul>

                <Row className="mx-3">
                    <Col className="border"
                         md={1}
                         onClick={()=> this.onFieldChange('id')}
                    ><strong>
                        {this.props.sort_field === 'id' ? (
                            this.props.sort_direction === 'asc' ? (
                                <div>▼ id</div>
                            ) : (
                                <div>▲ id</div>
                            )
                        ) : (
                            <div> id</div>
                        )
                        }
                    </strong></Col>
                    <Col className="border"
                         md={1}
                         onClick={()=> this.onFieldChange('username')}
                    ><strong>
                        {this.props.sort_field === 'username' ? (
                            this.props.sort_direction === 'asc' ? (
                                <div>▼ username</div>
                            ) : (
                                <div>▲ username</div>
                            )
                        ) : (
                            <div>username</div>
                        )
                        }
                        </strong></Col>
                    <Col className="border"
                         md={2}
                         onClick={()=> this.onFieldChange('email')}
                    ><strong>
                        {this.props.sort_field === 'email' ? (
                            this.props.sort_direction === 'asc' ? (
                                <div>▼ email</div>
                            ) : (
                                <div>▲ email</div>
                            )
                        ) : (
                            <div>email</div>
                        )
                        }
                        </strong></Col>

                    <Col className="border" md={4}><strong>text</strong></Col>
                    <Col className="border"
                         md={3}
                         onClick={()=> this.onFieldChange('status')}
                    ><strong>
                        {this.props.sort_field === 'status' ? (
                            this.props.sort_direction === 'asc' ? (
                                <div>▼ status</div>
                            ) : (
                                <div>▲ status</div>
                            )
                        ) : (
                            <div>status</div>
                        )
                        }
                        </strong></Col>
                    <Col className="" md={1}></Col>
                </Row>
            </div>
        );
    }
}