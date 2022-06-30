import React, { useState } from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const Calender = () => {

  
    
    
   
    
   
      const [selectedDay, setSelectedDay] = useState(new Date());
    
      const footer = selectedDay ? (
        <p>You selected {format(selectedDay, 'PPP')}.</p>
      ) : (
        <p>Please pick a day.</p>
      );
    
      return (
        <section className='m-auto'>
        <div className='m-auto'>
        <DayPicker
          mode="single"
          selected={selectedDay}
          onSelect={setSelectedDay}
          footer={footer}
        />
        </div>
        </section>
      );
    }


export default Calender;
