export interface IDatas{
    tasks : {
        'task-1' : ITask;
        'task-2' : ITask;
        'task-3' : ITask;
        'task-4' : ITask;
    };
    columns: {
    "column-1" :IColumn;
    },
    columnOrder : string[];
}

export interface ITask{
    id:string;
    content : string;
}
export interface IColumn{
    id : string;
    title: string;
    taskIds : string[]
}

const initialData = {
    tasks:{
        'task-1':{
            id:"task-1",
            content:"content-1",
        },
        'task-2':{
            id:"task-2",
            content:"content-2",
        },
        'task-3':{
            id:"task-3",
            content:"content-3",
        },
        'task-4':{
            id:"task-4",
            content:"content-4",
        }
    },
    columns:{
        "column-1":{
            id:"column-1",
            title:"To do",
            taskIds : ['task-1','task-2','task-3','task-4']
        },
        "column-2":{
            id:"column-2",
            title:"In Progress",
            taskIds : []
        },
        "column-3":{
            id:"column-3",
            title:"Done",
            taskIds : []
        },

    },
    columnOrder : ["column-1","column-2","column-3"]
}

export default initialData;