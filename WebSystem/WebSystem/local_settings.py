# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.mysql',
#         'HOST': 'localhost',
#         'NAME': 'Duara_Beta',
#         'USER': 'root',
#         'PASSWORD': '',
#     }
# }

ALLOWED_HOSTS = [
    "localhost",
    "duara.io",
    "duara.io.10.0.0.2.xip.io",
    "127.0.0.1",
    "192.168.143.19",
    "102.164.56.58"
]
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

DEBUG = True

