var Card = function(suit, rank){
  this.suit = suit
  this.rank = rank
}

Card.prototype = {
  rankValue: function(){
    return RANKS.indexOf(this.rank) + 1
  }
}

module.exports = Card
