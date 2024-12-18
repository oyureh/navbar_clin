from django.db import models
from tinymce.models import HTMLField

class edit_text(models.Model):
    name = models.CharField(max_length=200)
    remark = HTMLField()


