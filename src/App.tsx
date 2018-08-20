

import * as React from 'react';
import { Button,List, ListItem,StyleRulesCallback, Theme,withStyles,  } from '@material-ui/core';

const style : StyleRulesCallback= (theme:Theme)=>({
  // ClassName : CssStyles
  colorChange :{
    backgroundColor:"green"
  },
  listClass :{
    backgroundColor:"blue"
  },
  name :{
    backgroundColor:"red",
    fontFamily:"san-serif",
    textAlign :"center"
  },
})

interface IProps{
  // withStyles HOC로 적용시킬 Props
  classes :{
    // Style과 같은 이름 : string
    colorChange:string;
    listClass:string;
    name : string;
  }
}

class App extends React.Component<IProps> {
  constructor(props:IProps){
    super(props);
  }
  public render() {
    return (
      <div>
        {/* 적용할 스타일의 이름을 클래스이름으로 지정 */}
        {/* 일반적인 태그들은 적용이 쉬움 */}
        <div className={this.props.classes.name}>
          test          
        </div>
        {/* List는 root부분하고 padding 부분 두개의 클래스명을 가짐 */}
        {/* className으로 추가한 것은 class이름이 하나가 더 붙음 */}
        {/*<List className={this.props.classes.listClass}>*/}
        {/* 밑처럼 특정부분에 추가해도 가능 */}
        <List 
          classes={{
            root : this.props.classes.listClass
          }}
        >
          <ListItem>
            test1
          </ListItem>
          <ListItem>
            test2
          </ListItem>
        </List>
        {/* root가 전체를 감싸고 있고 */}
        {/* label이 글씨 부분 */}
        {/* ripple이란 부분도 있고 등등 */}
        <Button
          classes ={{
            root : this.props.classes.colorChange
          }}
        >
          Material Button
        </Button>
      </div>
    );
  }
}
export default withStyles(style)(App);
