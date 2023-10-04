from flask import Flask,render_template
import os, importedfile
p='index.html'
app= Flask(__name__)

@app.route('/')
def home():
	return render_template(p)
@app.route('/load')
def loadSongs():
		data=importedfile.this()
		return data
		
if __name__ == "__main__":
    app.run(debug=True, port=5000)