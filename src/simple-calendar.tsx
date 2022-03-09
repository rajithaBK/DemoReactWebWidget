import * as React from 'react';
import { useState, useEffect } from 'react';
import { HtmlTagWrapper } from './html-tag-wrapper';

 import {WebexMeetingsWidget} from '@webex/widgets';
import '@webex/widgets/dist/css/webex-widgets.css';
import './simple-calendar.css';


interface SimpleCalendarProps {
  accesstoken?: String;
  destination?: String;
}

function SimpleCalendar(props: SimpleCalendarProps) {
  const { accesstoken } = props;
  const {destination} =props;
  console.log('accesstoken',accesstoken);

  return (
    
    <div className="WebexMeeting">
        { 
            <WebexMeetingsWidget
            accessToken={accesstoken}
            meetingDestination={destination}
          />
        }
    </div>
  );
}

export { SimpleCalendar };
