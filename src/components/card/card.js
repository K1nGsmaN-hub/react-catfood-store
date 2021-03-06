import React, {Component} from "react";

import cat from '../../assets/Photo.png'

import './card.sass'
import '../../static/Trebuchet.css'

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.canvRef = React.createRef()
    this.state = {
      color: '#1698d9',
      cardActive: false,
      hoverActive: false
    }
  }

  componentDidMount() {
    this.printCanvas()
  }
  componentDidUpdate() {
    this.printCanvas()
  }

  onCLick = () => {
    this.setState(({hoverActive, cardActive}) => {
      const curHover = false
      const curCard = !cardActive
      return {
        hoverActive: curHover,
        cardActive: curCard,
        color: (curCard) ? '#d91667' : '#1698d9'
      }
    })
  }

  onMouseEnter = () => {
    this.setState({
      hoverActive: true,
      color: '#d91667'
    })
  }

  onMouseLeave = () => {
    this.setState(({hoverActive, cardActive}) => {
      const curColor = (cardActive) ? '#d91667' : '#1698d9'
      return {
        hoverActive: false,
        color: curColor
      }
    })
  }

  printCanvas = () => {
    const {inActive} = this.props
    const color = (inActive) ? '#b3b3b3' : this.state.color

    const ctx = this.canvRef.current.getContext('2d')

    ctx.strokeStyle = color;
    ctx.fillStyle = '#f2f2f2'
    ctx.lineWidth = 4;

    ctx.beginPath();

    ctx.moveTo(303, 2);
    ctx.arcTo(318, 2, 318, 17, 15) // x1, y1 - угол скругленя, x2, y2, radius

    ctx.lineTo(318, 466);
    ctx.arcTo(318, 478, 303, 478, 15)

    ctx.lineTo(17, 478);
    ctx.arcTo(2, 478, 2, 466, 15)

    ctx.lineTo(2, 43);
    ctx.lineTo(43, 2);
    ctx.closePath();

    ctx.fill()
    ctx.stroke();
  }

  render() {
    const {inActive, supTitle, subTitle, title, kg, portions, mouse, descr} = this.props

    let color = (inActive) ? '#b3b3b3' : this.state.color

    const classList = (inActive) ? 'card card_in-active' : 'card'
    return (
          <div className={classList}
               onClick={this.onCLick}
               onMouseEnter={this.onMouseEnter}
               onMouseLeave={this.onMouseLeave}
          >
            <canvas ref={this.canvRef} width={320} height={480}></canvas>
            <div className="card__text">
              <p className="card__suptitle">{supTitle}</p>
              <h1 className="card__title">{title}</h1>
              <h2 className="card__subtitle">{subTitle}</h2>
              <p className="card__portions"><span>{portions}</span> порций</p>
              <p className="card__mouse">{mouse ? <span>{mouse}</span> : 'мышь'} в подарок</p>
            </div>
            <img className="card__cat" src={cat} alt="cat"/>
            <div className="card__weight" style={{backgroundColor: color}}>
              <p>{kg}</p>
              <span>кг</span>
            </div>
            <div className="description">
              <p>{inActive ? `Печалька, ${title} ${subTitle} закончился.` : descr}</p>
            </div>
          </div>
    )
  }
}
