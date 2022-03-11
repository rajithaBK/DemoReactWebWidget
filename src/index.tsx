import 'babel-polyfill';
import MeetingWidget from './simple-calendar';
import { HtmlTagWrapper } from './html-tag-wrapper';
import React from 'react';
import ReactDOM from 'react-dom';
declare const window: any;

// type InitialData = {
//   accesstoken: string;
//   destination: string;
// };
// const initialData = window.__INITIAL_DATA__ as InitialData;
// window.data="123";
// console.log('initial data',initialData.accesstoken);
// console.log('initial data',initialData.destination);
// const renderComponent = React.createElement(MeetingWidget, initialData);
// ReactDOM.render(renderComponent, document.getElementById('simple-calendar'));


// window.MyReactApp = {
//   init: (selector, myData) => {
//       selector = selector.substring(1);
//       console.log("data",myData);
//       const renderComponent = React.createElement(MeetingWidget, myData);
//       ReactDOM.render(renderComponent, document.getElementById(selector));
//   },
// };

// export default window.MyReactApp;
//const WrappedSimpleCalendar = HtmlTagWrapper(SimpleCalendar);


// export default {
//   SimpleCalendar: WrappedSimpleCalendar,
// };

// const renderWidget = (options, element) => {
//   console.log('options',options);
//   ReactDOM.render(React.createElement(MeetingWidget, options), element);
  
// }




// window.webex.meetingWidget = renderWidget;

const renderWidget = (options) => {
    console.log("received params", options);
    ReactDOM.render(React.createElement(MeetingWidget, options), document.querySelector("#simple-calendar"));
}

if (!window.webexMeetingWidget) { // this is how you inject an object
    window.webexMeetingWidget = renderWidget;
  }
