import cherrypy

class App(object):
    @cherrypy.expose
    def index(self):
        return open("index.html").read()

# run cherrypy
cherrypy.server.socket_host = '0.0.0.0'
cherrypy.quickstart(App(), '/')