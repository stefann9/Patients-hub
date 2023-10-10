import React, { useState } from "react";
import "./RoomPicker.css";
import {
  SlTree,
  SlTreeItem,
} from "@shoelace-style/shoelace/dist/react";

function RoomPicker(props) {
  const roomNumbers = props.roomNumbers;
  const takenRooms = props.takenRooms;
  const [selectedRoom, setSelectedRoom] = useState("");
  
  return (
      <SlTree>
      <SlTreeItem>
        {selectedRoom ? selectedRoom : "Pick Room"}
        <SlTreeItem>
        <div className="body">
          {roomNumbers.map((room, i) => {
            return (
              <div>
                {takenRooms.includes(room) ? (
                  <button
                    className="taken-room"
                    onClick={() => {
                      setSelectedRoom();
                    }}
                  >
                    {room}
                  </button>
                ) : (
                  <button
                    className="free-room"
                    onClick={() => {
                      setSelectedRoom(room);
                    }}
                  >
                    {room}
                  </button>
                )}
              </div>
            );
          })}
        </div>
        </SlTreeItem>
      </SlTreeItem>
      </SlTree>
  );
}

export default RoomPicker;
