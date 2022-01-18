import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tiles: [],
      clicker: 0,
      lastFlipped: null
    }
    this.newGame = this.newGame.bind(this);
    this.flipTile = this.flipTile.bind(this);
  }

  newGame() {
    const tilesOriginal = Array(12).fill(0).map((_, index) => ({ flipped: true, matched: false, value: index }));
    const tilesOriginalDouble = tilesOriginal.concat(JSON.parse(JSON.stringify(tilesOriginal)));
    const tiles = tilesOriginalDouble.sort(() => Math.random() - 0.5);
    this.setState({ tiles, clicker: 0 });
  }

  flipBackAllTiles(tiles) {
    tiles.forEach(tile => {
      if (!tile.matched) tile.flipped = true;
    });
    return tiles;
  }

  flipTile(index) {
    const tiles = this.state.tiles;
    const tile = tiles[index];
    let lastFlipped = this.state.lastFlipped;
    let clicker = this.state.clicker;
    if (lastFlipped === null) {
      this.flipBackAllTiles(tiles);
      tile.flipped = tile.matched ? false : !tile.flipped;
      lastFlipped = index;
    } else {
      tile.flipped = tile.matched ? false : !tile.flipped;
      const lastFlippedTile = this.state.tiles[lastFlipped];
      if (lastFlippedTile.value === tile.value && index !== lastFlipped) {
        lastFlippedTile.matched = true;
        tile.matched = true;
        tiles[lastFlipped] = lastFlippedTile;        
      }      
      lastFlipped !== index && !tile.match && clicker++;
      lastFlipped = null;
    }
    tiles[index] = tile;
    this.setState({ clicker, tiles, lastFlipped });
  }

  renderTile(tile, index) {
    const classes = ["tile"];
    if (tile.flipped) classes.push("flipped");
    if (tile.matched) classes.push("matched");
    const key = `tile-${index}`;
    return (
      <div key={key} className={classes.join(" ")} onClick={() => this.flipTile(index)}>
        {!tile.flipped && tile.value}
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <h2>Memo</h2>
        <strong>You tried {this.state.clicker} times.</strong><br />
        <button onClick={this.newGame}>New Game</button><hr />
        <div className="tiles">
          {this.state.tiles.map((tile, index) => this.renderTile(tile, index))}
        </div>
      </div>
    );
  }
}

export default App;
