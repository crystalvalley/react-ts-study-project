import * as React from 'react';
import { IColumn, ITask } from './Initial-Data';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';
import { StyleRulesCallback, withStyles, Theme } from '@material-ui/core';

const style:StyleRulesCallback = (theme : Theme)=>({
    containerRed:{
        backgroundColor:"crimson",
        flexGrow:1
        
    },
    containerBlue:{
        backgroundColor:"skyblue",
        flexGrow:1
    }
})

interface IProps {
    classes:{
        containerRed:string;
        containerBlue:string;
    }
    column: IColumn;
    tasks: ITask[];
}

class Column extends React.Component<IProps>{
    public render() {
        return (
            <div
                style={{
                    margin: "8px",
                    border: "1px solid black",
                    borderRadius: "2px", 
                    height:"300px",
                    display:"flex",
                    flexDirection:"column"
                }}
            >
                <h3
                    style={{
                        padding: "8px"
                    }}
                >
                    {this.props.column.title}
                </h3>
                {/* prop의 칼럼 id를 기준으로 드랍가능하게 */}
                <Droppable
                    droppableId={this.props.column.id}
                >
                    {(provided,snapshot) => {
                        return (
                            <div
                                className={snapshot.isDraggingOver?this.props.classes.containerBlue:this.props.classes.containerRed}
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                style={{
                                    paddingLeft: "8px",
                                    paddingRight: "8px"
                                }}
                            >
                                {
                                    this.props.tasks.map((task,index) => {
                                        return (
                                            <Task
                                                index={index}
                                                key={task.id}
                                                task={task}
                                            />
                                        );
                                    })
                                }
                                {provided.placeholder}
                            </div>
                        );
                    }}
                </Droppable>
            </div>
        );
    }
}

export default withStyles(style)(Column);