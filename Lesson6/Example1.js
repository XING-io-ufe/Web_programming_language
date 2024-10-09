class Room {
  constructor(roomNumber, roomSize, price) {
    this.roomNumber = roomNumber;
    this.roomSize = roomSize;
    this.price = price;
  }

  roomInfo() {
    console.log(`oroonii dugaar: ${this.roomNumber}`);
    console.log(`oroonii hemjee: ${this.roomSize}`);

    console.log(`oroonii une: ${this.price} mnt`);
  }
  changeRoomSize(newSize) {
    this.roomSize = newSize;
    console.log(
      `${this.roomNumber}-r oroonii hemjee ${this.roomSize} bolj oorchlogdloo`
    );
  }
}

let room = new Room(101, "Big", 150000);

room.roomInfo();
room.changeRoomSize("small");
room.roomInfo();
