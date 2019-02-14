from django.urls import path

from . import views
name = 'Landing'
urlpatterns = [
    path('', views.index, name= 'index'),
    path('about', views.about, name= 'about us'),
    path('contact', views.contact, name= 'contact us'),
    path('gallery', views.gallery, name= 'gallery'),
    path('meetteam', views.meetteam, name= 'meetteam'),
    path('contactus', views.contactus, name= 'contactform'),
]