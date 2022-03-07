import * as React from 'react';
import { useState, useEffect } from 'react';
import { HtmlTagWrapper } from './html-tag-wrapper';
// @ts-ignore
 import {WebexMeetingsWidget} from '@webex/widgets';
import '@webex/widgets/dist/css/webex-widgets.css';


interface SimpleCalendarProps {
  clickDisabled?: boolean;
}

function SimpleCalendar(props: SimpleCalendarProps) {

  return (
    
    <div className="WebexMeeting">
        { 
            <WebexMeetingsWidget
            accessToken="ZTVkZDc3NDktMTdhNi00OWEwLThiNTItNTBhZGE5MGU1NWU5ODFiNTQxN2ItOTA2_PF84_1eb65fdf-9643-417f-9974-ad72cae0e10f"
            meetingDestination="https://cisco.webex.com/meet/rkanthet"
          />
        }
    </div>
  );
}

export { SimpleCalendar };
