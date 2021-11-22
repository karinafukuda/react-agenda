//import { getEventsEndpoint } from '../app/backend';
import { CalendarScreen } from './CalendarScreen';

function App() {
  // getEventsEndpoint().then(events => {
  //   for (const event of events) {
  //     console.log(event);
  //   }
  // });
  return (
    <div className="App">
      <CalendarScreen />;
    </div>
  );
}

export default App;
