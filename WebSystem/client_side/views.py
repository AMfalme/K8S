from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.core.validators import validate_email
from django.core.mail import send_mail
from django.views.decorators.http import require_http_methods
from django.core.exceptions import ValidationError
from django.http import HttpResponse, JsonResponse
import json
import responses 
from smtplib import SMTPException
# Create your views here.

import logging

# Get an instance of a logger
logger = logging.getLogger(__name__)




@require_http_methods(["GET"])
def index(request):
    return render(request, 'client_side/index.html')


@require_http_methods(["GET"])
def about(request):
    return render(request, 'client_side/about.html')



@require_http_methods(["GET"])
def contact(request):
    return render(request, 'client_side/contact.html')

@require_http_methods(["GET"])
def gallery(request):
    return render(request, 'client_side/gallery.html')


@require_http_methods(["GET"])
def meetteam(request):
    return render(request, 'client_side/meetteam.html')


@require_http_methods(["POST"])
def contactus(request):
    response_message = None
    error = None

    try:
        data = json.loads(request.body.decode('utf-8'))
        name = data["name"]
        email = data["email"]
        message = data["message"]
        if not (name):
            raise ValidationError("Missing 'name'")
        elif not (message):
            raise ValidationError("Missing'message'")
        validate_email(email)
    except (ValidationError, KeyError, ValueError) as e:
        # logger.warning(e)
        error = responses.LANDING_PAGE_ERROR["bad_input"]
        print(str(e))
        return JsonResponse({
            "message" : None,
            "error" : responses.LANDING_PAGE_ERROR["bad_input"]
        })


    email_body = """
    From: %s
    E-mail: %s

    %s

    """ % ( data["name"],
            data["email"],
            data["message"]
            )


    subject = "Website Inquiry Contact us Page"

    try:
        send_mail(
            subject,
            email_body,
            settings.LANDING_PAGE_INQUIRY_SENDER,
            [settings.LANDING_PAGE_INQUIRY_RECIPIENT],
            fail_silently=False
        )
        response_message = responses.LANDING_PAGE_MESSAGE["inquiry_email_send_success"]
        error = "None"
    except SMTPException as e:
        logger.error("Failed to send email inquiry")
        logger.error(e)
        error = responses.LANDING_PAGE_ERROR["contact_form_email_send_failure"]
        print(response_message);

    return JsonResponse({
        "message": response_message,
        "error": error
    })
