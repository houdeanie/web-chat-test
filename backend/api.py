from flask import render_template, request, redirect, url_for, abort

@app.route('/send/', methods=["POST"])
def mains():
    if request.method == 'POST':
        errors = []
    return 0
    
@app.route('/receive/', methods=["GET"])
def mains():
    if request.method == 'GET':
        errors = []
    return 0

if __name__ == '__main__':
    # SIGINT to stop (Ctrl + C)
    app.run(debug=True)