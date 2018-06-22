import './dev.scss';
import ReactClock from './main';

/*===example start===*/

// install: npm install afeiship/react-clock --save
// import : import ReactClock from 'react-clock'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-clock">
        <ReactClock ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
