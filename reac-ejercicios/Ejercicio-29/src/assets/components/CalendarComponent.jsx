 export const CalendarComponent = () => {
    return (
      <div>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={(slotInfo) => console.log('Selected:', slotInfo)}
          onSelectEvent={(event) => console.log('Selected event:', event)}
          onDoubleClickEvent={(event) => console.log('Double click event:', event)}
          onSelecting={(range) => console.log('Selecting:', range)}
          defaultView="month"
          views={['month', 'week', 'day']}
          style={{ height: '500px' }}
        />
      </div>
    );
  };