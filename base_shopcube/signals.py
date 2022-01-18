from django.db.models.signals import pre_save
from django.contrib.auth.models import User

# this is to tie the username with the email, if the username is left blank it will be given the value of email and if the value of email is changed the username will also change


def updateUser(sender, instance, **kwargs):
    user = instance
    if user.email != "":
        user.username = user.email


pre_save.connect(updateUser, sender=User)
