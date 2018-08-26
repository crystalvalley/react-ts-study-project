import * as React from 'react';
import { ITask } from './Initial-Data';
import { Draggable } from 'react-beautiful-dnd';
import {StyleRulesCallback, Theme, withStyles} from '@material-ui/core';

const style : StyleRulesCallback = (theme : Theme)=>({
    task : {
        border : "1px solid black",
        padding:"3px",
        marginBottom:"4px",
        display:"flex",
        fontSize:"2em"
    },
    colorRed :{
        backgroundColor:"lightgrey"
    },
    colorBlue :{
        backgroundColor:"lightblue"
    },
    box:{
        backgroundColor:"orange",
        width:"30px",
        height:"30px",
        borderRadius:"4px",
        margin:"2px"
    }
})
interface IProps {
    classes:{
        task : string;
        colorBlue:string;
        colorRed:string;
        box:string;
    }
    task: ITask
    index:number
}

class Task extends React.Component<IProps>{
    public render() {
        return (
            <Draggable
                draggableId={this.props.task.id}
                index={this.props.index}
            >{(provided,snapshot)=>{
                const clazz = snapshot.isDragging?this.props.classes.colorBlue:this.props.classes.colorRed;
                return(
                    <div
                        className={this.props.classes.task +" "+ clazz}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                    >
                    <div
                        {...provided.dragHandleProps}
                        className={this.props.classes.box}
                    />
                        {this.props.task.id}
                    </div>
                );
            }}
            </Draggable>
        );
    }
}

export default withStyles(style)(Task)