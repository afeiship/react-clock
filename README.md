# react-clock
> A beautiful clock for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number
  };

  static defaultProps = {
    hours: 3,
    minutes: 10,
    seconds: 35
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-clock --registry=https://registry.npm.taobao.org
```

```js
import ReactClock from 'react-clock';
```

```scss
// customize your styles:
$react-clock-options:(
);

@import 'node_modules/react-clock/dist/style.scss';
```


## usage:
```jsx

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

```

## resouces:
+ https://cssanimation.rocks/clocks/
