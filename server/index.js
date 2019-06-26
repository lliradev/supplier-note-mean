const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
//Importante para comunicar el servidor
app.use(cors({ origin: 'http://localhost:4200' }));

// Routes
app.use('/api/suppliers/', require('./routes/supplier.routes'));
app.use('/api/notes/', require('./routes/note.routes'));
/*app.use('/api/external_expenses', require('./routes/external_expenses.routes'));
app.use('/api/pending_invoices', require('./routes/pending_invoice.routes'));
app.use('/api/notifications', require('./routes/notification.routes'));
app.use('/api/sales', require('./routes/sale.routes'));
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/schedules', require('./routes/schedule.routes'));*/


// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});