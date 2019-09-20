import React, { Component } from 'react'
import axios from 'axios';





const AppContext = React.createContext();
export default class Context extends Component {
    state = {
        allStudents: [],
        profile: []
    }

    componentDidMount(){
        this.allStudents()
    }

    allStudents = () => {
        axios
        .get("http://localhost:5005/allstudents")
        .then(res => {
          console.log(res);
          let dataObj = [];
          let data = res;
          data.data.forEach(item => {
            const singleItem = { ...item };
            dataObj = [...dataObj, singleItem];
          });
          this.setState(() => {
            return { allStudents: dataObj };
          });
          console.log(this.state.allstudents);
        })
        .catch(err => console.log(`this is the error caught: ${err}`));
      }

    render() {
        return (
            <div>
              <AppContext.Provider value={{
                ...this.state
              }}
              >
                  {this.props.children}

              </AppContext.Provider>
            </div>
        )
    }
}

const ProductConsumer = AppContext.Consumer;

export { Context, ProductConsumer }
