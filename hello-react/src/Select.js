import React, { Component } from 'react'
import css from './Select.module.css';

class Select extends Component {
  state = {
    opened: false,
  };

  toggleSelect = (event) => {
    event.nativeEvent.stopImmediatePropagation();
    this.setState({
      opened: !this.state.opened,
    });
  }

  closeSelect = () => {
    this.setState({
      opened: false,
    });
  }

  componentDidMount() {
    document.addEventListener('click', this.closeSelect);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeSelect);
  }

  handleClick = (item) => {
    this.props.onSelected(item);
  }

  render() {
    const { items = [], selected = null } = this.props;

    // const divItems = [<div>Jean</div>, <div>Eric</div>];
    const divItems = items.map((item, i) => <div key={i} onClick={() => this.handleClick(item)}>{item}</div>);

    return (
      <div className={css.Select}>
        <div className={css.Selected} onClick={this.toggleSelect}>{selected}</div>
        {this.state.opened && (
          <div className={css.Items}>
            {divItems}
          </div>
        )}
      </div>
    )
  }
}

export {
  Select,
}