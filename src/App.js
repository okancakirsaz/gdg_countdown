import { useEffect, useState } from 'react';
import './App.css';

function App() {  
  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00", milliseconds:"000" });

  useEffect(() => {
    const targetDate = new Date("2024-12-13T00:00:00").getTime();

        const intervalId = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(intervalId);
                setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00", milliseconds: "000" });
            } else {
                const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
                const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
                const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
                const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");
                const milliseconds = String(distance % 1000).padStart(3, "0");

                setTimeLeft({ days, hours, minutes, seconds, milliseconds });
            }
        }, 10);

        return () => clearInterval(intervalId);
}, []);
  return (
    <div id='container'>
      <img className='logo' src='to_left.png'/>
      <div id='text'>{timeLeft.days}<span className='type'>Gün</span>:{timeLeft.hours}<span className='type'>Saat</span>:{timeLeft.minutes}<span className='type'>Dakika</span>:{timeLeft.seconds}<span className='type'>Saniye</span></div>
      <img className='logo' src='to_right.png'/>
    </div>
  );
}

function countdown(){
  const targetDate = new Date("2024-12-13T00:00:00").getTime(); 
  const now = new Date().getTime(); 

  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("text").innerHTML = 
      `${days} gün ${hours} saat ${minutes} dakika ${seconds} saniye`;

  if (distance < 0) {
      document.getElementById("text").innerHTML = "Süre doldu!";
  }
}

export default App;
