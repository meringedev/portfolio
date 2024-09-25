from rest_framework.serializers import ModelSerializer
from . import models

class ProjectsSerializer(ModelSerializer):
    class Meta:
        model = models.Projects
        fields = '__all__'