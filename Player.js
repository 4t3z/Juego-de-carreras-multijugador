class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.rank = null;
    }
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        console.log(data.val());
        playerCount = data.val();
      })
    }
    updateCount(count){
      //console.log(count);
      database.ref('/').update({
        playerCount: count
      });
    }
    update(name){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
    static getPlayerInfo(){
      var playerInfoRef = database.ref("players");
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
     });
    }
    getCarsAtEnd(){
      database.ref("CarsAtEnd").on("value",(data)=>{
        this.rank = data.val();
      });
    }
    static updateCarsAtEnd(rank){
      database.ref("/").update({
        CarsAtEnd: rank
      });
   }
}