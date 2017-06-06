 from flask import Flask, render_template, request

import requests




app = Flask(__name__)

# Mailgun Base URL
URL ='https://api.mailgun.net/v3/sandbox182e990f510a43658421f8ebe689627b.mailgun.org/messages'
MAILGUN_API_KEY = 'key-3a231c18b444bb1cefcf137e1954e2ab'
#

@app.route('/')
def index():
	return render_template('public/public.html')


@app.route('/contact', methods=['POST','GET'])
def contact():

	if request.method == 'POST':


		params = request.form
		print params
		text = params['message']
		phone = params['phone']
		name = params['name']
		email = params['email']
		resume = request.files['resume']
		resume.name = resume.filename

		text =  text  + make_footer(name,phone,email)
		if resume:
			send_mail(text,resume)
		else:
			send_mail(text)
		return render_template('public/public.html',message='Thank You for the Inquiry!')




def send_mail(text,resume=None):



		if resume:
			files = [('attachment',resume)]

		else:
			files = []
		return requests.post(URL,
        auth = ("api", MAILGUN_API_KEY),
         files=files,
        data = {"from": "Apexsolution <postmaster@Apexsolution.ca>",
               "to": ['navjotbabrah27@gmail.com'],
               "subject": 'APex',
               "text": text
               })

def make_footer(name,number,email):
	t = '\n\nRegards,\n'
	t += name+ '\n'
	t += number + '\n'
	t += email + '\n'

	return t


if __name__ == '__main__':
	app.run(host ='0.0.0.0',port=3047,debug=True)
