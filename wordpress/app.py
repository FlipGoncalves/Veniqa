import cherrypy
import logging
from logging.handlers import SysLogHandler

from pysyslogclient import SyslogClientRFC5424 as SyslogClient

class RELPHandler(logging.Handler):
    def __init__(self, host, port):
        super().__init__()
        self.client = SyslogClient(host, port, proto="TCP")
        self.client.connect()

    def emit(self, record):
        try:
            msg = self.format(record)
            self.client.log(msg, facility='user', severity='info')
        except Exception as e:
            self.handleError(record)
            print(f"Error sending log message: {e}")

    def close(self):
        self.client.close()
        super().close()

class App(object):
    @cherrypy.expose
    def index(self):
        return open("index.html").read()

if __name__ == '__main__':
    # Configure the RELP handler
    relp_handler = RELPHandler('rsyslog.gic-asenhoradosaneis', 2514)
    formatter = logging.Formatter('%(asctime)s %(name)s: %(levelname)s %(message)s')
    relp_handler.setFormatter(formatter)

    # Get the CherryPy logger and add the RELP handler
    cherrypy_logger = logging.getLogger(__name__)
    cherrypy_logger.setLevel(logging.DEBUG)
    cherrypy_logger.addHandler(relp_handler)

    # run cherrypy
    cherrypy.server.socket_host = '0.0.0.0'
    cherrypy.quickstart(App(), '/')