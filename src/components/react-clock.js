import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export default class extends Component{
  /*===properties start===*/
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
  /*===properties end===*/

  get hands(){
    const { seconds, minutes, hours } = this.props;
    return [
      {
        hand: 'hours',
        angle: (hours * 30) + (minutes / 2)
      },
      {
        hand: 'minutes',
        angle: (minutes * 6)
      },
      {
        hand: 'seconds',
        angle: (seconds * 6)
      }
    ];
  }

  componentDidMount(){
    this.initClocks();
  }

  initClocks(){
    const hands = this.hands;
    for (let j = 0; j < hands.length; j++) {
      const elements = document.querySelectorAll('.' + hands[j].hand);
      for (let k = 0; k < elements.length; k++) {
        elements[k].style.webkitTransform = 'rotateZ(' + hands[j].angle + 'deg)';
        elements[k].style.transform = 'rotateZ(' + hands[j].angle + 'deg)';
        // If this is a minute hand, note the seconds position (to calculate minute position later)
        if (hands[j].hand === 'minutes') {
          elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
        }
      }
    }
  }

  render(){
    const { className, ...props } = this.props;
    return (
      <section className={classNames('react-clock', className)}>
        <div className="hours-container">
          <i className="hours"/>
        </div>
        <div className="minutes-container">
          <i className="minutes"/>
        </div>
        <div className="seconds-container">
          <i className="seconds"/>
        </div>
      </section>
    );
  }
}
