import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import { useContext, useState, } from 'react';
import {SearchContext} from "../../context/SearchContext"
import useFetch from "../../hooks/useFetch";
import {useNavigate} from "react-router-dom";
import './reserve.css'

export default function Reserve({setOpen,hotelId}) {
  const [selectedRooms,setSelectedRooms]=useState([])
  const {data,loading,error}=useFetch(`http://localhost:8800/api/hotels/room/${hotelId}`)

  const {dates}=useContext(SearchContext);

  const getDatesInRange=(startDate,endDate)=>{
    const start=new Date(startDate)
    const end=new Date(endDate)
    const date=new Date(start.getTime());
    let dates=[]
    while (date<=end)
    {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate()+1);
    }
    return dates;
  };
  const alldates=getDatesInRange(dates[0].startDate,dates[0].endDate)

  const isAvailable=(roomNumber)=>{
    const isFound=roomNumber.unavailableDates.some((date)=>
    alldates.includes(new Date(date).getTime())
    );
    return !isFound;
  }


  const handeSelect=(e)=>{
    const checked=e.target.checked
    const value=e.target.value
    setSelectedRooms(
      checked
      ?[...selectedRooms,value]
      :selectedRooms.filter((item)=>item!==value)
      )
      
    }

    const navigate=useNavigate();
    const handelClick = async ()=>{
      try {
        await Promise.all(
          selectedRooms.map((roomId)=>{
          const res=axios.put(`http://localhost:8800/api/rooms/availability/${roomId}`,{
            dates:alldates
          });
          return res.data
        })
        );
        setOpen(false)
        navigate("/")
      }catch (err) {}
    };
      
    // console.log(selectedRooms)
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {data.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">{item.price}</div>
            </div>
            <div className="rSelectRooms">
              {item.roomNumbers.map((roomNumber) => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handeSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handelClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  )
}
