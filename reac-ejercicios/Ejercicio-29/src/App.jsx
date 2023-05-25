import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
  });

  const handleAddEvent = (e) => {
    e.preventDefault();

    if (newEvent.title && newEvent.start && newEvent.end) {
      setEvents([...events, newEvent]);
      setNewEvent({
        title: '',
        start: '',
        end: '',
      });
    }
  };

  const handleEditEvent = (updatedEvent) => {
    const updatedEvents = events.map((event) => (event.id === updatedEvent.id ? updatedEvent : event));
    setEvents(updatedEvents);
    setSelectedEvent(null);
  };

  const handleDeleteEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
    setSelectedEvent(null);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleDeselectEvent = () => {
    setSelectedEvent(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleDeselectEvent}
        onDoubleClickEvent={handleDeselectEvent}
        onSelecting={(range) => console.log('Selecting:', range)}
        defaultView="month"
        views={['month', 'week', 'day']}
        style={{ height: '500px' }}
      />

      {selectedEvent && (
        <div className="card mt-4">
          <div className="card-body">
            <h3 className="card-title">{selectedEvent.title}</h3>
            <p className="card-text">{moment(selectedEvent.start).format('LLL')}</p>
            <button className="btn btn-danger" onClick={() => handleDeleteEvent(selectedEvent.id)}>Eliminar</button>
          </div>
        </div>
      )}

      <div className="card mt-4">
        <div className="card-body">
          <h3 className="card-title">Agregar Evento</h3>
          <form onSubmit={handleAddEvent}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Nombre:</label>
              <input type="text" className="form-control" id="title" name="title" value={newEvent.title} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="start" className="form-label">Fecha de inicio:</label>
              <input type="datetime-local" className="form-control" id="start" name="start" value={newEvent.start} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="end" className="form-label">Fecha de fin:</label>
              <input type="datetime-local" className="form-control" id="end" name="end" value={newEvent.end} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Agregar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Calendario</h1>
      <CalendarComponent />
    </div>
  );
};

export default App;
