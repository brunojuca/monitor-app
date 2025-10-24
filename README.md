# Monitor App

## Monitor app for computer's resources

### English

The React application relies on the [capybara monitor](github.com/capybara-team/capybara-monitor), so as long as it is running (instructions on its github repository) you should be able to start this application with `npm start`.

Note: Currently you need to allow permission inside capybara-monitor's code to the port where the monitor app is running, this can be done with the code bellow:

### Português

A aplicação React depende do capybara monitor (github.com/capybara-team/capybara-monitor), portanto ele precisa estar rodando para que seja possível iniciar a aplicação com `npm start`.

Nota: No momento é necessário conceder permissão no código do capybara-monitor à porta em que a aplicação estiver rodando. Isso pode ser feito com o seguinte código: 

    app.use(function (req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:PORT_HERE');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    });
