import cherrypy
from os.path import abspath

class App(object):
    @cherrypy.expose
    def index(self):
        return open("index.html").read()

cherrypy.server.socket_host = '0.0.0.0'
cherrypy.quickstart(App(), '/')
