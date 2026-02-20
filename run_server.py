import os
import http.server


class RequestHandler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        ".js": "application/javascript",
        ".mjs": "application/javascript"
    }


if __name__ == '__main__':
    os.chdir('website')
    os.system(f'start "" "http://[::]:8000/index.html"')
    http.server.test(HandlerClass=RequestHandler)