from django.db import models

# Create your models here.
class Projects(models.Model):
    project_name = models.CharField(max_length=250)
    project_techs = models.CharField(max_length=250)
    description = models.CharField(max_length=500)
    has_site_url = models.BooleanField(default=False)
    project_site_url = models.URLField(blank=True)
    project_github_url = models.URLField(blank=True)