import * as React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import initialData, { IDatas, IColumn, ITask } from './Initial-Data';
import Column from './Column';

export default class App extends React.Component<{}, IDatas> {
  constructor(props: {}) {
    super(props);
    this.state = initialData;
    this.onDrageEnd = this.onDrageEnd.bind(this);
  }
  public render() {
    return (
      <DragDropContext
        onDragEnd={this.onDrageEnd}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          {
            this.state.columnOrder.map((columnId) => {
              const column: IColumn = this.state.columns[columnId];
              const tasks: ITask[] = column.taskIds.map((taskId) => {
                return this.state.tasks[taskId];
              })
              return (
                <Column
                  key={column.id}
                  column={column}
                  tasks={tasks}
                />
              );
            })
          }
        </div>
      </DragDropContext>
    );
  }

  private onDrageEnd(result: DropResult) {
    // coloumn 재배치
    if (!result.destination) { return; }
    if (
      result.destination.droppableId === result.source.droppableId &&
      result.destination.index === result.source.index
    ) {
      return;
    }
    const start: IColumn = this.state.columns[result.source.droppableId];
    const finish: IColumn = this.state.columns[result.destination.droppableId];
    if (start === finish) {

      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(result.source.index, 1);
      newTaskIds.splice(result.destination.index, 0, result.draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      }
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      }
      this.setState(newState);
      return;
    }else{
      // 다른 list로 옮길경우
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(result.source.index,1);
      const newStart = {
        ...start,
        taskIds: startTaskIds
      }
      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(result.source.index,0,result.draggableId);
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds
      }
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      }
      this.setState(newState);
      return;
    }
  }
}
