import React, {Component} from "react";
import {Button} from "react-bootstrap";


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
        const response = await fetch(url).then(response => response.json())
        //console.log(response)
        if (response['status'] ==="ok") {
            this.props.setTasksTotalTaskCount(response['message']['total_task_count'])
            this.props.setTasksText(response['message']['tasks'])
        }
    }

    onPageChange(page) {
        if ((1 <= page) && (page <= Math.ceil(this.props.total_task_count/3 ))){
            this.props.setTasksPage(page);
            setTimeout(this.loadTasks, 0);
        }
    }
    onFieldChange(field) {
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

                    <li>Сортировка по: {this.props.sort_field} . выбрать =>
                        <Button variant="outline-secondary"
                                onClick={()=> this.onFieldChange('id')}
                                className="m-1"

                        >id</Button>
                        <Button variant="outline-secondary"
                                onClick={()=> this.onFieldChange('username')}
                                className="m-1"
                        >username</Button>
                        <Button variant="outline-secondary"
                                onClick={()=> this.onFieldChange('email')}
                                className="m-1"
                        >email</Button>
                        <Button variant="outline-secondary"
                                onClick={()=> this.onFieldChange('status')}
                                className="m-1"
                        >status</Button>
                    </li>
                    <li>Направление: {this.props.sort_direction} . выбрать =>
                        <Button variant="outline-secondary"
                                onClick={()=> this.onDirectionChange('asc')}
                                className="m-1"
                        >asc</Button>
                        <Button variant="outline-secondary"
                                onClick={()=> this.onDirectionChange('desc')}
                                className="m-1"
                        >desc</Button>
                    </li>
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
            </div>
        );
    }
}